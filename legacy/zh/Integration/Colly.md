## 与 Colly 集成

[Colly](https://github.com/gocolly/colly) 是基于 Golang 的非常优秀的爬虫框架，与 Python 的 Scrapy 相比，其具有更简单的 API，而且天然支持并发，带有静态语言的类型系统，理论上更稳定，也更高效，比较适合大型爬虫项目。如果您对 Colly 不了解，请参考 [Github 官网](https://github.com/gocolly/colly)。

集成 Colly 之前，建议您先阅读 [与通用 Golang 爬虫集成章节](Golang.md)，它利用了 [Crawlab Go SDK](https://github.com/crawlab-team/crawlab-go-sdk) 中两个最基本的 API: `crawlab.SaveItem`（保存结果方法）和 `entity.Item`（结果 Item 类），只需要调用这两个 API，集成非常简单。

下面是一个基于 Colly 的抓取 SegmentFault 的简单爬虫。

#### go.mod

```
module segmentfault_colly

go 1.13

require (
	github.com/apex/log v1.8.0
	github.com/crawlab-team/crawlab-go-sdk v0.0.6
	github.com/gocolly/colly/v2 v2.1.0
)
```

#### main.go

```go
package main

import (
	"fmt"
	"github.com/apex/log"
	"github.com/crawlab-team/crawlab-go-sdk"
	"github.com/crawlab-team/crawlab-go-sdk/entity"
	"github.com/gocolly/colly/v2"
	"runtime/debug"
)

func main() {
	startUrl := "https://segmentfault.com/search?q=crawlab"

	c := colly.NewCollector(
		colly.Async(true),
		colly.UserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36"),
	)

	c.OnHTML(".search-result > .widget-blog", func(e *colly.HTMLElement) {
		item := entity.Item{}
		item["title"] = e.ChildText("h2.h4 > a")
		item["url"] = e.ChildAttr("h2.h4 > a", "href")
		fmt.Println(item)
		if err := crawlab.SaveItem(item); err != nil {
			log.Errorf("save item error: " + err.Error())
			debug.PrintStack()
			return
		}
	})

	c.OnRequest(func(r *colly.Request) {
		fmt.Println(fmt.Sprintf("Visiting %s", r.URL.String()))
	})

	if err := c.Visit(startUrl); err != nil {
		log.Errorf("visit error: " + err.Error())
		debug.PrintStack()
		panic(fmt.Sprintf("Unable to visit %s", startUrl))
	}

	c.Wait()
}
```

在爬虫详情的 “执行命令” 输入 `go run main.go`。

然后，启动爬虫，运行完成之后，您就应该能看到抓取结果出现在 **任务详情-结果** 里。
