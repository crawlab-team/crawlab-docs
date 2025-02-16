---
title: Selenium Spider
---

# Selenium Spider

## Selenium 简介

[Selenium](https://selenium-python.readthedocs.io/index.html) 是一个主要用于 Web 应用测试的工具，但也可以用于编写网络爬虫。与传统的 HTTP 请求库（如 Requests）不同，Selenium 允许您模拟浏览器行为并自动化浏览器以收集数据。这对于抓取需要 JavaScript 渲染的动态网页特别有用。

## 在 Crawlab 中集成 Selenium Spider

下面，我们将解释如何在 Crawlab 中集成一个 Selenium 爬虫，并在 Crawlab 前端界面中显示抓取结果。我们将使用抓取 36kr（36氪）网站的例子来演示这个过程。

### 创建爬虫

在 Crawlab 的爬虫列表中，创建一个名为 "36kr" 的爬虫，执行命令为 `python main.py`。

### 编辑爬虫文件

创建并打开 `main.py` 文件，输入以下内容：

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from crawlab import save_item

# 使用 chrome 创建 web 驱动
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
browser = webdriver.Chrome(options=chrome_options)

# 导航到新闻列表页面
browser.get('https://36kr.com/information/web_news/')

# 获取文章项
items = browser.find_elements(by=By.CSS_SELECTOR, value='.information-flow-list > .information-flow-item')

# 遍历项
for item in items:
    # 提取字段
    el_title = item.find_element(by=By.CSS_SELECTOR, value='.article-item-title')
    title = el_title.text
    url = el_title.get_attribute('href')
    topic = item.find_element(by=By.CSS_SELECTOR, value='.kr-flow-bar-motif > a').text
    description = item.find_element(by=By.CSS_SELECTOR, value='.article-item-description').text
    try:
        pic_url = item.find_element(by=By.CSS_SELECTOR, value='.article-item-pic > img').get_attribute('src')
    except:
        pic_url = None

    # 将结果保存到 Crawlab
    save_item({
        'title': title,
        'url': url,
        'topic': topic,
        'description': description,
        'pic_url': pic_url,
    })
```

在这段代码中，我们定义了 Chrome 浏览器的 `chrome_options` 并包含以下重要参数：

:::warning 注意
这些参数至关重要；否则，脚本可能无法在 Crawlab 中正确运行！
:::

```python
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
```

最后，我们使用 Crawlab SDK 的 `save_item` 方法保存通过网络爬虫获得的抓取结果。

### 运行爬虫

在 Crawlab 中运行 "36kr" 爬虫以获取抓取结果。