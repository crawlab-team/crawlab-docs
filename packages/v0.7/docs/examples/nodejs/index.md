---
sidebar_position: 3
title: Node.js Spider
---

# Node.js Spider

## Introduction to Node.js Web Scraping

Node.js is a powerful platform for building web scrapers due to its asynchronous nature and rich ecosystem of libraries. Popular packages like Axios, Cheerio, and Puppeteer make it easy to fetch, parse, and interact with web content.

## Integrating Node.js Scrapers with Crawlab

This guide demonstrates how to create a Node.js-based web scraper and integrate it with Crawlab to collect job listings from a fictional job board website.

### Creating the Spider in Crawlab

1. In the Crawlab web interface, navigate to the Spider list
2. Click the "New Spider" button
3. Fill in the following details:
   - Name: "job_board_scraper"
   - Execute Command: `node index.js`
   - Parameter: (leave empty)
4. Click "Confirm" to create the spider

### Setting Up the Node.js Project

After creating the spider, we need to set up a Node.js project. Here's the structure we'll use:

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

// Configuration
const baseUrl = 'https://example-jobs.com';
const startUrl = `${baseUrl}/jobs?page=1`;

// Extract job parameters from Crawlab
let jobCategory = '';
if (process.env.CRAWLAB_SPIDER_PARAM) {
  try {
    const params = JSON.parse(process.env.CRAWLAB_SPIDER_PARAM);
    jobCategory = params.category || '';
  } catch (err) {
    console.error('Error parsing parameters:', err.message);
  }
}

// Use category in the URL if provided
const initialUrl = jobCategory 
  ? `${baseUrl}/jobs/category/${jobCategory}?page=1` 
  : startUrl;

// Main scraping function
async function scrapeJobListings() {
  try {
    // Start with the first page
    await scrapeJobPage(initialUrl);
  } catch (error) {
    console.error(`Error in main scraper: ${error.message}`);
  }
}

// Function to scrape a single page of job listings
async function scrapeJobPage(url) {
  try {
    console.log(`Scraping page: ${url}`);
    
    // Fetch the page content
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    // Parse the HTML
    const $ = cheerio.load(response.data);
    
    // Extract job listings
    const jobListings = $('.job-card');
    console.log(`Found ${jobListings.length} job listings on this page`);
    
    // Process each job listing
    for (let i = 0; i < jobListings.length; i++) {
      const jobCard = $(jobListings[i]);
      
      // Extract job data
      const title = jobCard.find('h2.job-title').text().trim();
      const company = jobCard.find('div.company-name').text().trim();
      const location = jobCard.find('div.job-location').text().trim();
      const salary = jobCard.find('div.job-salary').text().trim() || 'Not specified';
      const jobType = jobCard.find('span.job-type').text().trim();
      const postedDate = jobCard.find('div.posted-date').text().trim();
      const jobUrl = baseUrl + jobCard.find('a.job-link').attr('href');
      const logoUrl = jobCard.find('img.company-logo').attr('src');
      
      // Create job object
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
      
      // Save to Crawlab
      saveItem(job);
      console.log(`Saved job: ${title} at ${company}`);
    }
    
    // Check if there's a next page
    const nextPageLink = $('a.pagination-next');
    if (nextPageLink.length > 0) {
      const nextPageUrl = baseUrl + nextPageLink.attr('href');
      
      // Add a small delay to avoid overloading the server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Recursively scrape the next page
      await scrapeJobPage(nextPageUrl);
    }
  } catch (error) {
    console.error(`Error scraping page ${url}: ${error.message}`);
  }
}

