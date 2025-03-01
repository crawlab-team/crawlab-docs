---
sidebar_position: 2
title: Selenium 爬虫
---

# Selenium 爬虫

## 介绍 Selenium

[Selenium](https://selenium-python.readthedocs.io/index.html) 是一个强大的浏览器自动化框架，主要用于 Web 应用程序测试，但它也非常适用于网络爬虫任务。与传统的 HTTP 请求库（如 Requests）不同，Selenium 允许您模拟真实的浏览器行为并自动与网页进行交互，包括：

- 渲染包含大量 JavaScript 的网站
- 填写表单和点击按钮
- 滚动无限加载的页面
- 处理在页面初始化后加载的动态内容
- 管理身份验证和 cookie

这使得 Selenium 对于抓取现代、动态的网站特别有价值，在这些网站中内容是异步加载的或需要用户交互。

## 在 Crawlab 中集成 Selenium 爬虫

接下来，我们将介绍如何将一个 Selenium 爬虫集成到 Crawlab 并在 Crawlab 界面中显示抓取结果。本指南通过一个实际示例来演示过程：从热门科技新闻网站 [TechCrunch](https://techcrunch.com/) 抓取文章信息。

### 创建爬虫

1. 在 Crawlab 网页界面中，导航到爬虫列表
2. 点击 "新建爬虫" 按钮
3. 填写以下详细信息：
   - 名称: "techcrunch"
   - 执行命令: `python main.py`
   - 参数: （留空）
4. 点击 "确认" 创建爬虫

### 设置 Selenium 脚本

创建完爬虫后，我们需要创建一个使用 Selenium 的 Python 脚本。让我们创建我们的 `main.py` 文件：

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from crawlab import save_item
import time

# 配置 Chrome 选项以实现无头操作
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
browser = webdriver.Chrome(options=chrome_options)

try:
    # 导航到 TechCrunch
    browser.get('https://techcrunch.com/category/startups/')
    
    # 等待页面加载
    WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "article.post-block"))
    )
    
    # 查找页面上的所有文章项
    articles = browser.find_elements(By.CSS_SELECTOR, "article.post-block")
    
    # 从每篇文章中提取数据
    for article in articles:
        try:
            # 提取标题和 URL
            title_element = article.find_element(By.CSS_SELECTOR, "h2 a")
            title = title_element.text
            url = title_element.get_attribute('href')
            
            # 提取作者
            try:
                author = article.find_element(By.CSS_SELECTOR, "span.river-byline__authors a").text
            except:
                author = "未知"
            
            # 提取日期
            try:
                date = article.find_element(By.CSS_SELECTOR, "time").get_attribute('datetime')
            except:
                date = None
            
            # 提取描述/摘要
            try:
                description = article.find_element(By.CSS_SELECTOR, "div.post-block__content").text
            except:
                description = None
            
            # 提取图片 URL
            try:
                image_element = article.find_element(By.CSS_SELECTOR, "figure img")
                image_url = image_element.get_attribute('src')
            except:
                image_url = None
            
            # 将提取的数据保存到 Crawlab
            save_item({
                'title': title,
                'url': url,
                'author': author,
                'date': date,
                'description': description,
                'image_url': image_url
            })
            
        except Exception as e:
            print(f"处理文章时出错: {e}")
            continue

finally:
    # 清理资源
    browser.quit()
```

### 在 Crawlab 中配置 Selenium

在像 Crawlab 这样的无头环境中运行 Selenium 时，某些 Chrome 选项对于正常运行至关重要：

```python
chrome_options.add_argument('--headless')      # 以无头模式运行 Chrome（没有图形界面）
chrome_options.add_argument('--no-sandbox')    # 绕过操作系统安全模型，容器化环境需要
chrome_options.add_argument('--disable-dev-shm-usage')  # 克服容器中有限的 /dev/shm 大小
```

:::warning 重要
这些参数对于在 Crawlab 的容器化环境中运行 Selenium 至关重要。如果没有它们，您的脚本可能无法正确执行！
:::

### 与 Crawlab 集成

Crawlab SDK 中的 `save_item` 方法用于将提取的数据发送到 Crawlab 的数据库。此函数接受一个包含您抓取数据的字典，并自动处理存储过程。

### 将脚本上传到 Crawlab

1. 在 Crawlab 界面中，导航到您的 "techcrunch" 爬虫
2. 点击 "文件" 标签
3. 点击 "新建文件" 并创建一个名为 `main.py` 的文件
4. 将上述代码粘贴到编辑器中
5. 点击 "保存" 存储文件

### 运行爬虫

1. 导航到您的爬虫详情页面
2. 点击 "运行" 按钮
3. 选择要执行的节点
4. 点击 "确认" 开始爬虫

爬虫完成后，您可以在爬虫详情页面的 "数据" 标签中查看收集的文章。

## 解决 Selenium 爬虫问题

如果您在 Crawlab 中遇到 Selenium 爬虫的问题，请检查以下内容：

1. **Chrome/ChromeDriver 兼容性**：确保您的 Crawlab 节点上安装的 Chrome 版本与正在使用的 ChromeDriver 版本兼容
2. **缺少依赖项**：验证您的节点上是否安装了所有必需的包（如 `selenium` 和 `crawlab-sdk`）
3. **内存问题**：如果浏览器崩溃，请考虑添加 `chrome_options.add_argument('--disable-gpu')` 并限制并发浏览器实例的数量
4. **选择器错误**：确认您的 CSS/XPath 选择器与目标网站的当前结构匹配
5. **网络问题**：检查您的 Crawlab 节点是否有互联网访问权限并能够访问目标网站

## 高级 Selenium 技术

### 等待元素加载

对于动态加载内容的页面，使用显式等待：

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 最多等待 10 秒钟，直到元素出现
element = WebDriverWait(browser, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, ".dynamic-content"))
)
```

### 处理分页

为了抓取多个页面，实现分页逻辑：

```python
# 示例分页代码
page = 1
max_pages = 5

while page <= max_pages:
    # 处理当前页面
    
    # 查找并点击下一页按钮
    try:
        next_button = browser.find_element(By.CSS_SELECTOR, ".pagination-next")
        next_button.click()
        page += 1
        
        # 等待新页面加载
        time.sleep(2)
    except:
        # 没有更多页面或发生错误
        break
```

### 处理认证

对于需要登录的站点：

```python
# 导航到登录页面
browser.get("https://example.com/login")

# 查找并填写用户名和密码字段
browser.find_element(By.ID, "username").send_keys("your_username")
browser.find_element(By.ID, "password").send_keys("your_password")

# 提交表单
browser.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

# 等待登录完成
WebDriverWait(browser, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, ".logged-in-indicator"))
)
```