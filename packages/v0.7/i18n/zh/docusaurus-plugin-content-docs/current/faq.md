---
sidebar_position: 4
title: 常见问题
---

# 常见问题

### 什么是 Crawlab？

Crawlab 是一个开源的网络爬虫管理平台。其设计目标是帮助用户轻松创建、管理和监控网络爬虫任务。Crawlab 提供了一个友好的图形界面，允许用户配置爬虫任务、设置爬取规则、监控爬取状态和查看爬取结果。

您可以查看 [介绍部分](./introduction.md) 以获取更多信息。

### 为什么 Crawlab 可以执行用不同编程语言和框架编写的爬虫？

Crawlab 根据 Shell 命令执行爬虫任务。因此，理论上，任何可以使用 Shell 命令运行的爬虫都可以在 Crawlab 中执行（如果环境允许）。

爬虫中的 `Execution Command` 和 `Parameters` 会被连接起来形成实际的 Shell 命令来执行爬虫任务。例如，如果某个爬虫的 `Execute Command` 是 `python main.py` 并且参数是 `spider1`，那么爬虫任务的 Shell 命令将是 `python main.py spider1`。

### 为什么 Crawlab 总是拉取版本 v0.6.0 而不是最新版本？

对于在中国的用户，很有可能您已经配置了阿里云镜像代理。请使用其他镜像代理，如 [腾讯云镜像代理](https://mirror.ccs.tencentyun.com)。

### Crawlab 支持 Scrapy 吗？

是的，Crawlab 支持 Scrapy，并且有一个内置的管道可以使用。您只需要将 `crawlab.CrawlabPipeline` 添加到 `settings.py` 文件中的 `ITEM_PIPELINS` 来集成它。

有关更多详细信息，请参阅 [数据集成](./guides/data-integration)。

### Crawlab 支持 Selenium 吗？

是的，Crawlab 支持 Selenium 进行网页抓取。有关更多详细信息，请参阅 [Selenium 爬虫集成](./examples/selenium)。

### 为什么定时任务没有按预期运行？

首先检查您的定时任务是否已启用。

如果已启用，很可能是您的时区未设置为本地时间。您需要将环境变量 `TZ` 设置为您所在的时区，例如 `Asia/Shanghai`。

参考：[问题 #1383](https://github.com/crawlab-team/crawlab/issues/1383#issuecomment-1694423534)

### 什么是 Crawlab AI？

Crawlab AI 是 Crawlab 的新产品。它处于开发的早期阶段，并提供了一个游乐场供用户实验智能数据提取。您可以访问 [Crawlab AI](https://ai.crawlab.io) 网站以获取更多信息。