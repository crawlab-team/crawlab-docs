---
sidebar_position: 1
title: Scrapy Spider
---

# Scrapy Spider

## Introduction to Scrapy

[Scrapy](https://scrapy.org/) is one of the most popular web scraping frameworks for Python. It provides a complete suite of tools for extracting data from websites, processing it, and storing it in your preferred structure. Scrapy is designed to be fast, simple, and extensible, making it suitable for both small projects and large-scale web scraping tasks.

## Integrating Scrapy with Crawlab

In this guide, we'll show you how to integrate a Scrapy spider with Crawlab to scrape product data from a fictional e-commerce site and display the results in the Crawlab interface.

### Creating the Spider in Crawlab

1. In the Crawlab web interface, navigate to the Spider list
2. Click the "New Spider" button
3. Fill in the following details:
   - Name: "product_scraper"
   - Execute Command: `scrapy crawl products`
   - Parameter: (leave empty)
4. Click "Confirm" to create the spider

### Setting Up the Scrapy Project

After creating the spider, we need to upload a complete Scrapy project. Here's the structure we'll use:

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

Let's create these files one by one:

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

# Crawl responsibly by identifying yourself on the user agent
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

# Obey robots.txt rules
ROBOTSTXT_OBEY = True

# Configure item pipelines
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
    
    # You would replace this with your actual target website
    start_urls = ["https://example-ecommerce.com/products"]
    
    def parse(self, response):
        # Extract all product containers from the product listing page
        product_containers = response.css("div.product-item")
        
        for container in product_containers:
            # Extract basic product info from the listing page
            product_url = container.css("a.product-link::attr(href)").get()
            
            # Follow the link to the product detail page
            yield response.follow(product_url, self.parse_product)
        
        # Follow pagination links
        next_page = response.css("a.next-page::attr(href)").get()
        if next_page:
            yield response.follow(next_page, self.parse)
    
    def parse_product(self, response):
        # Create a new ProductItem
        item = ProductItem()
        
        # Extract detailed product information
        item["name"] = response.css("h1.product-title::text").get().strip()
        item["price"] = response.css("span.price::text").get().strip()
        item["description"] = response.css("div.product-description::text").get().strip()
        item["image_url"] = response.css("img.product-image::attr(src)").get()
        item["category"] = response.css("ol.breadcrumb li:nth-child(2)::text").get().strip()
        item["url"] = response.url
        
        # Return the populated item
        yield item
```

### Key Integration Points

The most important part of the integration is in the `settings.py` file, where we've added:

```python
ITEM_PIPELINES = {
    "crawlab.CrawlabPipeline": 300,
}
```

This enables Crawlab's pipeline, which automatically collects and saves all the items your spider yields to Crawlab's database.

### Uploading the Project to Crawlab

1. In the Crawlab interface, navigate to your "product_scraper" spider
2. Click on the "Files" tab
3. Click the "Upload" button and select "Folder"
4. Browse and select your local Scrapy project directory
5. Click "Confirm" to upload

### Running the Spider

1. Navigate to your spider's detail page
2. Click the "Run" button
3. Select the desired node for execution
4. Click "Confirm" to start the spider

After the spider completes, you can view the collected data in the "Data" tab of your spider's detail page.

## Troubleshooting

If you encounter errors when running your Scrapy spider in Crawlab, check the following:

1. **ImportError for crawlab package**: Ensure the Crawlab SDK is installed on your nodes with `pip install crawlab-sdk`
2. **Spider not found**: Verify that your spider name in the "Execute Command" matches the name defined in your spider class
3. **Connection errors**: Check if your nodes have internet access and can reach the target website
4. **Empty results**: Verify your CSS/XPath selectors against the current structure of the target website
5. **CrawlabPipeline not found**: Ensure the Crawlab pipeline is correctly configured in your settings.py file

## Advanced Configuration

### Custom Item Pipeline

If you need custom processing of items before they're saved to Crawlab, you can create a custom pipeline:

```python
# In pipelines.py
from crawlab.pipelines import CrawlabPipeline

class CustomProcessingPipeline:
    def process_item(self, item, spider):
        # Custom processing here
        # For example, convert price to a numeric value
        if 'price' in item:
            item['price'] = float(item['price'].replace('$', ''))
        return item

# In settings.py
ITEM_PIPELINES = {
    'product_scraper.pipelines.CustomProcessingPipeline': 200,
    'crawlab.CrawlabPipeline': 300,
}
```