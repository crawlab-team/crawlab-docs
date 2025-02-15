# 介绍

如果您已经了解 Crawlab 是什么，也知道它是做什么的，您可以直接到 [快速开始](quick-start.md) 或 [安装](installation/README.md) 来安装和使用 Crawlab。

如果您对 Crawlab 不熟悉，请阅读以下章节以进一步了解 Crawlab。

## 什么是 Crawlab?

Crawlab 是强大的 **网络爬虫管理平台（WCMP）**，它能够运行多种编程语言（包括 Python、Go、Node.js、Java、C#）或爬虫框架（包括
Scrapy、Colly、Selenium、Puppeteer）开发的网路爬虫。它能够用来运行、管理和监控网络爬虫，特别是对可溯性、可扩展性以及稳定性要求较高的生产环境。

## 背景和发展历史

Crawlab 项目自 2019 年 3 月开始一直在不断迭代，并且经历了多次大的更新。它最初是用来解决调度和运行大量爬虫时出现的管理问题。随着大量的优化和新功能加入，Crawlab 越来越受到开发者社区的欢迎，尤其是网路爬虫工程师。

[更新日志](https://github.com/crawlab-team/crawlab/blob/master/CHANGELOG.md)

## 谁适合使用 Crawlab?

- **网路爬虫工程师**. 通过集成爬虫程序到 Crawlab，您可以聚焦于爬虫的核心解析逻辑，从而避免浪费过多时间在开发通用模块上，例如任务队列、存储、日志、消息通知等。
- **运维工程师**. Crawlab 对于运维工程师来说最大的好处是部署便利（对于爬虫程序和 Crawlab 本身）。Crawlab 支持 Docker 或 Kubernetes 一键安装。
- **数据分析师**. 数据分析师如果能写代码（例如 Python），则可以开发爬虫程序（例如 Scrapy）然后上传到 Crawlab，然后就可以把所有脏活累活交给 Crawlab，它能够自动帮您抓取数据。
- **其他**. 准确的说，任何人都能够享受 Crawlab 自动化带来的便利。虽然 Crawlab 尤其擅长执行网络爬虫任务，但它不仅限于此，它能够被用来运行其他类型的任务，例如数据处理和自动化。

## 主要功能

<table>
<tr>
<th>类别</th>
<th>功能</th>
<th>描述</th>
</tr>
<tr>
<td>节点</td>
<td>节点管理</td>
<td>注册、管理、监控分布式系统中多个节点</td>
</tr>
<tr>
<td rowspan="6">爬虫</td>
<td>爬虫部署</td>
<td>自动部署爬虫到多节点，自动同步脚本或程序等爬虫文件</td>
</tr>
<tr>
<td>爬虫代码修改</td>
<td>实时在线更新和编辑脚本代码</td>
</tr>
<tr>
<td>爬虫统计数据</td>
<td>爬虫运行统计数据，例如平均运行时长以及结果数量</td>
</tr>
<tr>
<td>框架集成</td>
<td>基础爬虫框架，例如 Scrapy</td>
</tr>
<tr>
<td>数据存储集成</td>
<td>自动保存结果数据到数据库，不需要额外配置</td>
</tr>
<tr>
<td>Git 集成</td>
<td>通过内置或外部远程 Git 仓库进行版本管理</td>
</tr>
<tr>
<td rowspan="3">任务</td>
<td>任务调度</td>
<td>派发调度爬虫任务到分布式系统中多个节点</td>
</tr>
<tr>
<td>任务日志</td>
<td>自动保存任务日志，可以在前端 UI 界面被查看</td>
</tr>
<tr>
<td>任务数据统计</td>
<td>可视化展示任务数据，例如任务结果数量和运行时长</td>
</tr>
<tr>
<td rowspan="1">用户</td>
<td>用户管理</td>
<td>创建、更新、删除用户账号</td>
</tr>
<tr>
<td rowspan="2">其他</td>
<td>依赖管理</td>
<td>搜索和安装依赖，例如 Python、Node.js 的依赖包</td>
</tr>
<tr>
<td>消息通知</td>
<td>当任务触发或结束时，自动发送邮件或移动端消息通知</td>
</tr>
</table>
