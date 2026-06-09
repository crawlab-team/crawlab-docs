---
sidebar_position: 1
title: Scrapy 爬虫
---

# Scrapy 爬虫

## 介绍 Scrapy

[Scrapy](https://scrapy.org/) 是用于 Python 的最受欢迎的网络爬虫框架之一。它提供了一整套工具，用于从网站提取数据、处理数据并以您喜欢的结构存储数据。Scrapy 设计为快速、简单且可扩展，使其适用于从小型项目到大规模网络爬取任务的各种场景。

## 将 Scrapy 集成到 Crawlab

在本指南中，我们将向您展示如何将 Scrapy 爬虫与 Crawlab 集成，以从虚构的电子商务网站抓取产品数据，并在 Crawlab 界面中显示结果。

### 在 Crawlab 中创建爬虫

1. 在 Crawlab 网页界面中，导航到爬虫列表
2. 点击“新建爬虫”按钮
3. 填写以下详细信息：
   - 名称： "product_scraper"
   - 执行命令：`scrapy crawl products`
   - 参数：（留空）
4. 点击“确认”以创建爬虫

### 设置 Scrapy 项目

创建爬虫后，我们需要上传一个完整的 Scrapy 项目。我们将使用以下结构：

```
product_scraper/
├── scrapy.cfg
├── product_scraper/
│   ├── __init__.py
│   ├── items.py
│   ├── middlewares.py
│   ├── pipelines.py
│   ├── settings.py
│   └── spiders/
│       ├── __init__.py
│       └── products.py
```

让我们逐一创建这些文件：

#### 1. scrapy.cfg

```python
[settings]
default = product_scraper.settings

[deploy]
project = product_scraper
```

#### 2. product_scraper/items.py

```python
import scrapy

class ProductItem(scrapy.Item):
    name = scrapy.Field()
    price = scrapy.Field()
    description = scrapy.Field()
    image_url = scrapy.Field()
    category = scrapy.Field()
    url = scrapy.Field()
```

#### 3. product_scraper/settings.py

```python
BOT_NAME = "product_scraper"

SPIDER_MODULES = ["product_scraper.spiders"]
NEWSPIDER_MODULE = "product_scraper.spiders"

# 通过用户代理识别自己来负责任地爬取
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

# 遵守 robots.txt 规则
ROBOTSTXT_OBEY = True

# 配置项目管道
ITEM_PIPELINES = {
    "crawlab.CrawlabPipeline": 300,
}
```

#### 4. product_scraper/spiders/products.py

```python
import scrapy
from product_scraper.items import ProductItem

class ProductsSpider(scrapy.Spider):
    name = "products"
    
    # 您需要将此替换为您实际的目标网站
    start_urls = ["https://example-ecommerce.com/products"]
    
    def parse(self, response):
        # 从产品列表页面提取所有产品容器
        product_containers = response.css("div.product-item")
        
        for container in product_containers:
            # 从列表页面提取基本产品信息
            product_url = container.css("a.product-link::attr(href)").get()
            
            # 跟随链接到产品详情页面
            yield response.follow(product_url, self.parse_product)
        
        # 跟随分页链接
        next_page = response.css("a.next-page::attr(href)").get()
        if next_page:
            yield response.follow(next_page, self.parse)
    
    def parse_product(self, response):
        # 创建一个新的 ProductItem
        item = ProductItem()
        
        # 提取详细的产品信息
        item["name"] = response.css("h1.product-title::text").get().strip()
        item["price"] = response.css("span.price::text").get().strip()
        item["description"] = response.css("div.product-description::text").get().strip()
        item["image_url"] = response.css("img.product-image::attr(src)").get()
        item["category"] = response.css("ol.breadcrumb li:nth-child(2)::text").get().strip()
        item["url"] = response.url
        
        # 返回填充后的项
        yield item
```

### 关键集成点

集成最重要的部分在 `settings.py` 文件中，我们添加了：

```python
ITEM_PIPELINES = {
    "crawlab.CrawlabPipeline": 300,
}
```

这启用了 Crawlab 的管道，该管道会自动收集并保存您的爬虫生成的所有项到 Crawlab 的数据库中。

### 将项目上传到 Crawlab

1. 在 Crawlab 界面中，导航到您的 "product_scraper" 爬虫
2. 点击“文件”标签
3. 点击“上传”按钮并选择“文件夹”
4. 浏览并选择本地 Scrapy 项目目录
5. 点击“确认”以上传

### 运行爬虫

1. 导航到您的爬虫详情页面
2. 点击“运行”按钮
3. 选择执行的节点
4. 点击“确认”以启动爬虫

爬虫完成后，您可以在爬虫详情页面的“数据”标签中查看收集的数据。

## 故障排除

如果您在 Crawlab 中运行 Scrapy 爬虫时遇到错误，请检查以下内容：

1. **crawlab 包的 ImportError**：确保在您的节点上安装了 Crawlab SDK，使用 `pip install crawlab-sdk`
2. **找不到爬虫**：验证“执行命令”中的爬虫名称是否与定义在爬虫类中的名称匹配
3. **连接错误**：检查您的节点是否有互联网访问权限，并且可以到达目标网站
4. **空结果**：验证您的 CSS/XPath 选择器是否符合当前目标网站的结构
5. **找不到 CrawlabPipeline**：确保在 settings.py 文件中正确配置了 Crawlab 管道

## 高级配置

### 自定义项目管道

如果需要在保存到 Crawlab 之前对项进行自定义处理，您可以创建自定义管道：

```python
# 在 pipelines.py 中
from crawlab.pipelines import CrawlabPipeline

class CustomProcessingPipeline:
    def process_item(self, item, spider):
        # 自定义处理在这里
        # 例如，将价格转换为数值
        if 'price' in item:
            item['price'] = float(item['price'].replace('$', ''))
        return item

# 在 settings.py 中
ITEM_PIPELINES = {
    'product_scraper.pipelines.CustomProcessingPipeline': 200,
    'crawlab.CrawlabPipeline': 300,
}
```