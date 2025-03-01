---
sidebar_position: 3
title: Node.js 爬虫
---

# Node.js 爬虫

## Node.js 爬虫简介

由于其异步特性和丰富的库生态系统，Node.js 是构建爬虫工具的强大平台。流行的包如 Axios、Cheerio 和 Puppeteer 使得获取、解析和与网页内容交互变得容易。

## 将 Node.js 爬虫与 Crawlab 集成

本指南演示了如何创建一个基于 Node.js 的 Web 抓取器，并将其与 Crawlab 集成以从虚构的求职网站收集工作列表。

### 在 Crawlab 中创建爬虫

1. 在 Crawlab 网页界面中，导航到爬虫列表
2. 点击“新建爬虫”按钮
3. 填写以下详细信息：
   - 名称： "job_board_scraper"
   - 执行命令： `node index.js`
   - 参数：（留空）
4. 点击“确认”以创建爬虫

### 设置 Node.js 项目

在创建爬虫后，我们需要设置一个 Node.js 项目。我们将使用以下结构：

```
job_board_scraper/
├── index.js
├── package.json
└── package-lock.json
```

#### 1. package.json

```json
{
  "name": "job_board_scraper",
  "version": "1.0.0",
  "description": "A job board scraper for Crawlab",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "axios": "^1.3.4",
    "cheerio": "^1.0.0-rc.12",
    "crawlab-sdk": "^0.6.0"
  }
}
```

#### 2. index.js

```javascript
const axios = require('axios');
const cheerio = require('cheerio');
const { saveItem } = require('crawlab-sdk');

// 配置
const baseUrl = 'https://example-jobs.com';
const startUrl = `${baseUrl}/jobs?page=1`;

// 从 Crawlab 提取参数
let jobCategory = '';
if (process.env.CRAWLAB_SPIDER_PARAM) {
  try {
    const params = JSON.parse(process.env.CRAWLAB_SPIDER_PARAM);
    jobCategory = params.category || '';
  } catch (err) {
    console.error('Error parsing parameters:', err.message);
  }
}

// 如果提供类别，则使用类别在 URL 中
const initialUrl = jobCategory 
  ? `${baseUrl}/jobs/category/${jobCategory}?page=1` 
  : startUrl;

// 主抓取函数
async function scrapeJobListings() {
  try {
    // 从第一页开始
    await scrapeJobPage(initialUrl);
  } catch (error) {
    console.error(`Error in main scraper: ${error.message}`);
  }
}

// 抓取单个页面的工作列表的函数
async function scrapeJobPage(url) {
  try {
    console.log(`Scraping page: ${url}`);
    
    // 获取页面内容
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    // 解析 HTML
    const $ = cheerio.load(response.data);
    
    // 提取工作列表
    const jobListings = $('.job-card');
    console.log(`Found ${jobListings.length} job listings on this page`);
    
    // 处理每个工作列表项
    for (let i = 0; i < jobListings.length; i++) {
      const jobCard = $(jobListings[i]);
      
      // 提取工作数据
      const title = jobCard.find('h2.job-title').text().trim();
      const company = jobCard.find('div.company-name').text().trim();
      const location = jobCard.find('div.job-location').text().trim();
      const salary = jobCard.find('div.job-salary').text().trim() || 'Not specified';
      const jobType = jobCard.find('span.job-type').text().trim();
      const postedDate = jobCard.find('div.posted-date').text().trim();
      const jobUrl = baseUrl + jobCard.find('a.job-link').attr('href');
      const logoUrl = jobCard.find('img.company-logo').attr('src');
      
      // 创建工作对象
      const job = {
        title,
        company,
        location,
        salary,
        jobType,
        postedDate,
        url: jobUrl,
        logoUrl,
        scrapedAt: new Date().toISOString()
      };
      
      // 保存到 Crawlab
      saveItem(job);
      console.log(`Saved job: ${title} at ${company}`);
    }
    
    // 检查是否有下一页
    const nextPageLink = $('a.pagination-next');
    if (nextPageLink.length > 0) {
      const nextPageUrl = baseUrl + nextPageLink.attr('href');
      
      // 添加延迟以避免服务器过载
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 递归抓取下一页
      await scrapeJobPage(nextPageUrl);
    }
  } catch (error) {
    console.error(`Error scraping page ${url}: ${error.message}`);
  }
}

// 启动抓取器
scrapeJobListings().then(() => {
  console.log('Scraping completed successfully');
}).catch(err => {
  console.error('Scraping failed:', err.message);
  process.exit(1);
});
```

### 关键集成点

与 Crawlab 的主要集成点包括：

1. 导入 Crawlab SDK：
   ```javascript
   const { saveItem } = require('crawlab-sdk');
   ```

