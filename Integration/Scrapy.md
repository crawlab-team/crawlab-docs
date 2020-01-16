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

#### 通用 Python 爬虫

将下列代码加入到您爬虫中的结果保存部分。

```python
# 引入保存结果方法
from crawlab import save_item

# 这是一个结果，需要为 dict 类型
result = {'name': 'crawlab'}

# 调用保存结果方法
save_item(result)
```

然后，启动爬虫，运行完成之后，您就应该能看到抓取结果出现在 **任务详情-结果** 里。

#### 其他框架和语言

爬虫任务本质上是由一个shell命令来实现的。任务ID将以环境变量`CRAWLAB_TASK_ID`的形式存在于爬虫任务运行的进程中，并以此来关联抓取数据。另外，`CRAWLAB_COLLECTION`是Crawlab传过来的所存放collection的名称。

在爬虫程序中，需要将`CRAWLAB_TASK_ID`的值以`task_id`作为可以存入数据库中`CRAWLAB_COLLECTION`的collection中。这样Crawlab就知道如何将爬虫任务与抓取数据关联起来了。当前，Crawlab只支持MongoDB。