---
sidebar_position: 4
title: Colly 爬虫
---

# Colly 爬虫

## Colly 简介

[Colly](http://go-colly.org/) 是一个用于 Go (Golang) 的快速且优雅的抓取框架。它提供了一个清晰的接口来编写任何类型的爬虫/抓取器/蜘蛛。Colly 设计用于速度，并提供了诸如 robots.txt 解析、代理切换和自动 Cookie 处理等功能。

## 将 Colly 集成到 Crawlab

在本指南中，我们将演示如何使用 Go 创建基于 Colly 的网络爬虫，并将其与 Crawlab 集成以从虚构的新闻网站收集新闻文章。

### 在 Crawlab 中创建爬虫

1. 在 Crawlab Web 界面中，导航到爬虫列表
2. 点击“新建爬虫”按钮
3. 填写以下详细信息：
   - 名称： "news_scraper"
   - 执行命令： `go run main.go`
   - 参数：（留空）
4. 点击“确认”以创建爬虫

### 设置 Colly 项目

创建爬虫后，我们需要创建一个包含 Colly 的 Go 项目。我们将使用以下结构：

```
news_scraper/
├── main.go
├── go.mod
└── go.sum
```

#### 1. main.go

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strings"
	"time"

	"github.com/gocolly/colly/v2"
	"github.com/crawlab-team/crawlab-sdk-go"
)

type Article struct {
	Title       string    `json:"title"`
	URL         string    `json:"url"`
	Author      string    `json:"author"`
	PublishedAt string    `json:"published_at"`
	Category    string    `json:"category"`
	Content     string    `json:"content"`
	ImageURL    string    `json:"image_url"`
}

func main() {
	// 初始化收集器
	c := colly.NewCollector(
		colly.UserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"),
		colly.AllowedDomains("example-news.com"),
	)

	// 为详细页面创建另一个收集器
	detailCollector := c.Clone()

	// 处理文章列表页面
	c.OnHTML("div.article-card", func(e *colly.HTMLElement) {
		// 提取文章 URL
		articleURL := e.ChildAttr("a.article-link", "href")
		
		// 访问文章详情页面
		detailCollector.Visit(e.Request.AbsoluteURL(articleURL))
	})

	// 处理分页
	c.OnHTML("a.pagination-next", func(e *colly.HTMLElement) {
		nextPage := e.Attr("href")
		c.Visit(e.Request.AbsoluteURL(nextPage))
	})

	// 处理文章详情页面
	detailCollector.OnHTML("article.news-article", func(e *colly.HTMLElement) {
		article := Article{
			Title:       strings.TrimSpace(e.ChildText("h1.article-title")),
			URL:         e.Request.URL.String(),
			Author:      strings.TrimSpace(e.ChildText("span.author-name")),
			PublishedAt: strings.TrimSpace(e.ChildText("time.publish-date")),
			Category:    strings.TrimSpace(e.ChildText("span.category")),
			Content:     strings.TrimSpace(e.ChildText("div.article-content")),
			ImageURL:    e.ChildAttr("img.article-main-image", "src"),
		}

		// 保存到 Crawlab
		item, err := json.Marshal(article)
		if err != nil {
			log.Printf("Error marshalling article: %s", err)
			return
		}
		
		if err := crawlab.SaveItem(string(item)); err != nil {
			log.Printf("Error saving item to Crawlab: %s", err)
		}
	})

	// 错误处理
	c.OnError(func(r *colly.Response, err error) {
		log.Printf("Request URL: %s failed with error: %s", r.Request.URL, err)
	})

	// 开始抓取
	startURL := "https://example-news.com/latest-news"
	
	// 检查是否有自定义参数（如不同的类别）
	if os.Getenv("CRAWLAB_SPIDER_PARAM") != "" {
		var params map[string]string
		if err := json.Unmarshal([]byte(os.Getenv("CRAWLAB_SPIDER_PARAM")), &params); err == nil {
			if category, ok := params["category"]; ok {
				startURL = fmt.Sprintf("https://example-news.com/category/%s", category)
			}
		}
	}

	// 开始爬取
	c.Visit(startURL)

	// 等待确保所有请求都已处理
	c.Wait()
	detailCollector.Wait()
}
```

#### 2. go.mod

```go
module news_scraper

go 1.19

require (
	github.com/gocolly/colly/v2 v2.1.0
	github.com/crawlab-team/crawlab-sdk-go v0.1.0
)
```

### 关键集成点

Crawlab 集成的关键部分包括：

1. 导入 Crawlab SDK：
   ```go
   import "github.com/crawlab-team/crawlab-sdk-go"
   ```

2. 将项目保存到 Crawlab：
   ```go
   if err := crawlab.SaveItem(string(item)); err != nil {
       log.Printf("Error saving item to Crawlab: %s", err)
   }
   ```

### 环境设置

#### Crawlab 专业版
如果您正在使用 **Crawlab 专业版**，您可以直接从 Crawlab 界面安装 Go：

1. 导航到依赖项页面
2. 在“环境”下拉菜单中选择“Go”
3. 如果 Go 未安装，请点击“安装环境”
4. 选择要安装 Go 的版本和节点
5. 点击“确认”

安装 Go 后，您的节点将准备好运行基于 Go 的爬虫。

#### Crawlab 社区版
如果您正在使用 **Crawlab 社区版**，请确保 Go 已安装在您的节点上：

1. 使用 SSH 登录到您的节点服务器
2. 按照 [官方安装说明](https://golang.org/doc/install) 安装 Go
3. 使用 `go version` 验证安装

### 准备您的项目

在您的节点上安装 Go 后，上传您的项目文件：

1. 导航到您的爬虫的详细页面
2. 点击“文件”标签
3. 上传 `main.go` 和 `go.mod` 文件
4. 使用终端连接到您的节点并导航到您的爬虫目录
5. 运行以下命令以下载依赖项：
   ```bash
   go mod tidy
   ```

### 运行爬虫

1. 在 Crawlab 中，导航到您的爬虫的详细页面
2. 点击“运行”按钮
3. 选择执行的节点
4. 点击“确认”以启动爬虫

爬虫完成后，您可以在爬虫详细页面的“数据”标签中查看收集的文章。

## 故障排除

如果在 Crawlab 中运行基于 Colly 的爬虫时遇到错误，请检查以下内容：

1. **缺少 Go 环境**：确保 Go 已安装在您的 Crawlab 节点上
2. **依赖问题**：通过运行 `go mod tidy` 验证所有必需的包是否可用
3. **网络连通性**：检查您的节点是否可以访问目标网站
4. **空结果**：网站结构可能已更改；更新您的选择器

## 高级配置

### 速率限制

为了避免压垮目标网站，您可以添加速率限制：

```go
c := colly.NewCollector(
    colly.UserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"),
    colly.AllowedDomains("example-news.com"),
)

// 限制每秒最多 2 个请求，并随机延迟
c.Limit(&colly.LimitRule{
    DomainGlob:  "*",
    RandomDelay: 2 * time.Second,
    Parallelism: 2,
})
```

### 代理支持

如果需要使用代理：

```go
// 创建代理切换器
proxyURLs := []string{"http://proxy1:8080", "http://proxy2:8080"}
rp, err := proxy.RoundRobinProxySwitcher(proxyURLs...)
if err != nil {
    log.Fatal(err)
}

// 使用代理切换器创建收集器
c := colly.NewCollector(
    colly.ProxyFunc(rp),
)
```