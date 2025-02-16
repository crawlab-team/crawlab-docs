---
title: Data Integration
---

```yaml
---
title: 数据集成
---

# Data Integration

You can integrate your spiders with Crawlab SDK. This allows you to view scraped results visually on Crawlab.

Crawlab SDK supports integration with various web crawler frameworks including Scrapy, and programming
languages including Python, Node.js, Go.

:::tip NOTE
By default, Crawlab SDK is installed in the base image of Crawlab. You can also install it manually if you are not using
Crawlab Docker image.
:::

## Scrapy

1. 确保您已在 Crawlab 上创建了一个 Scrapy 蜘蛛。
2. 将 `crawlab.CrawlabPipeline` 添加到 `settings.py` 文件中的 `Item_PIPELINES`。
   ```python
   ITEM_PIPELINES = {
       'crawlab.CrawlabPipeline': 888,
   }
   ```
3. 完成！现在您可以运行您的蜘蛛了。

## Python

1. 确保您已在 Crawlab 上创建了一个 Python 蜘蛛。
2. 向您的蜘蛛代码中添加导入语句以导入方法 `save_item`。
   ```python
   from crawlab import save_item
   ```
3. 调用 `save_item` 方法以保存抓取的数据项。
   ```python
   save_item({'title': 'example', 'url': 'https://example.com'})
   ```

## Node.js

1. 确保您已在 Crawlab 上创建了一个 Node.js 蜘蛛。
2. 向您的蜘蛛代码中添加导入语句以导入方法 `saveItem`。
   ```javascript
   const { saveItem } = require('crawlab-sdk');
   ```
3. 调用 `saveItem` 方法以保存抓取的数据项。
   ```javascript
   saveItem({ title: 'example', url: 'https://example.com' });
   ```

## Go

1. 确保您已在 Crawlab 上创建了一个 Go 蜘蛛。
2. 向您的蜘蛛代码中添加导入语句以导入方法 `SaveItem`。
   ```go
   import "github.com/crawlab-team/crawlab-sdk-go"
   ```
3. 调用 `SaveItem` 方法以保存抓取的数据项。
   ```go
   crawlab.SaveItem(map[string]interface{}{
       "title": "example",
       "url": "https://example.com",
   })
   ```
```