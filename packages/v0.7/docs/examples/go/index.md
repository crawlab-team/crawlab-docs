---
sidebar_position: 5
title: Pure Go Spider
---

# Pure Go Spider

## Introduction to Go Web Scraping

Go (Golang) provides excellent support for web scraping with its robust standard library and third-party packages. Go's goroutines and channels make it particularly powerful for building concurrent scrapers that can efficiently handle large amounts of data.

## Integrating Go Scrapers with Crawlab

This guide demonstrates how to create a pure Go-based web scraper (without using the Colly framework) and integrate it with Crawlab to collect quotes from a fictional quotes website.

### Creating the Spider in Crawlab

1. In the Crawlab web interface, navigate to the Spider list
2. Click the "New Spider" button
3. Fill in the following details:
   - Name: "quotes_scraper"
   - Execute Command: `go run main.go`
   - Parameter: (leave empty)
4. Click "Confirm" to create the spider

### Setting Up the Go Project

After creating the spider, we need to set up a Go project. Here's the structure we'll use:

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

// Quote represents a quote with author and tags
type Quote struct {
	Text   string   `json:"text"`
	Author string   `json:"author"`
	Tags   []string `json:"tags"`
}

// Configuration
const (
	baseURL        = "https://example-quotes.com"
	startURL       = baseURL + "/quotes/page/1"
	concurrency    = 3 // Number of concurrent pages to scrape
	requestTimeout = 10 * time.Second
)

func main() {
	// Setup logging
	log.SetOutput(os.Stdout)
	log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)
	log.Println("Starting quotes scraper")

	// Read parameters from Crawlab
	category := ""
	if spiderParamStr := os.Getenv("CRAWLAB_SPIDER_PARAM"); spiderParamStr != "" {
		var params map[string]string
		if err := json.Unmarshal([]byte(spiderParamStr), &params); err == nil {
			category = params["category"]
		}
	}

	// Determine start URL based on category
	url := startURL
	if category != "" {
		url = fmt.Sprintf("%s/quotes/category/%s/page/1", baseURL, category)
		log.Printf("Using category filter: %s", category)
	}

	// Get total number of pages
	totalPages, err := getTotalPages(url)
	if err != nil {
		log.Fatalf("Error getting total pages: %v", err)
	}
	log.Printf("Found %d pages to scrape", totalPages)

	// Create a channel to send page URLs to workers
	pageURLs := make(chan string, totalPages)

	// Create a wait group to wait for all workers to finish
	var wg sync.WaitGroup

	// Start worker goroutines
	for i := 0; i < concurrency; i++ {
		wg.Add(1)
		go worker(i, pageURLs, &wg)
	}

	// Send all page URLs to the channel
	for i := 1; i <= totalPages; i++ {
		if category != "" {
			pageURLs <- fmt.Sprintf("%s/quotes/category/%s/page/%d", baseURL, category, i)
		} else {
			pageURLs <- fmt.Sprintf("%s/quotes/page/%d", baseURL, i)
		}
	}

	// Close the channel when all URLs are sent
	close(pageURLs)

	// Wait for all goroutines to finish
	wg.Wait()

	log.Println("Scraping completed successfully")
}

// worker processes URLs from the channel
func worker(id int, pageURLs <-chan string, wg *sync.WaitGroup) {
	defer wg.Done()

	for url := range pageURLs {
		log.Printf("Worker %d processing URL: %s", id, url)
		
		// Add a small delay to avoid hammering the server
		time.Sleep(time.Duration(500+id*200) * time.Millisecond)
		
		// Scrape the page
		if err := scrapePage(url); err != nil {
			log.Printf("Error scraping page %s: %v", url, err)
		}
	}
}

// scrapePage scrapes a single page of quotes
func scrapePage(url string) error {
	// Create HTTP client with timeout
	client := &http.Client{
		Timeout: requestTimeout,
	}

	// Create a new request with headers
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return fmt.Errorf("error creating request: %w", err)
	}

	// Add headers to mimic a browser
	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
	req.Header.Set("Accept", "text/html,application/xhtml+xml,application/xml")
	req.Header.Set("Accept-Language", "en-US,en;q=0.9")

	// Send the request
	resp, err := client.Do(req)
	if err != nil {
		return fmt.Errorf("error making request: %w", err)
	}
	defer resp.Body.Close()

	// Check if the response status code is OK
	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("received non-200 response: %d", resp.StatusCode)
	}

	// Parse the HTML document
	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		return fmt.Errorf("error parsing HTML: %w", err)
	}

	// Find all quote elements
	doc.Find("div.quote").Each(func(i int, s *goquery.Selection) {
		// Extract quote text
		text := strings.TrimSpace(s.Find("span.text").Text())
		text = strings.Trim(text, """) // Remove quotation marks
		text = strings.Trim(text, """)

		// Extract author
		author := strings.TrimSpace(s.Find("span.author").Text())

		// Extract tags
		var tags []string
		s.Find("a.tag").Each(func(i int, s *goquery.Selection) {
			tag := strings.TrimSpace(s.Text())
			tags = append(tags, tag)
		})

		// Create quote object
		quote := Quote{
			Text:   text,
			Author: author,
			Tags:   tags,
		}

		// Save to Crawlab
		jsonQuote, err := json.Marshal(quote)
		if err != nil {
			log.Printf("Error marshalling quote: %v", err)
			return
		}

		if err := crawlab.SaveItem(string(jsonQuote)); err != nil {
			log.Printf("Error saving quote to Crawlab: %v", err)
			return
		}

		log.Printf("Saved quote: %s by %s", truncateString(text, 30), author)
	})

	return nil
}

