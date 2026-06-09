# 数据集成

您可以通过 Crawlab SDK 集成您的爬虫数据。这允许您在 Crawlab 上以可视化的方式查看爬取的结果。

Crawlab SDK 支持各种爬虫框架的集成，包括 Scrapy，以及各种编程语言，包括 Python，Node.js，Go。

::: tip NOTE
默认情况下，Crawlab SDK 已经安装在 Crawlab 的基础镜像中。如果您没有使用 Crawlab Docker 镜像，您也可以手动安装。
:::

## Scrapy

1. 确保您已经在 Crawlab 上创建了 Scrapy 爬虫。
2. 在 `settings.py` 文件中，将 `crawlab.CrawlabPipeline` 添加到 `Item_PIPELINES` 中。
   ```python
   ITEM_PIPELINES = {
       'crawlab.CrawlabPipeline': 888,
   }
   ```
3. 完成！您现在可以在 Crawlab 上运行您的爬虫了。

## Python

1. 确保您已经在 Crawlab 上创建了 Python 爬虫。
2. 在您的爬虫代码中，添加包导入语句，以导入 `save_item` 方法。
   ```python
   from crawlab import save_item
   ```
3. 调用 `save_item` 方法来保存爬取的条目。
   ```python
   save_item({'title': 'example', 'url': 'https://example.com'})
   ```

## Node.js

1. 确保您已经在 Crawlab 上创建了 Node.js 爬虫。
2. 在您的爬虫代码中，添加包导入语句，以导入 `saveItem` 方法。
   ```javascript
   const { saveItem } = require('crawlab-sdk');
   ```
3. 调用 `saveItem` 方法来保存爬取的条目。
   ```javascript
   saveItem({ title: 'example', url: 'https://example.com' });
   ```

## Go

1. 确保您已经在 Crawlab 上创建了 Go 爬虫。
2. 在您的爬虫代码中，添加包导入语句，以导入 `SaveItem` 方法。
   ```go
   import "github.com/crawlab-team/crawlab-sdk-go"
   ```
3. 调用 `SaveItem` 方法来保存爬取的条目。
   ```go
   crawlab.SaveItem(map[string]interface{}{
       "title": "example",
       "url": "https://example.com",
   })
   ```