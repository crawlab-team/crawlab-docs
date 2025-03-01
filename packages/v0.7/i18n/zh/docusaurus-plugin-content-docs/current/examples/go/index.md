---
sidebar_position: 5
title: 纯 Go 爬虫
---

# 纯 Go 爬虫

## Go 网页抓取介绍

Go（Golang）提供了出色的网页抓取支持，凭借其强大的标准库和第三方包。Go 的 goroutines 和 channels 使其特别适合构建并发爬虫，能够高效地处理大量数据。

## 将 Go 抓取器与 Crawlab 集成

本指南演示了如何创建一个基于纯 Go 的网页抓取器（不使用 Colly 框架），并将其与 Crawlab 集成以从虚构的引语网站收集引语。

### 在 Crawlab 中创建爬虫

1. 在 Crawlab 网页界面中，导航到爬虫列表
2. 点击“新建爬虫”按钮
3. 填写以下详细信息：
   - 名称： "quotes_scraper"
   - 执行命令： `go run main.go`
   - 参数：（留空）
4. 点击“确认”以创建爬虫

### 设置 Go 项目

在创建爬虫后，我们需要设置一个 Go 项目。我们将使用以下结构：

```
quotes_scraper/
├── main.go
├── go.mod
└── go.sum
```

#### 1. go.mod

```go
module quotes_scraper

go 1.19

require (
	github.com/PuerkitoBio/goquery v1.8.1
	github.com/crawlab-team/crawlab-sdk-go v0.1.0
)
```

#### 2. main.go