// getTotalPages determines the total number of pages to scrape
func getTotalPages(url string) (int, error) {
	// Create HTTP client with timeout
	client := &http.Client{
		Timeout: requestTimeout,
	}

	// Make a request to the first page
	resp, err := client.Get(url)
	if err != nil {
		return 0, fmt.Errorf("error making request: %w", err)
	}
	defer resp.Body.Close()

	// Check if the response status code is OK
	if resp.StatusCode != http.StatusOK {
		return 0, fmt.Errorf("received non-200 response: %d", resp.StatusCode)
	}

	// Create a copy of the response body
	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return 0, fmt.Errorf("error reading response body: %w", err)
	}

	// Create a new reader from the body bytes
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(string(bodyBytes)))
	if err != nil {
		return 0, fmt.Errorf("error parsing HTML: %w", err)
	}

	// Find the last pagination link
	lastPageStr := "1"
	doc.Find("ul.pagination li:not(.next) a").Each(func(i int, s *goquery.Selection) {
		pageStr := s.Text()
		lastPageStr = pageStr // Keep updating until we reach the last one
	})

	// Convert to integer
	lastPage, err := strconv.Atoi(lastPageStr)
	if err != nil {
		return 0, fmt.Errorf("error parsing page number: %w", err)
	}

	return lastPage, nil
}

// Helper function to truncate long strings
func truncateString(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen-3] + "..."
}
```

### Key Integration Points

The main integration points with Crawlab are:

1. Importing the Crawlab SDK:
   ```go
   import "github.com/crawlab-team/crawlab-sdk-go"
   ```

2. Saving data to Crawlab:
   ```go
   if err := crawlab.SaveItem(string(jsonQuote)); err != nil {
       log.Printf("Error saving quote to Crawlab: %v", err)
       return
   }
   ```

3. Reading parameters from Crawlab:
   ```go
   if spiderParamStr := os.Getenv("CRAWLAB_SPIDER_PARAM"); spiderParamStr != "" {
       var params map[string]string
       if err := json.Unmarshal([]byte(spiderParamStr), &params); err == nil {
           category = params["category"]
       }
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
3. Upload `main.go` and `go.mod` files

### Running the Spider

1. In Crawlab, navigate to your spider's detail page
2. Click the "Run" button
3. Select the desired node for execution
4. Click "Confirm" to start the spider

After the spider completes, you can view the collected quotes in the "Data" tab of your spider's detail page.

## Concurrency Design

This example demonstrates a common concurrent scraping pattern in Go:

1. **Worker Pool**: Multiple worker goroutines process pages in parallel
2. **Channel Communication**: Pages to scrape are sent through a channel
3. **WaitGroup Synchronization**: A WaitGroup ensures all workers finish before the program exits

This approach allows the scraper to efficiently process multiple pages simultaneously while controlling the concurrency level to avoid overwhelming the target server.

## Troubleshooting

If you encounter errors when running your Go spider in Crawlab, check the following:

1. **Missing Go environment**: Ensure Go is installed on your Crawlab nodes
2. **Dependency issues**: Verify that all required packages are available by running `go mod tidy`
3. **Network connectivity**: Check if your nodes have access to the target website
4. **Empty results**: The website structure might have changed; update your selectors

## Advanced Configuration

### Handling Rate Limiting

To implement more sophisticated rate limiting:

```go
// Create a rate limiter to avoid being blocked
rateLimiter := time.NewTicker(time.Second / 2) // 2 requests per second
defer rateLimiter.Stop()

// In your scraping function
<-rateLimiter.C // Wait for the next tick before making a request
```

### Adding Proxy Support

To use a proxy with your HTTP client:

```go
import "golang.org/x/net/proxy"

func createProxyClient() (*http.Client, error) {
	// Create a proxy dialer
	dialer, err := proxy.SOCKS5("tcp", "proxy-server:1080", nil, proxy.Direct)
	if err != nil {
		return nil, err
	}
	
	// Create a transport that uses the proxy dialer
	httpTransport := &http.Transport{
		Dial: dialer.Dial,
	}
	
	// Create an HTTP client with the custom transport
	client := &http.Client{
		Transport: httpTransport,
		Timeout:   requestTimeout,
	}
	
	return client, nil
}
```

### Handling JavaScript-Heavy Sites

For websites that require JavaScript rendering, you can use ChromeDP:

```go
// Add to go.mod:
// github.com/chromedp/chromedp v0.9.1

import (
	"context"
	"time"
	
	"github.com/chromedp/chromedp"
)

func scrapeJavaScriptPage(url string) (string, error) {
	// Create a context with timeout
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	
	// Create a headless Chrome instance
	opts := append(chromedp.DefaultExecAllocatorOptions[:],
		chromedp.Flag("headless", true),
		chromedp.Flag("disable-gpu", true),
		chromedp.Flag("no-sandbox", true),
	)
	
	allocCtx, cancel := chromedp.NewExecAllocator(ctx, opts...)
	defer cancel()
	
	// Create a new Chrome instance
	chromeCtx, cancel := chromedp.NewContext(allocCtx)
	defer cancel()
	
	// Navigate to page and wait for content to load
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