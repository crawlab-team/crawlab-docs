## Scrapy 爬虫

Scrapy 是一个非常受欢迎的支持异步抓取的高性能爬虫框架。在用户调研中，超过一半的爬虫开发工程师选择了 Python，而 Scrapy 正是一个 Python 爬虫框架，非常受爬虫工程师的欢迎。

Crawlab 开发了一套针对 Scrapy 爬虫的配置界面，可以让用户非常容易的在 Crawlab 界面上创建、配置、修改 Scrapy 爬虫。

#### 开启 Scrapy

要打开 Scrapy 的配置界面，您需要保证您创建的是[自定义爬虫](./CustomizedSpider.md)，而且您需要在**创建爬虫**或**修改爬虫**时开启**是否为 Scrapy**，如下图。这个按钮在**创建爬虫**或**爬虫详情**里都可以开启。

![](http://static-docs.crawlab.cn/is-scrapy.png)

⚠️注意：在开启这个选项前，请保证您的爬虫项目为一个 Scrapy 爬虫，最好的检测方式，就是检查您爬虫项目的根目录下是否有 `scrapy.cfg` 文件。如果您的爬虫项目根目录没有 `scrapy.cfg` 文件，请尝试用 [CLI 工具](../SDK/CLI.md) 上传您的 Scrapy 爬虫。

#### 设置

如果操作成功，您将看到爬虫详情里有 `Scrapy 设置` 标签，点开标签您能看到如下界面。

![](http://static-docs.crawlab.cn/scrapy-settings-setting.jpg)

第一个默认标签是 “设置”，这是 Scrapy 爬虫的设置界面，也就是配置 `settings.py` 的地方。Crawlab 会将您 Scrapy 爬虫项目中的 `settings.py` 中的变量读取并显示出来。在这里，您可以添加、删除修改任何 `settings.py` 中的变量。在修改变量时，别忘记确定 `变量类型`。

点击 “保存” 按钮后，您的设置就保存在 `settings.py` 里去了，您可以到 “文件” 标签中检查 `settings.py` 是否生效。

#### 爬虫

第二个标签是 “爬虫”，这是在 `spiders` 文件夹里定义的爬虫，是继承了 `scrapy.Spider` 的类。

您可以点击 “添加爬虫” 来创建一个新的 Scrapy 爬虫，这相当于是执行了 `scrapy genspider` 的操作。

同时，如果您点击 Scrapy 爬虫列表中的一个爬虫，可以自动跳转到对应的爬虫文件。

![](http://static-docs.crawlab.cn/scrapy-settings-spiders.png)

#### Items

第三个标签是 “Items”，这里是定义爬虫抓取项的地方，会将 `items.py` 中的继承了 `scrapy.Item` 的类以及其字段列表读取并展现出来，如下图。

![](http://static-docs.crawlab.cn/scrapy-settings-items.png)

在这里，您可以添加、删除 `Item` 以及 `Item` 的字段；您还可以通过点击到 `Item` 或 字段 来修改名称。

点击 “保存” 按钮操作成功后，您将看到所修改的 `Item` 和字段已经在 `items.py` 中生效了。

#### Pipelines

第四个标签是 “Pipelines”，在这里您可以看到 Pipeline 的列表，点击之后跳转到 `pipelines.py` 文件。