```go
package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/crawlab-team/crawlab-sdk-go"
)

// Quote 表示带有作者和标签的引语
type Quote struct {
	Text   string   `json:"text"`
	Author string   `json:"author"`
	Tags   []string `json:"tags"`
}

// 配置
const (
	baseURL        = "https://example-quotes.com"
	startURL       = baseURL + "/quotes/page/1"
	concurrency    = 3 // 并发抓取页面的数量
	requestTimeout = 10 * time.Second
)

func main() {
	// 设置日志输出
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)
	log.Println("开始引语抓取")

	// 从 Crawlab 读取参数
	category := ""
	if spiderParamStr := os.Getenv("CRAWLAB_SPIDER_PARAM"); spiderParamStr != "" {
		var params map[string]string
		if err := json.Unmarshal([]byte(spiderParamStr), &params); err == nil {
			category = params["category"]
		}
	}

	// 根据类别确定起始 URL
	url := startURL
	if category != "" {
		url = fmt.Sprintf("%s/quotes/category/%s/page/1", baseURL, category)
		log.Printf("使用类别过滤器: %s", category)
	}

	// 获取总页数
	totalPages, err := getTotalPages(url)
	if err != nil {
		log.Fatalf("获取总页数错误: %v", err)
	}
	log.Printf("找到 %d 页需要抓取", totalPages)

	// 创建一个通道来发送页面 URL 给工作程序
	pageURLs := make(chan string, totalPages)

	// 创建一个等待组以等待所有工作程序完成
	var wg sync.WaitGroup

	// 启动工作程序 goroutines
	for i := 0; i < concurrency; i++ {
		wg.Add(1)
		go worker(i, pageURLs, &wg)
	}

	// 发送所有页面 URL 到通道
	for i := 1; i <= totalPages; i++ {
		if category != "" {
			pageURLs <- fmt.Sprintf("%s/quotes/category/%s/page/%d", baseURL, category, i)
		} else {
			pageURLs <- fmt.Sprintf("%s/quotes/page/%d", baseURL, i)
		}
	}

	// 当所有 URL 发送完毕后关闭通道
	close(pageURLs)

	// 等待所有 goroutines 完成
	wg.Wait()

	log.Println("抓取完成成功")
}

// worker 处理通道中的 URL
func worker(id int, pageURLs <-chan string, wg *sync.WaitGroup) {
	defer wg.Done()

	for url := range pageURLs {
		log.Printf("工作程序 %d 处理 URL: %s", id, url)
		
		// 添加小延迟以避免服务器过载
		time.Sleep(time.Duration(500+id*200) * time.Millisecond)
		
		// 抓取页面
		if err := scrapePage(url); err != nil {
			log.Printf("抓取页面 %s 错误: %v", url, err)
		}
	}
}

// scrapePage 抓取单个页面的引语
func scrapePage(url string) error {
	// 创建具有超时的 HTTP 客户端
	client := &http.Client{
		Timeout: requestTimeout,
	}

	// 创建带有头的请求
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return fmt.Errorf("创建请求错误: %w", err)
	}

	// 添加头以模仿浏览器
	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
	req.Header.Set("Accept", "text/html,application/xhtml+xml,application/xml")
	req.Header.Set("Accept-Language", "en-US,en;q=0.9")

	// 发送请求
	resp, err := client.Do(req)
	if err != nil {
		return fmt.Errorf("发出请求错误: %w", err)
	}
	defer resp.Body.Close()

	// 检查响应状态码是否为 OK
	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("收到非 200 响应: %d", resp.StatusCode)
	}

	// 解析 HTML 文档
	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		return fmt.Errorf("解析 HTML 错误: %w", err)
	}

	// 查找所有引语元素
	doc.Find("div.quote").Each(func(i int, s *goquery.Selection) {
		// 提取引语文本
		text := strings.TrimSpace(s.Find("span.text").Text())
		text = strings.Trim(text, """) // 移除引号
		text = strings.Trim(text, """)

		// 提取作者
		author := strings.TrimSpace(s.Find("span.author").Text())

		// 提取标签
		var tags []string
		s.Find("a.tag").Each(func(i int, s *goquery.Selection) {
			tag := strings.TrimSpace(s.Text())
			tags = append(tags, tag)
		})

		// 创建引语对象
		quote := Quote{
			Text:   text,
			Author: author,
			Tags:   tags,
		}

		// 保存到 Crawlab
		jsonQuote, err := json.Marshal(quote)
		if err != nil {
			log.Printf("序列化引语错误: %v", err)
			return
		}

		if err := crawlab.SaveItem(string(jsonQuote)); err != nil {
			log.Printf("保存引语到 Crawlab 错误: %v", err)
			return
		}

		log.Printf("保存引语: %s 由 %s", truncateString(text, 30), author)
	})

	return nil
}

// getTotalPages 确定需要抓取的总页数
func getTotalPages(url string) (int, error) {
	// 创建具有超时的 HTTP 客户端
	client := &http.Client{
		Timeout: requestTimeout,
	}

	// 向第一页发出请求
	resp, err := client.Get(url)
	if err != nil {
		return 0, fmt.Errorf("发出请求错误: %w", err)
	}
	defer resp.Body.Close()

	// 检查响应状态码是否为 OK
	if resp.StatusCode != http.StatusOK {
		return 0, fmt.Errorf("收到非 200 响应: %d", resp.StatusCode)
	}

	// 创建响应体的副本
	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return 0, fmt.Errorf("读取响应体错误: %w", err)
	}

	// 从主体字节创建新读取器
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(string(bodyBytes)))
	if err != nil {
		return 0, fmt.Errorf("解析 HTML 错误: %w", err)
	}

	// 查找最后的分页链接
	lastPageStr := "1"
	doc.Find("ul.pagination li:not(.next) a").Each(func(i int, s *goquery.Selection) {
		pageStr := s.Text()
		lastPageStr = pageStr // 不断更新直到达到最后一个
	})

	// 转换为整数
	lastPage, err := strconv.Atoi(lastPageStr)
	if err != nil {
		return 0, fmt.Errorf("解析页码错误: %w", err)
	}

	return lastPage, nil
}

// 辅助函数用于截断长字符串
func truncateString(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen-3] + "..."
}
```

### 关键集成点

与 Crawlab 的主要集成点包括：

1. 导入 Crawlab SDK：
   ```go
   import "github.com/crawlab-team/crawlab-sdk-go"
   ```

2. 将数据保存到 Crawlab：
   ```go
   if err := crawlab.SaveItem(string(jsonQuote)); err != nil {
       log.Printf("保存引语到 Crawlab 错误: %v", err)
       return
   }
   ```

3. 从 Crawlab 读取参数：
   ```go
   if spiderParamStr := os.Getenv("CRAWLAB_SPIDER_PARAM"); spiderParamStr != "" {
       var params map[string]string
       if err := json.Unmarshal([]byte(spiderParamStr), &params); err == nil {
           category = params["category"]
       }
   }
   ```

### 环境设置

