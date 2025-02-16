---
title: 数据集成
---

# 数据集成

您可以使用 Crawlab SDK 集成您的爬虫。这允许您在 Crawlab 上可视化查看抓取结果。

Crawlab SDK 支持与包括 Scrapy 在内的各种网络爬虫框架以及包括 Python、Node.js 和 Go 的编程语言集成。

:::tip 注意
默认情况下，Crawlab SDK 已安装在 Crawlab 的基础镜像中。如果您不使用 Crawlab Docker 镜像，也可以手动安装。
:::

## Scrapy

1. 确保您已经在 Crawlab 上创建了一个 Scrapy 爬虫。
2. 将 `crawlab.CrawlabPipeline` 添加到 `settings.py` 文件中的 `Item_PIPELINES`。
   ```python
   ITEM_PIPELINES = {
       'crawlab.CrawlabPipeline': 888,
   }
   ```
3. 完成！现在您可以在 Crawlab 上运行您的爬虫了。

## Python

1. 确保您已经在 Crawlab 上创建了一个 Python 爬虫。
2. 向您的爬虫代码添加导入语句以导入方法 `save_item`。
   ```python
   from crawlab import save_item
   ```
3. 调用 `save_item` 方法保存抓取项。
   ```python
   save_item({'title': 'example', 'url': 'https://example.com'})
   ```

## Node.js

1. 确保您已经在 Crawlab 上创建了一个 Node.js 爬虫。
2. 向您的爬虫代码添加导入语句以导入方法 `saveItem`。
   ```javascript
   const { saveItem } = require('crawlab-sdk');
   ```
3. 调用 `saveItem` 方法保存抓取项。
   ```javascript
   saveItem({ title: 'example', url: 'https://example.com' });
   ```

## Go

1. 确保您已经在 Crawlab 上创建了一个 Go 爬虫。
2. 向您的爬虫代码添加导入语句以导入方法 `SaveItem`。
   ```go
   import "github.com/crawlab-team/crawlab-sdk-go"
   ```
3. 调用 `SaveItem` 方法保存抓取项。
   ```go
   crawlab.SaveItem(map[string]interface{}{
       "title": "example",
       "url": "https://example.com",
   })
   ```