# Crawlab

基于Golang的分布式爬虫管理平台，支持多种编程语言以及多种爬虫框架.

[查看演示 Demo](http://crawlab.cn/demo)

项目自 2019 年 3 月份上线以来受到爬虫爱好者们和开发者们的好评，超过一半的使用者表示已经在用 Crawlab 作为公司的爬虫管理平台。经过近数月的迭代，我们陆续上线了 [定时任务](./Usage/Schedule/README.md)、[数据分析](./Usage/Spider/Analytics)、[可配置爬虫](./Usage/Spider/ConfigurableSpider.md)、[SDK](./Usage/SDK/README.md)、[消息通知](./Usage/Notification/README.md)、[Scrapy 支持](./Spider/ScrapySpider.md)、[Git 同步](./CI/README.md) 等功能，将Crawlab打造得更加实用，更加全面，能够真正帮助用户解决爬虫管理困难的问题。

Crawlab主要解决的是大量爬虫管理困难的问题，例如需要监控上百个网站的参杂`scrapy`和`selenium`的项目不容易做到同时管理，而且命令行管理的成本非常高，还容易出错。Crawlab支持任何语言和任何框架，配合任务调度、任务监控，很容易做到对成规模的爬虫项目进行有效监控管理。

本使用手册是一个安装使用开发指南，帮助您安装、使用、开发 Crawlab。

如果您想尽快上手 Crawlab，请查看 [快速开始](./QuickStart/README.md)。

首先，我们来看如何安装Crawlab，请查看 [安装章节](./Installation/README.md)。关于如何使用，请查看 [使用章节](./Usage/README.md)。对于比较简单的爬虫，您可以使用 [可配置爬虫](./Usage/Spider/ConfigurableSpider.md)，比较节省时间；对于比较复杂的（例如需要登录）的爬虫，您可以使用 [自定义爬虫](./Usage/Spider/CustomizedSpider.md)，更加灵活。

⚠️**注意**: 如果您在安装过程中遇到任何问题，请查看 [Q&A](./QA/README.md) 来一一排查。如果仍然不能解决问题，请尝试到 [GitHub Issues](https://github.com/crawlab-team/crawlab/issues) 寻找解决办法。如果还是无法解决问题，请加作者微信 tikazyq1 并注明 "Crawlab"，作者将拉您入群，在群里您可以寻求大佬们的帮助。

### 截图

#### 登录

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/login.png)

#### 首页

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/home.png)

#### 节点列表

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/node-list.png)

#### 节点拓扑图

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/node-network.png)

#### 爬虫列表

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/spider-list.png)

#### 爬虫概览

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/spider-overview.png)

#### 爬虫分析

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/spider-analytics.png)

#### 爬虫文件编辑

![](http://static-docs.crawlab.cn/file-edit.png)

#### 任务详情 - 抓取结果

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/task-results.png)

#### 定时任务

![](http://static-docs.crawlab.cn/schedule-v0.4.4.png)

#### 依赖安装

![](http://static-docs.crawlab.cn/node-install-dependencies.png)

#### 消息通知

<img src="http://static-docs.crawlab.cn/notification-mobile.jpeg" height="480px">