#### Crawlab 专业版
如果您使用的是 **Crawlab 专业版**，您可以直接从 Crawlab 界面安装 Go：

1. 导航到依赖项页面
2. 在“环境”下拉菜单中选择“Go”
3. 如果 Go 未安装，请点击“安装环境”
4. 选择要安装 Go 的版本和节点
5. 点击“确认”

安装 Go 后，您的节点将准备好运行基于 Go 的爬虫。

#### Crawlab 社区版
如果您使用的是 **Crawlab 社区版**，请确保 Go 已安装在您的节点上：

1. SSH 登录到您的节点服务器
2. 按照 [官方安装说明](https://golang.org/doc/install) 安装 Go
3. 使用 `go version` 验证安装

### 准备您的项目

在您的节点上安装 Go 后，上传您的项目文件：

1. 导航到您的爬虫详情页面
2. 点击“文件”选项卡
3. 上传 `main.go` 和 `go.mod` 文件

### 运行爬虫

1. 在 Crawlab 中，导航到您的爬虫详情页面
2. 点击“运行”按钮
3. 选择执行的节点
4. 点击“确认”以启动爬虫

爬虫完成后，您可以在爬虫详情页面的“数据”选项卡中查看收集的引语。

## 并发设计

此示例演示了 Go 中常见的并发抓取模式：

1. **工作程序池**：多个工作程序 goroutines 并行处理页面
2. **通道通信**：通过通道发送需要抓取的页面
3. **等待组同步**：等待组确保所有工作程序在程序退出前完成

这种方法允许抓取器高效地同时处理多个页面，同时控制并发级别以避免压垮目标服务器。

## 故障排除

如果在 Crawlab 中运行您的 Go 爬虫时遇到错误，请检查以下内容：

1. **缺少 Go 环境**：确保 Go 已安装在您的 Crawlab 节点上
2. **依赖问题**：通过运行 `go mod tidy` 验证所有所需包都可用
3. **网络连接**：检查您的节点是否可以访问目标网站
4. **空结果**：网站结构可能已更改；更新您的选择器

## 高级配置

### 处理速率限制

为了实现更复杂的速率限制：

```go
// 创建速率限制器以避免被封禁
rateLimiter := time.NewTicker(time.Second / 2) // 每秒 2 次请求
defer rateLimiter.Stop()

// 在您的抓取函数中
<-rateLimiter.C // 等待下一个滴答再发出请求
```

### 添加代理支持

要使用代理与您的 HTTP 客户端一起使用：

```go
import "golang.org/x/net/proxy"

func createProxyClient() (*http.Client, error) {
	// 创建代理拨号器
	dialer, err := proxy.SOCKS5("tcp", "proxy-server:1080", nil, proxy.Direct)
	if err != nil {
		return nil, err
	}
	
	// 创建使用代理拨号器的传输
	httpTransport := &http.Transport{
		Dial: dialer.Dial,
	}
	
	// 使用自定义传输创建 HTTP 客户端
	client := &http.Client{
		Transport: httpTransport,
		Timeout:   requestTimeout,
	}
	
	return client, nil
}
```

### 处理 JavaScript 丰富的站点

对于需要 JavaScript 渲染的网站，您可以使用 ChromeDP：

```go
// 在 go.mod 中添加：
// github.com/chromedp/chromedp v0.9.1

import (
	"context"
	"time"
	
	"github.com/chromedp/chromedp"
)

func scrapeJavaScriptPage(url string) (string, error) {
	// 创建带超时的上下文
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	
	// 创建无头 Chrome 实例
	opts := append(chromedp.DefaultExecAllocatorOptions[:],
		chromedp.Flag("headless", true),
		chromedp.Flag("disable-gpu", true),
		chromedp.Flag("no-sandbox", true),
	)
	
	allocCtx, cancel := chromedp.NewExecAllocator(ctx, opts...)
	defer cancel()
	
	// 创建新的 Chrome 实例
	chromeCtx, cancel := chromedp.NewContext(allocCtx)
	defer cancel()
	
	// 导航到页面并等待内容加载
	var htmlContent string
	err := chromedp.Run(chromeCtx,
		chromedp.Navigate(url),
		chromedp.Sleep(2*time.Second),
		chromedp.OuterHTML("html", &htmlContent),
	)
	
	if err != nil {
		return "", err
	}
	
	return htmlContent, nil
}
```