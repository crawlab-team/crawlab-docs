## 可配置爬虫

可配置爬虫是版本[v0.4.0](https://github.com/tikazyq/crawlab/releases/tag/v0.4.0)开发的功能。目的是将具有相似网站结构的爬虫项目可配置化，将开发爬虫的过程流程化，大大提高爬虫开发效率。

Crawlab 的可配置爬虫是基于 Scrapy 的，因此天生支持并发。而且，可配置爬虫完全支持[自定义爬虫](CustomizedSpider.md)的一般功能，因此也支持任务调度、任务监控、日志监控、数据分析。

### 如何添加可配置爬虫

添加可配置爬虫的步骤如下。

1. 通过左侧菜单导航至爬虫页面，点击“添加爬虫”；
2. 填选“爬虫名称”、“显示名称”、“模版”、“结果”；
3. 点击“添加”，会导航到新创建的爬虫的配置页面；
4. 开始配置爬虫。

![](http://static-docs.crawlab.cn/spider-configurable-add.png)

### 概念

首先，我们将介绍可配置爬虫的一些基本概念。

下图是可配置爬虫中各个概念之间的关系。

![](http://static-docs.crawlab.cn/spider-configurable-relationship.png)

可配置爬虫包括如下元素：

- **Spiderfile**：类似 Dockerfile、Jenkinsfile、docker-compose.yml 文件，是可配置爬虫的 YAML 格式的配置文件，抓取的`阶段`、`字段`、`分页`等都可以由这个文件配置；
- **阶段（Stage）**：可配置爬虫抓取的不同阶段，一个阶段通常对应一个类别页面的抓取过程，例如列表页为一个阶段，详情页为另一个阶段，在 Scrapy 中对应不同的回调函数；一个阶段中可以定义列表选择器和分页选择器以及字段定义；一个阶段中可以通过定义`下一阶段`，且只能定义一个。
- **字段（Field）**：字段其实就是抓取数据的字段，例如标题、URL、价格、描述等等；字段提取规则既可以用 XPath 页可以用 CSS。

### 如何配置

下面将简单介绍如何配置可配置爬虫。

#### 阶段

下图为可配置爬虫的配置界面。

![](http://static-docs.crawlab.cn/spider-configurable.png)

这个界面支持配置各种可配置爬虫参数以及保存或运行可配置爬虫。虽然这个界面叫“阶段”，但不止可以编辑阶段，还可以编辑字段以及其他通用参数（例如开始URL、开始阶段等等）。

整个可配置爬虫是按照 `阶段 -> 字段` 的结构来展示的，也就是说，可折叠的那部分是阶段，详情列表就是所属阶段的字段列表。阶段和字段同时支持增删改以及复制，通过左侧的按钮来实现。阶段支持阶段名称修改、是否为列表以及列表选择器、是否为分页以及分页选择器；字段支持修改字段名、选择器类别、选择器、是否为属性、属性、下一阶段、备注。

#### 流程

下图为可配置爬虫的流程界面。这个是各个阶段的可视化，可以看到爬虫的数据流动。鼠标悬浮到阶段节点上可以看到详细信息。

![](http://static-docs.crawlab.cn/spider-configurable-process.png)

#### 设置

下图为可配置爬虫的设置界面。

![](http://static-docs.crawlab.cn/spider-configurable-settings.png)

你需要明白可配置爬虫的默认引擎是 Scrapy，因此，这里的设置其实是 Scrapy 中 `settings.py` 中的全局变量设置，具体请参考 https://docs.scrapy.org/en/latest/topics/settings.html 。这个列表各项是 Key-Value 的形式，名称表示设置中的变量名，值表示变量值。

#### Spiderfile

下图是可配置爬虫的 `Spiderfile` 界面。

![](http://static-docs.crawlab.cn/spider-configurable-spiderfile.png?1)

这里可以编辑 YAML 格式的 `Spiderfile`，通过 YAML 配置的方式来配置抓取规则。如果你对 `docker-compose` 熟悉，你会发现 `Spiderfile` 非常类似 `docker-compose.yml`。没错！我们就是希望将可配置爬虫变得简单，让你可以直接通过修改 `Spiderfile` 文件的方式来配置爬虫。

下面是一个样例 Spiderfile，注释已经标记得很清楚了。如果有任何疑问，请加微信 tikazyq1 拉群交流。

```yaml
version: 0.4.0 # 版本（暂时没什么特别的用处，后面更新可能会用到）
name: awesome_spider # 爬虫名称
start_url: http://example.com # 起始URL，跟scrapy里的start_urls一样，不同的是这里为单个URL
start_stage: stage1 # 开始阶段
engine: scrapy # 爬虫引擎（暂时只有scrapy爬虫引擎，其他扩展引擎待后续开发）
stages: # 阶段列表
- name: stage1 # 阶段名称
  is_list: true # 是否为列表
  list_xpath: //ul[@id="list"]/li
  fields: # 字段列表
  - name: title # 字段名称
    xpath: //h3/a # 字段选择器
  - name: url
    xpath: //h3/a
    attr: href # 属性
    next_stage: stage2 # 下一阶段
- name: stage2
  is_list: false
  fields:
  - name: description
    xpath: //*[@id="desc"]
  - name: content
    xpath: //*[@id="content"]
settings: # 设置列表，参考 https://docs.scrapy.org/en/latest/topics/settings.html
	ROBOTSTXT_OBEY: true # 是否遵守robots.txt
	AUTOTHROTTLE_ENABLED: true # 是否自动节流
```

