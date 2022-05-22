### Integrate with Scrapy

Scrapy is a very powerful spider framework. If you don't know about Scrapy, please refer to [official website introduction](https://scrapy.org/). After integration with Crawlab, you can see the data captured by your spider task on the interface.

[Crawlab SDK](https://github.com/crawlab-team/crawlab-sdk) provides some 'helper' methods to better integrate your spider into Crawlab, such as saving the result data into Crawlab and so on.

#### Integrate with Scrapy

Find 'ITEM_PIPELINES'(variable of type 'dict') in 'settings.py', and add the following content.

```python
ITEM_PIPELINES = {
    'crawlab.pipelines.CrawlabMongoPipeline': 888,
}
```

Then, start the Scrapy spider. After running, you should be able to see the result in ** task details - result **.

