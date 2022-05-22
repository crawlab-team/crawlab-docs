module.exports = {
  locale: {
    lang: 'en-US',
    title: 'Crawlab Documentation',
    description: 'Documentation for distributed web crawler management platform Crawlab',
  },
  themeConfig: {
    selectText: 'EN / 中文',
    label: 'English',
    ariaLabel: 'EN / 中文',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    algolia: {},
    nav: [
      {
        text: 'Documentation',
        items: [
          {
            text: 'Guide',
            link: '/en/introduction',
          },
          {
            text: 'Architecture',
            link: '/en/Architecture/',
          },
          {
            text: 'Contribution',
            link: '/en/Contribution/',
          },
          {
            text: 'Q&A',
            link: '/en/QA/',
          },
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/crawlab-team/crawlab'
      },
      {
        text: 'v0.5.1',
        items: [
          {
            text: 'v0.6.x',
            link: 'https://docs.crawlab.cn/en/',
          },
        ]
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/en/',
        collapsable: false,
        initialOpenGroupIndex: 1,
        children: [
          {
            title: 'Crawlab Introdution',
            path: '/en/introduction',
          },
          {
            title: 'Crawlab Official Site',
            path: 'https://crawlab.cn',
          },
          {
            title: 'Quick Start',
            path: '/en/QuickStart/',
          },
          {
            title: 'Installation',
            path: '/en/Installation/',
            children: [
              {
                title: 'Docker',
                path: '/en/Installation/Docker',
              },
              {
                title: 'Kubernetes',
                path: '/en/Installation/Kubernetes',
              },
              {
                title: 'Direct Deploy',
                path: '/en/Installation/Direct',
              },
              {
                title: 'Develop Mode',
                path: '/en/Installation/Develop',
              },
              {
                title: 'Multi-Node Deploy',
                path: '/en/Installation/MultiNode',
              },
              {
                title: 'Pro-Edition Deploy',
                path: '/en/Installation/Pro',
              },
            ]
          },
          {
            title: 'Configuration',
            path: '/en/Config/',
          },
          {
            title: 'Spider',
            path: '/en/Spider/',
            children: [
              {
                title: 'Customized Spider',
                path: '/en/Spider/CustomizedSpider',
              },
              {
                title: 'Configurable Spider',
                path: '/en/Spider/ConfigurableSpider',
              },
              {
                title: 'Scrapy Spider',
                path: '/en/Spider/ScrapySpider',
              },
              {
                title: 'Long-Task Spider',
                path: '/en/Spider/LongTaskSpider',
              },
              {
                title: 'Deploy Spider',
                path: '/en/Spider/Deploy',
              },
              {
                title: 'Run Spider',
                path: '/en/Spider/Run',
              },
              {
                title: 'Copy Spider',
                path: '/en/Spider/Copy',
              },
              {
                title: 'Analytics',
                path: '/en/Spider/Analytics',
              },
              {
                title: 'File Edit',
                path: '/en/Spider/FileEdit',
              },
              {
                title: 'Deduplication',
                path: '/en/Spider/Deduplication',
              },
              {
                title: 'Auto Install Dependencies',
                path: '/en/Spider/AutoInstallDeps',
              },
              {
                title: 'Webhook',
                path: '/en/Spider/Webhook',
              },
            ]
          },
          {
            title: 'Task',
            path: '/en/Task/',
            children: [
              {
                title: 'Run Task',
                path: '/en/Task/Run',
              },
              {
                title: 'Task Logs',
                path: '/en/Task/Log',
              },
              {
                title: 'Task Results',
                path: '/en/Task/Results',
              },
              {
                title: 'Task Actions',
                path: '/en/Task/Action',
              },
            ]
          },
          {
            title: 'Schedule',
            path: '/en/Schedule/',
          },
          {
            title: 'Project',
            path: '/en/Project/',
          },
          {
            title: 'SDK',
            path: '/en/SDK/',
            children: [
              {
                title: 'CLI',
                path: '/en/SDK/CLI'
              },
              {
                title: 'Python',
                path: '/en/SDK/Python'
              },
              {
                title: 'Node.js',
                path: '/en/SDK/Nodejs'
              },
            ]
          },
          {
            title: 'Notification',
            path: '/en/Notification/',
            children: [
              {
                title: 'Mail',
                path: '/en/Notification/Mail',
              },
              {
                title: 'DingTalk',
                path: '/en/Notification/DingTalk',
              },
              {
                title: 'Wechat',
                path: '/en/Notification/Wechat',
              },
            ]
          },
          {
            title: 'Node',
            path: '/en/Node/',
            children: [
              {
                title: 'View Nodes',
                path: '/en/Node/View',
              },
              {
                title: 'Install Node Dependencies',
                path: '/en/Node/Installation',
              },
              {
                title: 'View Node Network',
                path: '/en/Node/Network',
              },
              {
                title: 'Add Node',
                path: '/en/Node/Add',
              },
            ]
          },
          {
            title: 'Monitor',
            path: '/en/Monitor/',
          },
          {
            title: 'Spider Integration',
            path: '/en/Integration/',
            children: [
              {
                title: 'Scrapy',
                path: '/en/Integration/Scrapy',
              },
              {
                title: 'General Python Spider',
                path: '/en/Integration/Python',
              },
              {
                title: 'General Node.js Spider',
                path: '/en/Integration/Nodejs',
              },
              {
                title: 'General Golang Spider',
                path: '/en/Integration/Golang',
              },
              {
                title: 'Colly',
                path: '/en/Integration/Colly',
              },
              {
                title: 'Puppeteer',
                path: '/en/Integration/Puppeteer',
              },
              {
                title: 'Other Frameworks',
                path: '/en/Integration/OtherFramework',
              },
            ]
          },
          {
            title: 'CI/CD',
            path: '/en/CI/',
            children: [
              {
                title: 'Git Sync',
                path: '/en/CI/Git',
              },
            ]
          },
          {
            title: 'Permission Management',
            path: '/en/Auth/',
          },
          {
            title: 'Data Source',
            path: '/en/DataSource/',
            children: [
              {
                title: 'MongoDB',
                path: '/en/DataSource/MongoDB',
              },
              {
                title: 'MySQL',
                path: '/en/DataSource/MySQL',
              },
              {
                title: 'Postgres',
                path: '/en/DataSource/Postgres',
              },
              {
                title: 'Kafka',
                path: '/en/DataSource/Kafka',
              },
              {
                title: 'ElasticSearch',
                path: '/en/DataSource/ElasticSearch',
              },
            ]
          },
          {
            title: 'API',
            path: '/en/Api/',
            children: [
              {
                title: 'API Token',
                path: '/en/Api/ApiToken'
              }
            ]
          },
        ]
      },
      {
        title: 'Principle',
        path: '/en/Architecture/',
        collapsable: false,
        initialOpenGroupIndex: 1,
        children: [
          {
            title: 'Architecture',
            path: '/en/Architecture/Architecture'
          },
          {
            title: 'Node Communication',
            path: '/en/Architecture/NodeCommunication'
          },
          {
            title: 'Node Monitoring',
            path: '/en/Architecture/NodeMonitoring'
          },
          {
            title: 'Spider Deployment',
            path: '/en/Architecture/SpiderDeployment'
          },
          {
            title: 'Task Execution',
            path: '/en/Architecture/TaskExecution'
          },
          {
            title: 'RPC',
            path: '/en/Architecture/RPC'
          },
        ]
      },
      {
        title: 'Contribution',
        path: '/en/Contribution/'
      },
      {
        title: 'Q&A',
        path: '/en/QA/'
      },
    ]
  }
}
