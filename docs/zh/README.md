---
home: true
heroImage: /assets/img/logo-150x150.png
heroText: Crawlab
tagline: 分布式爬虫管理平台
actionText: 快速开始 →
actionLink: /zh/guide/quick-start
features:
- title: 灵活性
  details: 支持运行任何语言、任何框架编写的爬虫，例如 Python、Go、Java 以及 Scrapy、Colly、Selenium。
- title: 扩展性
  details: Crawlab 的分布式架构设计让用户能够轻松管理成百上千的爬虫程序，以及百万级抓取任务。
- title: 强大功能
  details: Crawlab 平台提供强大而实用的功能，例如爬虫自动化部署、日志监控、Git 集成、在线文件编辑、消息通知，等等。
slides:
- title: 仪表盘
  content: 全面详尽的数据指标图表
  image: /assets/img/screenshots/screenshot-home.png
- title: 节点
  content: 可视化查看分布式系统的节点状态
  image: /assets/img/screenshots/screenshot-node-list.png
- title: 爬虫
  content: 轻松管理网络爬虫，在线修改程序代码
  image: /assets/img/screenshots/screenshot-spider-detail-files.png
- title: 任务日志
  content: 实时监控任务日志
  image: /assets/img/screenshots/screenshot-task-detail-logs.png
- title: 定时任务
  content: Crontab 风格的定时任务系统
  image: /assets/img/screenshots/screenshot-schedule-create.png
- title: Git 集成
  content: 无缝集成 Git 上的爬虫项目
  image: /assets/img/screenshots/screenshot-git-logs.png
- title: 插件系统
  content: Crawlab 插件框架（CPF）运行轻松扩展自定义功能
  image: /assets/img/screenshots/screenshot-plugin-list.png
- title: Scrapy 支持
  content: 由插件提供的爬虫框架集成
  image: /assets/img/screenshots/screenshot-plugin-spider-assistant.png
- title: 依赖管理
  content: 无障碍管理项目依赖及第三方库
  image: /assets/img/screenshots/screenshot-plugin-dependency.png
footer: "ICP 证: 渝ICP备2021011872号-1 | Copyright © 2019-present Crawlab Team"
---

## 平台截图

强大的功能特性让管理爬虫跟玩即时战略游戏一样容易 (例如我的最爱 *星际争霸*)。

<SlideList :slides="$page.frontmatter.slides"></SlideList>
