### 与Scrapy集成

Scrapy 是一个非常强大的爬虫框架。如果您对 Scrapy 不了解，请查看 [官网介绍](https://scrapy.org/)。跟 Crawlab 集成之后，可以在界面上看到您的爬虫任务抓取到的数据。

[Crawlab SDK](https://github.com/crawlab-team/crawlab-sdk) 提供了一些 `helper` 方法来让您的爬虫更好的集成到 Crawlab 中，例如保存结果数据到 Crawlab 中等等。

#### 集成 Scrapy

在 `settings.py` 中找到 `ITEM_PIPELINES`（`dict` 类型的变量），在其中添加如下内容。

```python
ITEM_PIPELINES = {
    'crawlab.pipelines.CrawlabMongoPipeline': 888,
}
```

然后，启动 Scrapy 爬虫，运行完成之后，您就应该能看到抓取结果出现在 **任务详情-结果** 里。

