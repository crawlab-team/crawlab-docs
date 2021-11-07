# Introduction

If you already know what Crawlab is and what it is used for, you can head straight to [Quick Start](/docs/guide/quick-start.md) or [Installation](/docs/guide/installation/kubernetes.md) to install and start to use Crawlab.

If you are not familiar with Crawlab, you can read sections below in order to understand more about Crawlab.

## What is Crawlab?
Crawlab is a powerful **Web Crawler Management Platform (WCMP)** that can run web crawlers and spiders developed in various programming languages including Python, Go, Node.js, Java, C# as well as frameworks including Scrapy, Colly, Selenium, Puppeteer. It is used for running, managing and monitoring web crawlers, particularly in production environment where traceability, scalability and stability are the major factors to concern.

## Background and History
Crawlab project has been under continuous development since it was published in March 2019, and gone through a number of major releases. It was initially designed for solving the managerial issue when there are a large number of spiders to coordinate and execute. With a lot of improvements and newly updated features, Crawlab is becoming more and more popular in developer communities, particularly amongst web crawler engineers.

[Change Logs](https://github.com/crawlab-team/crawlab/blob/master/CHANGELOG.md)

## Who can use Crawlab?

- **Web Crawler Engineers**. By integrating web crawler programs into Crawlab, you can now focus only on the crawling and parsing logics, instead of wasting too much time on writing common modules such as task queue, storage, logging, notification, etc.
- **Operation/DevOps Engineers**. The main benefits from Crawlab for Operation/DevOps Engineers are the convenience in deployment (for both crawler programs and Crawlab itself). Crawlab supports easy installation with Docker and Kubernetes.
- **Data Analysts**. Data analysts who can code (e.g. Python) are able to develop web crawler programs (e.g. Scrapy) and upload them into Crawlab. Then leave all the rest dirty work to Crawlab, and it will automatically collect data for you.
- **Others**. Technically everyone can enjoy the convenience and easiness of automation provided by Crawlab. Though Crawlab is good at running web crawler tasks, it can also be used for other types of tasks such as data processing and automation.

## Main Features

<table>
<tr>
<th>Category</th>
<th>Feature</th>
<th>Description</th>
</tr>
<tr>
<td>Node</td>
<td>Node Management</td>
<td></td>
</tr>
<tr>
<td rowspan="6">Spider</td>
<td>Spider Deployment</td>
<td></td>
</tr>
<tr>
<td>Spider Code Editing</td>
<td></td>
</tr>
<tr>
<td>Spider Stats</td>
<td></td>
</tr>
<tr>
<td>Framework Integration</td>
<td></td>
</tr>
<tr>
<td>Data Storage Integration</td>
<td></td>
</tr>
<tr>
<td>Git Integration</td>
<td></td>
</tr>
<tr>
<td rowspan="3">Task</td>
<td>Task Scheduling</td>
<td></td>
</tr>
<tr>
<td>Task Logging</td>
<td></td>
</tr>
<tr>
<td>Task Stats</td>
<td></td>
</tr>
<tr>
<td rowspan="1">User</td>
<td>User Management</td>
<td></td>
</tr>
<tr>
<td rowspan="2">Other</td>
<td>Dependency Management</td>
<td></td>
</tr>
<tr>
<td>Notification</td>
<td></td>
</tr>
</table>
