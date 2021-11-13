---
home: true
heroImage: /assets/img/logo-150x150.png
heroText: Crawlab
tagline: Distributed web crawler management platform
actionText: Get Started →
actionLink: /guide/quick-start
features:
- title: Flexibility
  details: Run web crawlers in any programming languages including Python, Go and Java, or web crawling frameworks including Scrapy, Colly and Selenium.
- title: Scalability
  details: Distributed architecture design of Crawlab allows users to easily manage over hundreds of distributed spiders and execute million-scale crawling tasks.
- title: Powerful Features
  details: Crawlab provides powerful functionalities such as Spider Auto-Deployment, Logs Monitoring, Git Integration, Online File Editor, Notifications, etc.
slides:
- title: Dashboard
  content: Overview of comprehensive metrics
  image: /assets/img/screenshots/screenshot-home.png
- title: Nodes
  content: Visually check node status on distributed system
  image: /assets/img/screenshots/screenshot-node-list.png
- title: Spiders
  content: Easily manage spiders and edit code files online
  image: /assets/img/screenshots/screenshot-spider-detail-files.png
- title: Task Logs
  content: Realtime monitoring of task logs
  image: /assets/img/screenshots/screenshot-task-detail-logs.png
- title: Schedule
  content: Crontab-style periodical job system
  image: /assets/img/screenshots/screenshot-schedule-create.png
- title: Git Integration
  content: Seamless integration with spiders on Git
  image: /assets/img/screenshots/screenshot-git-logs.png
- title: Plugins
  content: Extensive functionalities enabled by Crawlab Plugin Framework (CPF)
  image: /assets/img/screenshots/screenshot-plugin-list.png
- title: Scrapy Support
  content: Spider framework integration provided by plugins
  image: /assets/img/screenshots/screenshot-plugin-spider-assistant.png
- title: Dependency Management
  content: Manage dependencies and third-party libraries without hassles
  image: /assets/img/screenshots/screenshot-plugin-dependency.png
footer: "ICP 证: 渝ICP备2021011872号-1 | Copyright © 2019-present Crawlab Team"
---

## Platform Screenshots

There are numerous powerful features making managing spiders as easy as playing RTS games (*StarCraft* is one of my favourite).

<SlideList :slides="$page.frontmatter.slides"></SlideList>
