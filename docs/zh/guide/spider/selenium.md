# Selenium 爬虫集成

## Selenium 简介

[Selenium](https://selenium-python.readthedocs.io/index.html) 是一个用于 Web 应用程序测试的工具，但也可以用于编写 Web
爬虫。与传统的 HTTP 请求库（如 Requests）不同，Selenium 允许您模拟浏览器行为，实际上自动化浏览器来获取数据。这对于那些需要
JavaScript 渲染的动态网页非常有用。

## 在 Crawlab 中集成 Selenium 爬虫

下面，我们将介绍如何在 Crawlab 中集成 Selenium 爬虫，并在 Crawlab 前端界面中显示抓取结果。我们将以36氪为例进行演示。

### 创建爬虫

在 Crawlab 爬虫列表中，创建名为 "36kr" 的爬虫，执行命令为 `python main.py`。

### 编辑爬虫文件

创建并打开 `main.py`，输入以下内容。

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from crawlab import save_item

# create web driver with chrome
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
browser = webdriver.Chrome(options=chrome_options)

# navigate to news list page
browser.get('https://36kr.com/information/web_news/')

# get article items
items = browser.find_elements(by=By.CSS_SELECTOR, value='.information-flow-list > .information-flow-item')

# iterate items
for item in items:
    # fields
    el_title = item.find_element(by=By.CSS_SELECTOR, value='.article-item-title')
    title = el_title.text
    url = el_title.get_attribute('href')
    topic = item.find_element(by=By.CSS_SELECTOR, value='.kr-flow-bar-motif > a').text
    description = item.find_element(by=By.CSS_SELECTOR, value='.article-item-description').text
    try:
        pic_url = item.find_element(by=By.CSS_SELECTOR, value='.article-item-pic > img').get_attribute('src')
    except:
        pic_url = None

    # save to crawlab
    save_item({
        'title': title,
        'url': url,
        'topic': topic,
        'description': description,
        'pic_url': pic_url,
    })
```

其中，我们定义了 Chrome 浏览器的 `chrome_options`，并需要加入以下参数。

::: warning 注意
这很重要，否则在 Crawlab 中将无法正常运行！
:::


```python
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
```

最后，我们用 Crawlab SDK 中的 `save_item` 方法保存爬虫抓取获得的结果。

### 运行爬虫

在 "36kr" 爬虫中运行爬虫，即可以获取得到抓取结果。
