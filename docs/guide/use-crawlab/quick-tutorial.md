# Quick Tutorial

You have now installed Crawlab and perhaps can't wait to start using it. Before you go deep into it, I would suggest you go through this quick tutorial to walk you through some basics and get you familiar with some main features in Crawlab.

## Introduction

In this tutorial, we are going to create a spider that crawls quotes on a [mock site](http://quotes.toscrape.com/) provided by [Zyte](https://www.zyte.com/) (the company behind Scrapy); then we will upload this spider to Crawlab, and run it to extract quotes data; finally, we will view the crawled data visually on Crawlab.

The framework we are going to use is [Scrapy](https://scrapy.org/), the most popular web crawler framework written in Python, which is easy to use yet with many powerful features.

::: warning
We assume you have installed Crawlab on your local machine by following [Quick Start](../quick-start). If you haven't, please refer to [Quick Start](../quick-start) to install it on your local machine.

As we are using Scrapy, please make sure you have installed [Python](https://www.python.org/) (>=3.6) and module management tool [pip](https://pip.pypa.io/en/stable/installation/) before proceeding any further steps.
:::

## Create Spider

First thing first, we are going to generate a Scrapy project. Let's start by installing Scrapy. 

```bash
pip install scrapy
```

Then, let's create a Scrapy project called `scrapy_quotes`.

```bash
scrapy startproject scrapy_quotes
```

Now you should be able to see the folder structure of the newly created spider.

Let's generate a new spider by executing the command below.

```bash
cd scrapy_quotes
scrapy genspider quotes quotes.toscrape.com
```

The folder structure of the spider is as below.

```
scrapy_quotes
├── scrapy.cfg
└── scrapy_quotes
    ├── __init__.py
    ├── items.py
    ├── middlewares.py
    ├── pipelines.py
    ├── settings.py
    └── spiders
        ├── __init__.py
        └── quotes.py
```

Let's open file `scrapy_quotes/scrapy_quotes/spiders/quotes.py` and replace original content with the code below.

```python
# scrapy_quotes/scrapy_quotes/spiders/quotes.py
import scrapy

class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    allowed_domains = ['quotes.toscrape.com']
    start_urls = ['http://quotes.toscrape.com/']

    def parse(self, response):
        for quote in response.css("div.quote"):
            yield {
                'text': quote.css("span.text::text").extract_first(),
                'author': quote.css("small.author::text").extract_first(),
                'tags': ','.join(quote.css("div.tags > a.tag::text").extract())
            }

        next_page_url = response.css("li.next > a::attr(href)").extract_first()
        if next_page_url is not None:
            yield scrapy.Request(response.urljoin(next_page_url))
```

Then open file `scrapy_quotes/scrapy_quotes/settings.py` and add the code below at the end of the file.

```python
# add at the end of scrapy_quotes/scrapy_quotes/settings.py
ITEM_PIPELINES = {
    'crawlab.CrawlabPipeline': 300,
}
```

We have now created a Scrapy spider that is available for integration into Crawlab. We can then upload it to Crawlab.

## Upload Spider

Now open browser and navigate to `http://localhost:8080`, and login with default username/password `admin/admin`. 

Then go to `Spiders` page, and click `New Spider` on the top left to open the create dialog. 

In the dialog, enter the info as below, and click `Confirm` to create a spider on Crawlab.
1. Name: `scrapy_quotes`
2. Command: `scrapy crawl quotes`
3. Default Mode: `Random Mode`