// Start the scraper
scrapeJobListings().then(() => {
  console.log('Scraping completed successfully');
}).catch(err => {
  console.error('Scraping failed:', err.message);
  process.exit(1);
});
```

### Key Integration Points

The main integration points with Crawlab are:

1. Importing the Crawlab SDK:
   ```javascript
   const { saveItem } = require('crawlab-sdk');
   ```

2. Saving data to Crawlab:
   ```javascript
   saveItem(job);
   ```

3. Reading parameters from Crawlab:
   ```javascript
   if (process.env.CRAWLAB_SPIDER_PARAM) {
     try {
       const params = JSON.parse(process.env.CRAWLAB_SPIDER_PARAM);
       // Use parameters
     } catch (err) {
       console.error('Error parsing parameters:', err.message);
     }
   }
   ```

### Environment Setup

#### Crawlab Pro
If you're using **Crawlab Pro**, Node.js is already pre-installed on your nodes. Browsers for Puppeteer are also pre-installed, making it easy to run JavaScript-based spiders without additional configuration.

You just need to upload your Node.js project files and install your project dependencies:

1. Navigate to your spider's detail page
2. Click on the "Files" tab
3. Upload both `index.js` and `package.json` files
4. Use the Dependency Management feature in the Crawlab UI to install your dependencies from the package.json file

#### Crawlab Community
If you're using **Crawlab Community**, you'll need to ensure Node.js is installed on your nodes:

1. SSH into your node server
2. Install Node.js following the [official installation instructions](https://nodejs.org/en/download/)
3. Verify installation with `node -v` and `npm -v`

Then, upload your project files and install dependencies:

1. Navigate to your spider's detail page
2. Click on the "Files" tab
3. Upload both `index.js` and `package.json` files
4. Connect to your node using the terminal and navigate to your spider directory
5. Run the following command to install dependencies:
   ```bash
   npm install
   ```

### Running the Spider

1. In Crawlab, navigate to your spider's detail page
2. Click the "Run" button
3. Select the desired node for execution
4. Click "Confirm" to start the spider

After the spider completes, you can view the collected job listings in the "Data" tab of your spider's detail page.

## Troubleshooting

If you encounter errors when running your Node.js spider in Crawlab, check the following:

1. **Missing Node.js environment**: Ensure Node.js is installed on your Crawlab nodes
2. **Dependency issues**: Verify that all required packages are installed with `npm install`
3. **Network connectivity**: Check if your nodes have internet access to the target website
4. **Empty results**: The website structure may have changed; update your selectors

## Advanced Configuration

### Using Puppeteer for JavaScript-Heavy Sites

For websites that require JavaScript rendering, you can use Puppeteer instead of Axios and Cheerio:

```javascript
// Add to package.json dependencies:
// "puppeteer": "^19.7.2"

const puppeteer = require('puppeteer');
const { saveItem } = require('crawlab-sdk');

async function scrapeDynamicWebsite() {
  // Launch a headless browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Navigate to the target page
    await page.goto('https://example-dynamic-jobs.com/listings', {
      waitUntil: 'networkidle2'
    });
    
    // Wait for the job listings to load
    await page.waitForSelector('.job-card');
    
    // Extract job data
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
    
    // Save each job to Crawlab
    jobListings.forEach(job => {
      saveItem(job);
      console.log(`Saved job: ${job.title} at ${job.company}`);
    });
    
  } finally {
    // Always close the browser
    await browser.close();
  }
}

scrapeDynamicWebsite().catch(console.error);
```

### Rate Limiting and Retry Logic

To make your scraper more robust, add rate limiting and retry logic:

```javascript
// Utility function for delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Function with retry logic
async function fetchWithRetry(url, maxRetries = 3) {
  let attempts = 0;
  
  while (attempts < maxRetries) {
    try {
      // Add a random delay between 1-3 seconds
      const randomDelay = 1000 + Math.random() * 2000;
      await delay(randomDelay);
      
      return await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        timeout: 10000 // 10 second timeout
      });
    } catch (error) {
      attempts++;
      console.error(`Attempt ${attempts} failed for URL ${url}: ${error.message}`);
      
      if (attempts >= maxRetries) {
        throw new Error(`Maximum retry attempts reached for URL ${url}`);
      }
      
      // Exponential backoff
      await delay(Math.pow(2, attempts) * 1000);
    }
  }
}
```