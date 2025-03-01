---
sidebar_position: 2
title: Selenium Spider
---

# Selenium Spider

## Introduction to Selenium

[Selenium](https://selenium-python.readthedocs.io/index.html) is a powerful browser automation framework primarily used for web application testing, but it excels at web scraping tasks as well. Unlike traditional HTTP request libraries (such as Requests), Selenium allows you to simulate real browser behavior and automate interactions with web pages, including:

- Rendering JavaScript-heavy websites
- Filling out forms and clicking buttons
- Scrolling through infinite-loading pages
- Handling dynamic content that loads after page initialization
- Managing authentication and cookies

This makes Selenium particularly valuable for scraping modern, dynamic websites where content is loaded asynchronously or requires user interaction.

## Integrating Selenium Spider in Crawlab

Below, we'll walk through how to integrate a Selenium spider into Crawlab and display the scraping results in the Crawlab interface. This guide demonstrates the process using a real-world example: scraping article information from TechCrunch, a popular technology news website.

### Creating the Spider

1. In the Crawlab web interface, navigate to the Spider list
2. Click the "New Spider" button
3. Fill in the following details:
   - Name: "techcrunch"
   - Execute Command: `python main.py`
   - Parameter: (leave empty)
4. Click "Confirm" to create the spider

### Setting Up the Selenium Script

After creating the spider, we need to create our Python script that utilizes Selenium. Let's create our `main.py` file:

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from crawlab import save_item
import time

# Configure Chrome options for headless operation
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
browser = webdriver.Chrome(options=chrome_options)

try:
    # Navigate to TechCrunch
    browser.get('https://techcrunch.com/category/startups/')
    
    # Wait for the page to load
    WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "article.post-block"))
    )
    
    # Find all article items on the page
    articles = browser.find_elements(By.CSS_SELECTOR, "article.post-block")
    
    # Extract data from each article
    for article in articles:
        try:
            # Extract title and URL
            title_element = article.find_element(By.CSS_SELECTOR, "h2 a")
            title = title_element.text
            url = title_element.get_attribute('href')
            
            # Extract author
            try:
                author = article.find_element(By.CSS_SELECTOR, "span.river-byline__authors a").text
            except:
                author = "Unknown"
            
            # Extract date
            try:
                date = article.find_element(By.CSS_SELECTOR, "time").get_attribute('datetime')
            except:
                date = None
            
            # Extract description/excerpt
            try:
                description = article.find_element(By.CSS_SELECTOR, "div.post-block__content").text
            except:
                description = None
            
            # Extract image URL
            try:
                image_element = article.find_element(By.CSS_SELECTOR, "figure img")
                image_url = image_element.get_attribute('src')
            except:
                image_url = None
            
            # Save extracted data to Crawlab
            save_item({
                'title': title,
                'url': url,
                'author': author,
                'date': date,
                'description': description,
                'image_url': image_url
            })
            
        except Exception as e:
            print(f"Error processing article: {e}")
            continue

finally:
    # Clean up resources
    browser.quit()
```

### Key Configuration for Selenium in Crawlab

When running Selenium in a headless environment like Crawlab, certain Chrome options are essential for proper operation:

```python
chrome_options.add_argument('--headless')      # Run Chrome in headless mode (without GUI)
chrome_options.add_argument('--no-sandbox')    # Bypass OS security model, required in containerized environments
chrome_options.add_argument('--disable-dev-shm-usage')  # Overcome limited /dev/shm size in containers
```

:::warning Important
These arguments are critical for running Selenium in Crawlab's containerized environment. Without them, your script may fail to execute properly!
:::

### Integration with Crawlab

The `save_item` method from the Crawlab SDK is used to send the extracted data to Crawlab's database. This function accepts a dictionary containing your scraped data and automatically handles the storage process.

### Uploading the Script to Crawlab

1. In the Crawlab interface, navigate to your "techcrunch" spider
2. Click on the "Files" tab
3. Click "New File" and create a file named `main.py`
4. Paste the code above into the editor
5. Click "Save" to store the file

### Running the Spider

1. Navigate to your spider's detail page
2. Click the "Run" button
3. Select the desired node for execution
4. Click "Confirm" to start the spider

After the spider completes, you can view the collected articles in the "Data" tab of your spider's detail page.

## Troubleshooting Selenium Spiders

If you encounter issues with your Selenium spider in Crawlab, check the following:

1. **Chrome/ChromeDriver compatibility**: Ensure the Chrome version installed on your Crawlab nodes is compatible with the ChromeDriver version being used
2. **Missing dependencies**: Verify that all required packages (`selenium`, `crawlab-sdk`) are installed on your nodes
3. **Memory issues**: If the browser crashes, consider adding `chrome_options.add_argument('--disable-gpu')` and limiting the number of concurrent browser instances
4. **Selector errors**: Confirm that your CSS/XPath selectors match the current structure of the target website
5. **Network issues**: Check if your Crawlab nodes have internet access and can reach the target website

## Advanced Selenium Techniques

### Waiting for Elements to Load

For pages that load content dynamically, use explicit waits:

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Wait up to 10 seconds for the element to be present
element = WebDriverWait(browser, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, ".dynamic-content"))
)
```

### Handling Pagination

To scrape multiple pages, implement pagination logic:

```python
# Example pagination code
page = 1
max_pages = 5

while page <= max_pages:
    # Process current page...
    
    # Find and click next page button
    try:
        next_button = browser.find_element(By.CSS_SELECTOR, ".pagination-next")
        next_button.click()
        page += 1
        
        # Wait for new page to load
        time.sleep(2)
    except:
        # No more pages or error
        break
```

### Handling Authentication

For sites requiring login:

```python
# Navigate to login page
browser.get("https://example.com/login")

# Find and fill username and password fields
browser.find_element(By.ID, "username").send_keys("your_username")
browser.find_element(By.ID, "password").send_keys("your_password")

# Submit the form
browser.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

# Wait for login to complete
WebDriverWait(browser, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, ".logged-in-indicator"))
)
```