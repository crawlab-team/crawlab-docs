# Crawlab

Crawlab is a distributed spider management platform based on Golang, which supports multiple programming languages and spider frameworks

[View Demo](http://crawlab.cn/demo)

Crawlab project has been highly praised by spider enthusiasts and developers since it was published in March 2019. More than half of users said that Crawlab has been used as the company's spider management platform. After several months of iterations, we have published [periodical tasks](./Usage/Schedule/README.md), [data analysis](./Usage/Spider/Analytics), [configurable spider](./Usage/Spider/ConfigurableSpider.md),[SDK](./Usage/SDK/README.md), [message notification](./Usage/Notification/README.md), [Scrapy support](Spider/ScrapySpider.md), [git synchronization](CI/README.md) and other functions, which make Crawlab more practical and comprehensive, can really help users solve the problem of spider management.

Crawlab mainly solves the problem of a large number of difficult spider management. For example, it is not easy to manage the mixed 'scrapy' and 'selenium' projects of hundreds of websites at the same time, and the cost of command line management is very high, and it is also easy to make mistakes. Crawlab can support any language and any framework, cooperate with task scheduling and task monitoring, and it is easy to effectively monitor and manage scale spider projects.

This user manual is an installation and use development guide to help you install, use and develop Crawlab.

If you want to start crawlab as soon as possible, please check [quick start](QuickStart/README.md).

First, let's see how to install crawlab. Please refer to the [installation chapter](Installation/README.md), for how to use, please refer to the [use Chapter](./Usage/README.md),For simpler spiders, you can use [configurable spider](./Usage/Spider/ConfigurableSpider.md) to save time, you can use [custom spider](./Usage/Spider/CustomizedSpider.md) for more complex spiders, such as those require to login, and more flexible to use.

⚠️**Note**: If you encounter any problems during installation, please refer to [Q&A](QA/README.md)to check the problems one by one. If you still can't solve the problem, try [Github Issues](https://github.com/crawlab-team/crawlab/issues) to find a solution. If you still can't solve the problem, please add the author's wechat 'tikazyq1' and indicate 'Crawlab'. The author will pull you into the group, where you can ask for help from the developers.

### Screenshot

#### Login

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/login.png)

#### Homepage

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/home.png)

#### Node list

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/node-list.png)

#### Node topology

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/node-network.png)

#### Spider list

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/spider-list.png)

#### Spider overview

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/spider-overview.png)

#### Spider analysis

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/spider-analytics.png)

#### Spider file edit

![](http://static-docs.crawlab.cn/file-edit.png)

#### Task details - capture results

![](https://raw.githubusercontent.com/tikazyq/crawlab-docs/master/images/task-results.png)

#### Periodical Tasks

![](http://static-docs.crawlab.cn/schedule-v0.4.4.png)

#### Installation dependency

![](http://static-docs.crawlab.cn/node-install-dependencies.png)

#### Message notification

<img src="http://static-docs.crawlab.cn/notification-mobile.jpeg" height="480px">
