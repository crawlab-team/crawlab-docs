---
sidebar_position: 3
title: Basic Tutorial
---

# 基础教程

您现在已经安装了Crawlab，并且可能迫不及待地想要开始使用它。在深入细节之前，我建议您先完成这个快速教程，这将带您了解一些基础知识并熟悉Crawlab中的主要功能。

## 介绍

在这个教程中，我们将创建一个爬虫，该爬虫会抓取[模拟站点](http://quotes.toscrape.com/)上的报价（由[Zyte](https://www.zyte.com/)提供，即Scrapy背后的公司）；然后我们将把该爬虫上传到Crawlab，并运行它以提取报价数据；最后，我们将在Crawlab上以可视化方式查看抓取的数据。

我们将使用的框架是[Scrapy](https://scrapy.org/)，这是一个用Python编写的流行的网络爬虫框架，易于使用且具有许多强大的功能。

:::warning
我们假设您已经按照[快速入门](./quick-start.md)的指导在本地机器上安装了Crawlab。如果没有，请参考[快速入门](./quick-start.md)在您的本地机器上进行安装。

由于我们使用的是Scrapy，请确保在继续下一步之前已安装[Python](https://www.python.org/)（>=3.6）和模块管理工具[pip](https://pip.pypa.io/en/stable/installation/)。
:::

## 创建爬虫

首先，我们将生成一个Scrapy项目。让我们从安装Scrapy开始。

```bash
pip install scrapy
```

然后，让我们创建一个名为`scrapy_quotes`的Scrapy项目。

```bash
scrapy startproject scrapy_quotes
```

现在你应该能看到新创建的爬虫的文件夹结构。

然后通过执行以下命令生成一个新的爬虫。

```bash
cd scrapy_quotes
scrapy genspider quotes quotes.toscrape.com
```

爬虫的文件夹结构应该类似于下面的样子。

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

让我们打开文件`scrapy_quotes/scrapy_quotes/spiders/quotes.py`并将原始内容替换为以下代码。

```python
# scrapy_quotes/scrapy_quotes/spiders/quotes.py
import scrapy

class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    allowed_domains = ['quotes.toscrape.com']
    start_urls = ['https://quotes.toscrape.com/']

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

然后打开文件`scrapy_quotes/scrapy_quotes/settings.py`并在文件末尾添加以下代码。

```python
# 在scrapy_quotes/scrapy_quotes/settings.py末尾添加
ITEM_PIPELINES = {
    'crawlab.CrawlabPipeline': 300,
}
```

我们现在创建了一个可以集成到Crawlab中的Scrapy爬虫。然后我们可以将其上传到Crawlab。

## 上传爬虫

现在打开浏览器并导航到`http://localhost:8080`，并使用默认用户名/密码`admin/admin`登录。

然后转到`爬虫`页面，并点击左上角的`新建爬虫`以打开创建对话框。

在对话框中，输入以下信息，然后点击`确认`以在Crawlab上创建一个爬虫。

1. 名称：`scrapy_quotes`
2. 命令：`scrapy crawl quotes`

![create-spider](/img/guide/quick-tutorial-1.png)

现在我们在Crawlab上创建了一个爬虫，我们需要将爬虫文件上传到它。

点击爬虫名称链接或右上角带有搜索图标的蓝色按钮`查看`以导航到其详细页面。

![](/img/guide/quick-tutorial-2.png)

在详细页面中，点击`文件`标签以导航到文件编辑标签，然后点击导航栏上的`上传文件`按钮。

![](/img/guide/quick-tutorial-3.png)

点击按钮`点击选择要上传的文件夹`并选择我们之前创建的Scrapy爬虫的文件夹，然后点击`确认`以上传爬虫。

![](/img/guide/quick-tutorial-4.png)

现在你应该能在左侧的文件导航器中看到上传的文件和文件夹。你可以通过展开文件夹或双击文件来打开它们。

![](/img/guide/quick-tutorial-5.png)

## 运行爬虫

运行爬虫非常简单。

让我们通过点击带有播放图标`运行`的按钮来运行它，并使用默认设置点击`确认`。

![](/img/guide/quick-tutorial-6.png)

## 查看任务

太棒了！我们刚刚触发了一个爬虫任务，我们应该能够在`任务`标签中查看它。让我们点击`任务`标签来看看。

![](/img/guide/quick-tutorial-7.png)

任务正在运行，我们可以通过点击右侧的`查看`按钮来查看任务详情。

然后我们可以通过点击`日志`标签来查看实时日志。

![](/img/guide/quick-tutorial-8.png)

随着爬虫的抓取，我们还可以通过点击`数据`标签来查看抓取的数据；

![](/img/guide/quick-tutorial-9.png)

## 爬虫统计信息

如果我们回到`爬虫`页面，我们应该能够看到爬虫的统计信息。

![](/img/guide/quick-tutorial-10.png)

## 总结

让我们在这里做个总结。我们已经遵循了一个简单的流程在Crawlab上运行了一个Scrapy爬虫。

1. 在本地创建了一个Scrapy项目。
2. 在Crawlab上创建了一个爬虫。
3. 将爬虫文件上传到爬虫。
4. 触发了一个任务。
5. 在Crawlab上查看实时日志和抓取的数据以及爬虫统计信息。

## 接下来做什么

这个快速教程为您提供了一些关于Crawlab及其如何用于抓取数据的基本理解，包括监控任务日志和查看抓取的数据等。但您应该知道的是，Crawlab不仅仅限于此，还有许多其他强大的功能，如节点管理、Git集成和依赖安装等，您可能会感兴趣。您可以查看本指南的其他部分以学习如何使用这些功能。