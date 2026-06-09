# Selenium Spider Integration

## Introduction to Selenium

[Selenium](https://selenium-python.readthedocs.io/index.html) is a tool primarily used for web application testing, but
it can also be used to write web scrapers. Unlike traditional HTTP request libraries (such as Requests), Selenium allows
you to simulate browser behavior and automate the browser to gather data. This is particularly useful for scraping
dynamic web pages that require JavaScript rendering.

## Integrating Selenium Spider in Crawlab

Below, we will explain how to integrate a Selenium spider into Crawlab and display the scraping results in the
Crawlab frontend interface. We will demonstrate the process using the example of scraping 36kr (36氪) website.

### Creating the Spider

In the Crawlab spider list, create a spider named "36kr" with the execution command `python main.py`.

### Editing the Spider File

Create and open the `main.py` file and enter the following content:

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

# navigate to the news list page
browser.get('https://36kr.com/information/web_news/')

# get article items
items = browser.find_elements(by=By.CSS_SELECTOR, value='.information-flow-list > .information-flow-item')

# iterate through items
for item in items:
    # extract fields
    el_title = item.find_element(by=By.CSS_SELECTOR, value='.article-item-title')
    title = el_title.text
    url = el_title.get_attribute('href')
    topic = item.find_element(by=By.CSS_SELECTOR, value='.kr-flow-bar-motif > a').text
    description = item.find_element(by=By.CSS_SELECTOR, value='.article-item-description').text
    try:
        pic_url = item.find_element(by=By.CSS_SELECTOR, value='.article-item-pic > img').get_attribute('src')
    except:
        pic_url = None

    # save to Crawlab
    save_item({
        'title': title,
        'url': url,
        'topic': topic,
        'description': description,
        'pic_url': pic_url,
    })
```

In this code, we define the `chrome_options` for the Chrome browser and include the following important parameters:

::: warning Note
These parameters are crucial; otherwise, the script may not run correctly in Crawlab!
:::

```python
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
```

Finally, we use the `save_item` method from the Crawlab SDK to save the scraping results obtained by the web scraper.

### Running the Spider

Run the "36kr" spider in Crawlab to obtain the scraping results.