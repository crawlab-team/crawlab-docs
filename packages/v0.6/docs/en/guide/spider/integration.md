# Data Integration

You can integrate your spiders with Crawlab SDK. This allows you to view scraped results visually on Crawlab.

Crawlab SDK supports integration with various web crawler frameworks including Scrapy, and programming
languages including Python, Node.js, Go.

::: tip NOTE
By default, Crawlab SDK is installed in the base image of Crawlab. You can also install it manually if you are not using
Crawlab Docker image.
:::

## Scrapy

1. Make sure you have created a Scrapy spider on Crawlab.
2. Add `crawlab.CrawlabPipeline` to `Item_PIPELINES` in `settings.py` file.
   ```python
   ITEM_PIPELINES = {
       'crawlab.CrawlabPipeline': 888,
   }
   ```
3. That's it! You can now run your spider on Crawlab.

## Python

1. Make sure you have created a Python spider on Crawlab.
2. Add package import line to import method `save_item` to your spider code.
   ```python
   from crawlab import save_item
   ```
3. Call `save_item` method to save scraped item.
   ```python
   save_item({'title': 'example', 'url': 'https://example.com'})
   ```

## Node.js

1. Make sure you have created a Node.js spider on Crawlab.
2. Add package import line to import method `saveItem` to your spider code.
   ```javascript
   const { saveItem } = require('crawlab-sdk');
   ```
3. Call `saveItem` method to save scraped item.
   ```javascript
   saveItem({ title: 'example', url: 'https://example.com' });
   ```

## Go

1. Make sure you have created a Go spider on Crawlab.
2. Add package import line to import method `SaveItem` to your spider code.
   ```go
   import "github.com/crawlab-team/crawlab-sdk-go"
   ```
3. Call `SaveItem` method to save scraped item.
   ```go
   crawlab.SaveItem(map[string]interface{}{
       "title": "example",
       "url": "https://example.com",
   })
   ```