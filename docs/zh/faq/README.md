# FAQ

### Crawlab 是什么？

Crawlab 是一个开源的网络爬虫管理平台。它的设计目标是帮助用户更轻松地创建、管理和监控网络爬虫任务。Crawlab
提供了一个用户友好的图形界面，使用户可以通过简单的操作来配置爬虫任务、设置爬取规则、监视爬取状态以及查看爬取结果。

您可以查看 [介绍章节](../guide) 进行更多了解。

### Crawlab 为什么可以执行不同编程语言和框架的爬虫？

Crawlab 执行爬虫任务是基于 Shell 命令。因此，如果环境允许，理论上能支持 Shell 命令的爬虫都可以在 Crawlab 中运行。

爬虫中的 `执行命令` 和 `参数` 拼接起来就是爬虫任务实际的 Shell 命令。例如，某个爬虫的 `执行命令` 为 `python main.py`
，参数为 `spider1`，那么爬虫任务的 Shell 命令就为 `python main.py`。

### 为什么拉取 Crawlab 总是 v0.6.0 版本，而不是最新版本？

对于中国国内用户，很有可能您配置了阿里云镜像代理，请使用其他镜像代理，例如[腾讯云镜像代理](https://mirror.ccs.tencentyun.com)。

### Crawlab 支持 Scrapy 吗？

Crawlab 支持 Scrapy，而且有内置的 Pipeline 可以使用，只需要在 `settings.py` 的 `ITEM_PIPELINS`
中加入 `crawlab.CrawlabPipeline` 即可集成。

详情请参考 [爬虫集成](../guide/spider/integration.md)。

### Crawlab 支持 Selenium 吗？

Crawlab 支持 Selenium 爬虫，详情参考 [Selenium 爬虫集成](../guide/spider/selenium.md)。

### 为什么定时任务不按照预期执行？

首先，确认你的定时任务是否已经启用。

如果已启用，很有可能是因为你的时区没有设置为你本地时间，你需要设置环境变量 `TZ` 为你本地时区，例如 `Asia/Shanghai`。

参考: [Issue #1383](https://github.com/crawlab-team/crawlab/issues/1383#issuecomment-1694423534)

### Crawlab AI 是什么？

Crawlab AI 是 Crawlab
的新产品。它处于早期开发阶段，为用户提供了一个实验智能数据提取的平台。您可以访问 [Crawlab AI](https://ai.crawlab.io)
网站了解更多信息。
