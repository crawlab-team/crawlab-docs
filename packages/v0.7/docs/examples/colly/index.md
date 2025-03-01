---
sidebar_position: 4
title: Colly Spider (Go)
---

# Colly Spider

## Introduction to Colly

[Colly](http://go-colly.org/) is a fast and elegant scraping framework for Go (Golang). It provides a clean interface to write any kind of crawler/scraper/spider. Colly is designed for speed and offers features like robots.txt parsing, proxy switching, and automatic cookie handling.

## Integrating Colly with Crawlab

In this guide, we'll demonstrate how to create a Colly-based web scraper in Go and integrate it with Crawlab to collect news articles from a fictional news website.

### Creating the Spider in Crawlab

1. In the Crawlab web interface, navigate to the Spider list
2. Click the "New Spider" button
3. Fill in the following details:
   - Name: "news_scraper"
   - Execute Command: `go run main.go`
   - Parameter: (leave empty)
4. Click "Confirm" to create the spider

### Setting Up the Colly Project

After creating the spider, we need to create a Go project with Colly. Here's the structure we'll use:

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
	// Initialize collector
	c := colly.NewCollector(
		colly.UserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"),
		colly.AllowedDomains("example-news.com"),
	)

	// Create another collector for detailed pages
	detailCollector := c.Clone()

	// Process article list page
	c.OnHTML("div.article-card", func(e *colly.HTMLElement) {
		// Extract article URL
		articleURL := e.ChildAttr("a.article-link", "href")
		
		// Visit the article detail page
		detailCollector.Visit(e.Request.AbsoluteURL(articleURL))
	})

	// Process pagination
	c.OnHTML("a.pagination-next", func(e *colly.HTMLElement) {
		nextPage := e.Attr("href")
		c.Visit(e.Request.AbsoluteURL(nextPage))
	})

	// Process article detail page
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

		// Save to Crawlab
		item, err := json.Marshal(article)
		if err != nil {
			log.Printf("Error marshalling article: %s", err)
			return
		}
		
		if err := crawlab.SaveItem(string(item)); err != nil {
			log.Printf("Error saving item to Crawlab: %s", err)
		}
	})

	// Error handling
	c.OnError(func(r *colly.Response, err error) {
		log.Printf("Request URL: %s failed with error: %s", r.Request.URL, err)
	})

	// Start scraping
	startURL := "https://example-news.com/latest-news"
	
	// Check if we have custom parameters (like a different category)
	if os.Getenv("CRAWLAB_SPIDER_PARAM") != "" {
		var params map[string]string
		if err := json.Unmarshal([]byte(os.Getenv("CRAWLAB_SPIDER_PARAM")), &params); err == nil {
			if category, ok := params["category"]; ok {
				startURL = fmt.Sprintf("https://example-news.com/category/%s", category)
			}
		}
	}

	// Start crawling
	c.Visit(startURL)

	// Wait to ensure all requests are processed
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

### Key Integration Points

The critical parts for Crawlab integration are:

1. Importing the Crawlab SDK:
   ```go
   import "github.com/crawlab-team/crawlab-sdk-go"
   ```

2. Saving items to Crawlab:
   ```go
   if err := crawlab.SaveItem(string(item)); err != nil {
       log.Printf("Error saving item to Crawlab: %s", err)
   }
   ```

### Environment Setup

#### Crawlab Pro
If you're using **Crawlab Pro**, you can install Go directly from the Crawlab UI:

1. Navigate to Dependencies page
2. Select "Go" in the "Environment" dropdown
3. If Go is not installed, click "Install Envs"
4. Select the Go version and nodes you want to install Go on
5. Click "Confirm"

After installing Go, your node will be ready to run Go-based spiders.

#### Crawlab Community
If you're using **Crawlab Community**, ensure that Go is installed on your nodes:

1. SSH into your node server
2. Install Go following the [official installation instructions](https://golang.org/doc/install)
3. Verify installation with `go version`

### Preparing Your Project

Once Go is installed on your nodes, upload your project files:

1. Navigate to your spider's detail page
2. Click on the "Files" tab
3. Upload the `main.go` and `go.mod` files
4. Connect to your node using the terminal and navigate to your spider directory
5. Run the following commands to download dependencies:
   ```bash
   go mod tidy
   ```

### Running the Spider

1. In Crawlab, navigate to your spider's detail page
2. Click the "Run" button
3. Select the desired node for execution
4. Click "Confirm" to start the spider

After the spider completes, you can view the collected articles in the "Data" tab of your spider's detail page.

## Troubleshooting

If you encounter errors when running your Colly-based spider in Crawlab, check the following:

1. **Missing Go environment**: Ensure Go is installed on your Crawlab nodes
2. **Dependency issues**: Verify that all required packages are available by running `go mod tidy`
3. **Network connectivity**: Check if your nodes can access the target website
4. **Empty results**: The website structure might have changed; update your selectors

## Advanced Configuration

### Rate Limiting

To avoid overwhelming the target website, you can add rate limiting:

```go
c := colly.NewCollector(
    colly.UserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"),
    colly.AllowedDomains("example-news.com"),
)

// Limit to 2 requests per second with a randomized delay
c.Limit(&colly.LimitRule{
    DomainGlob:  "*",
    RandomDelay: 2 * time.Second,
    Parallelism: 2,
})
```

### Proxy Support

If you need to use proxies:

```go
// Create a proxy switcher
proxyURLs := []string{"http://proxy1:8080", "http://proxy2:8080"}
rp, err := proxy.RoundRobinProxySwitcher(proxyURLs...)
if err != nil {
    log.Fatal(err)
}

// Create a collector with the proxy switcher
c := colly.NewCollector(
    colly.ProxyFunc(rp),
)
``` 