2. 将数据保存到 Crawlab：
   ```javascript
   saveItem(job);
   ```

3. 从 Crawlab 读取参数：
   ```javascript
   if (process.env.CRAWLAB_SPIDER_PARAM) {
     try {
       const params = JSON.parse(process.env.CRAWLAB_SPIDER_PARAM);
       // 使用参数
     } catch (err) {
       console.error('Error parsing parameters:', err.message);
     }
   }
   ```

### 环境设置

#### Crawlab 专业版
如果您正在使用 **Crawlab 专业版**，则节点上已经预装了 Node.js。Puppeteer 的浏览器也已预装，这使得运行基于 JavaScript 的爬虫无需额外配置。

您只需上传您的 Node.js 项目文件并安装项目依赖：

1. 导航到您的爬虫详情页面
2. 点击“文件”标签
3. 上传 `index.js` 和 `package.json` 文件
4. 使用 Crawlab UI 中的依赖管理功能从 `package.json` 文件安装依赖

#### Crawlab 社区版
如果您正在使用 **Crawlab 社区版**，则需要确保在您的节点上安装 Node.js：

1. SSH 登录到您的节点服务器
2. 按照 [官方安装说明](https://nodejs.org/en/download/) 安装 Node.js
3. 使用 `node -v` 和 `npm -v` 验证安装

然后，上传您的项目文件并安装依赖：

1. 导航到您的爬虫详情页面
2. 点击“文件”标签
3. 上传 `index.js` 和 `package.json` 文件
4. 使用终端连接到您的节点并导航到您的爬虫目录
5. 运行以下命令以安装依赖：
   ```bash
   npm install
   ```

### 运行爬虫

1. 在 Crawlab 中，导航到您的爬虫详情页面
2. 点击“运行”按钮
3. 选择要执行的节点
4. 点击“确认”以启动爬虫

爬虫完成后，您可以在爬虫详情页面的“数据”标签中查看收集的工作列表。

## 故障排除

如果在 Crawlab 中运行 Node.js 爬虫时遇到错误，请检查以下内容：

1. **缺少 Node.js 环境**：确保 Node.js 已安装在您的 Crawlab 节点上
2. **依赖问题**：使用 `npm install` 确认所有必需的包都已安装
3. **网络连接**：检查您的节点是否可以访问目标网站
4. **空结果**：网站结构可能已更改；更新您的选择器

## 高级配置

### 使用 Puppeteer 抓取 JavaScript 重的网站

对于需要 JavaScript 渲染的网站，您可以使用 Puppeteer 而不是 Axios 和 Cheerio：

```javascript
// 添加到 package.json 依赖项：
// "puppeteer": "^19.7.2"

const puppeteer = require('puppeteer');
const { saveItem } = require('crawlab-sdk');

async function scrapeDynamicWebsite() {
  // 启动无头浏览器
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // 导航到目标页面
    await page.goto('https://example-dynamic-jobs.com/listings', {
      waitUntil: 'networkidle2'
    });
    
    // 等待工作列表加载
    await page.waitForSelector('.job-card');
    
    // 提取工作数据
    const jobListings = await page.evaluate(() => {
      const jobs = [];
      
      document.querySelectorAll('.job-card').forEach(card => {
        jobs.push({
          title: card.querySelector('h2.job-title').innerText.trim(),
          company: card.querySelector('div.company-name').innerText.trim(),
          location: card.querySelector('div.job-location').innerText.trim(),
          url: card.querySelector('a.job-link').href
        });
      });
      
      return jobs;
    });
    
    // 将每个工作保存到 Crawlab
    jobListings.forEach(job => {
      saveItem(job);
      console.log(`Saved job: ${job.title} at ${job.company}`);
    });
    
  } finally {
    // 总是关闭浏览器
    await browser.close();
  }
}

scrapeDynamicWebsite().catch(console.error);
```

### 速率限制和重试逻辑

为了使您的抓取器更健壮，添加速率限制和重试逻辑：

```javascript
// 延迟的实用函数
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// 具有重试逻辑的函数
async function fetchWithRetry(url, maxRetries = 3) {
  let attempts = 0;
  
  while (attempts < maxRetries) {
    try {
      // 添加 1-3 秒之间的随机延迟
      const randomDelay = 1000 + Math.random() * 2000;
      await delay(randomDelay);
      
      return await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        timeout: 10000 // 10 秒超时
      });
    } catch (error) {
      attempts++;
      console.error(`Attempt ${attempts} failed for URL ${url}: ${error.message}`);
      
      if (attempts >= maxRetries) {
        throw new Error(`Maximum retry attempts reached for URL ${url}`);
      }
      
      // 指数退避
      await delay(Math.pow(2, attempts) * 1000);
    }
  }
}
```