## Configurable spider

Configurable spiders are features developed in version [v0.4.0](https://github.com/tikazyq/crawlab/releases/tag/v0.4.0). The purpose is to make the spider project with similar website structure configurable, and to streamline the process of developing spider, so as to greatly improve the efficiency of spider development.

Crawlab's configurable spider is based on Scrapy, so it naturally supports concurrency. Moreover, the configurable spider fully supports the general functions of [custom spider](./CustomizedSpider.md), so it also supports task scheduling, task monitoring, log monitoring and data analysis.

### How to add a configurable spider

The steps to add a configurable spider are as follows.

1. Navigate to the spider page through the left menu and click 'add spider';
2. Fill in 'spider name', 'display name', 'template' and 'result';
3. Click 'add' to navigate to the configuration page of the newly created spider;
4. Start to configure spiders.

![](http://static-docs.crawlab.cn/spider-configurable-add.png)

### Concept

First, we will introduce some basic concepts of configurable spiders.

The following figure shows the relationship between the concepts in the configurable spider.

![](http://static-docs.crawlab.cn/spider-configurable-relationship.png)

The configurable spider includes the following elements:

- **Spiderfile**：Similar to Dockerfile、Jenkinsfile、docker-compose.yml files, they are configuration files in YAML format of the configurable spider. The retrieved 'stage', 'field' and 'paging' can be configured by this file;
- **Stage（Stage）**：Different stages of spider crawling can be configured. One stage usually corresponds to the crawling process of one category page. For example, the list page is one stage, and the detail page is another stage. In scrapy there are different callback functions corresponding to them; List selector, paging selector and field definition can be defined in one stage; Next stage can be defined in one stage, and only one can be defined.
- **Field（Field）**：Field is the field that grabs data actually, such as title, URL, price, description, etc., Field extraction rules can use both XPath pages and CSS.

### How to configure

The following is a brief description of how to configure a configurable spider.

#### Stage

The following figure shows the configuration interface of the configurable spider.

![](http://static-docs.crawlab.cn/spider-configurable.png)

This interface supports the configuration of various configurable spider parameters and the saving or running of configurable spiders. Although this interface is called "stage", it can not only edit stage, but also edit fields and other general parameters (such as start URL, start stage, etc.).

The whole configurable spider is displayed according to the structure of 'stage -> field'. That is to say, the collapsible part is the stage, and the detail list is the field list of the stage. Stage and field support adding, deleting, modifying and copying at the same time, which is realized by the button on the left. The stage supports stage name modification, whether it is a list and list selector, whether it is paging and paging selector; the field supports modifying field name, selector category, selector, whether it is a property, property, next stage and comment.

#### Technological process

The following figure shows the process interface of the configurable spider. This is the visualization of each stage. You can see the data flow of the spider. Hover over the stage node to see the details.

![](http://static-docs.crawlab.cn/spider-configurable-process.png)

#### Setting

The following figure shows the setting interface of the configurable spider.

![](http://static-docs.crawlab.cn/spider-configurable-settings.png)

You need to understand that the default engine of a configurable spider is Scrapy, so the setting here is actually the global variable setting in 'settings.py' in Scrapy. For details, please refer to https://docs.scrapy.org/en/latest/topics/settings.html. The items in this list are in the form of Key-Value. The name represents the variable name in the setting, and the value represents the variable value.

#### Spiderfile

The following figure shows the 'Spiderfile' interface of the configurable spider.

![](http://static-docs.crawlab.cn/spider-configurable-spiderfile.png?1)

Here you can edit 'Spiderfile' in YAML format and configure the fetching rules by YAML configuration. If you are familiar with 'docker-compose', you will find that 'Spiderfile' is very similar to 'docker-compose.yml'. That is right! We just want to make the configurable spider simple, so that you can configure the spider directly by modifying the 'Spiderfile' file.

Here is a sample Spiderfile, with the annotations clearly marked. If you have any questions, please add wechat 'tikazyq1' for group communication.

```yaml
version: 0.4.0 # version (no special use for the moment, it may be used in later updates)
name: awesome_spider # spider name
start_url: http://example.com # The starting URL is the same as the start_urls in the scrapy. The difference is that this is a single URL
start_stage: stage1 # start stage
engine: scrapy # spider engine (for the time being, only the scrapy spider engine, and other extension engines will be developed later)
stages: # stage list
- name: stage1 # stage name
  is_list: true # List or not
  list_xpath: //ul[@id="list"]/li
  fields: # field list
  - name: title # field name
    xpath: //h3/a # field selector
  - name: url
    xpath: //h3/a
    attr: href # attribute
    next_stage: stage2 # Next stage
- name: stage2
  is_list: false
  fields:
  - name: description
    xpath: //*[@id="desc"]
  - name: content
    xpath: //*[@id="content"] 
settings: # Settings list, reference https://docs.scrapy.org/en/latest/topics/settings.html
	ROBOTSTXT_OBEY: true # compliance with robots.txt
	AUTOTHROTTLE_ENABLED: true # auto throttle or not
```

