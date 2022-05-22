module.exports = {
  locale: {
    lang: 'zh-CN',
    title: 'Crawlab 中文文档',
    description: 'Documentation for distributed web crawler management platform',
  },
  themeConfig: {
    selectText: 'EN / 中文',
    label: '简体中文',
    ariaLabel: 'EN / 中文',
    editLinkText: '在 GitHub 上编辑此页',
    serviceWorker: {
      updatePopup: {
        message: '发现新内容可用.',
        buttonText: '刷新'
      }
    },
    algolia: {},
    nav: [
      {
        text: '文档',
        items: [
          {
            text: '指南',
            link: '/zh/introduction',
          },
          {
            text: '原理',
            link: '/zh/Architecture/',
          },
          {
            text: '贡献',
            link: '/zh/Contribution/',
          },
          {
            text: 'Q&A',
            link: '/zh/QA/',
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
            link: 'https://docs.crawlab.cn/zh/',
          },
        ]
      },
    ],
    sidebar: [
      {
        title: '指南',
        path: '/zh/',
        collapsable: false,
        initialOpenGroupIndex: 1,
        children: [
          {
            title: 'Crawlab 介绍',
            path: '/zh/introduction',
          },
          {
            title: 'Crawlab 官网',
            path: 'https://crawlab.cn',
          },
          {
            title: '快速开始',
            path: '/zh/QuickStart/',
          },
          {
            title: '安装',
            path: '/zh/Installation/',
            children: [
              {
                title: 'Docker',
                path: '/zh/Installation/Docker',
              },
              {
                title: 'Kubernetes',
                path: '/zh/Installation/Kubernetes',
              },
              {
                title: '直接部署',
                path: '/zh/Installation/Direct',
              },
              {
                title: '开发模式',
                path: '/zh/Installation/Develop',
              },
              {
                title: '多节点部署',
                path: '/zh/Installation/MultiNode',
              },
              {
                title: '专业版部署',
                path: '/zh/Installation/Pro',
              },
            ]
          },
          {
            title: '配置',
            path: '/zh/Config/',
          },
          {
            title: '爬虫',
            path: '/zh/Spider/',
            children: [
              {
                title: '自定义爬虫',
                path: '/zh/Spider/CustomizedSpider',
              },
              {
                title: '可配置爬虫',
                path: '/zh/Spider/ConfigurableSpider',
              },
              {
                title: 'Scrapy 爬虫',
                path: '/zh/Spider/ScrapySpider',
              },
              {
                title: '长任务爬虫',
                path: '/zh/Spider/LongTaskSpider',
              },
              {
                title: '部署爬虫',
                path: '/zh/Spider/Deploy',
              },
              {
                title: '运行爬虫',
                path: '/zh/Spider/Run',
              },
              {
                title: '复制爬虫',
                path: '/zh/Spider/Copy',
              },
              {
                title: '统计数据',
                path: '/zh/Spider/Analytics',
              },
              {
                title: '在线编辑文件',
                path: '/zh/Spider/FileEdit',
              },
              {
                title: '结果去重',
                path: '/zh/Spider/Deduplication',
              },
              {
                title: '自动安装依赖',
                path: '/zh/Spider/AutoInstallDeps',
              },
              {
                title: 'Webhook',
                path: '/zh/Spider/Webhook',
              },
            ]
          },
          {
            title: '任务',
            path: '/zh/Task/',
            children: [
              {
                title: '运行任务',
                path: '/zh/Task/Run',
              },
              {
                title: '任务日志',
                path: '/zh/Task/Log',
              },
              {
                title: '任务结果',
                path: '/zh/Task/Results',
              },
              {
                title: '操作任务',
                path: '/zh/Task/Action',
              },
            ]
          },
          {
            title: '定时任务',
            path: '/zh/Schedule/',
          },
          {
            title: '项目',
            path: '/zh/Project/',
          },
          {
            title: 'SDK',
            path: '/zh/SDK/',
            children: [
              {
                title: 'CLI',
                path: '/zh/SDK/CLI'
              },
              {
                title: 'Python',
                path: '/zh/SDK/Python'
              },
              {
                title: 'Node.js',
                path: '/zh/SDK/Nodejs'
              },
            ]
          },
          {
            title: '消息通知',
            path: '/zh/Notification/',
            children: [
              {
                title: '邮件通知',
                path: '/zh/Notification/Mail',
              },
              {
                title: '钉钉机器人',
                path: '/zh/Notification/DingTalk',
              },
              {
                title: '企业微信机器人',
                path: '/zh/Notification/Wechat',
              },
            ]
          },
          {
            title: '节点',
            path: '/zh/Node/',
            children: [
              {
                title: '查看节点列表',
                path: '/zh/Node/View',
              },
              {
                title: '安装节点依赖',
                path: '/zh/Node/Installation',
              },
              {
                title: '查看节点拓扑图',
                path: '/zh/Node/Network',
              },
              {
                title: '添加节点',
                path: '/zh/Node/Add',
              },
            ]
          },
          {
            title: '监控',
            path: '/zh/Monitor/',
          },
          {
            title: '爬虫集成',
            path: '/zh/Integration/',
            children: [
              {
                title: 'Scrapy',
                path: '/zh/Integration/Scrapy',
              },
              {
                title: '通用 Python 爬虫',
                path: '/zh/Integration/Python',
              },
              {
                title: '通用 Node.js 爬虫',
                path: '/zh/Integration/Nodejs',
              },
              {
                title: '通用 Golang 爬虫',
                path: '/zh/Integration/Golang',
              },
              {
                title: 'Colly',
                path: '/zh/Integration/Colly',
              },
              {
                title: 'Puppeteer',
                path: '/zh/Integration/Puppeteer',
              },
              {
                title: '其他爬虫',
                path: '/zh/Integration/OtherFramework',
              },
            ]
          },
          {
            title: 'CI/CD',
            path: '/zh/CI/',
            children: [
              {
                title: 'Git 同步',
                path: '/zh/CI/Git',
              },
            ]
          },
          {
            title: '权限管理',
            path: '/zh/Auth/',
          },
          {
            title: '数据源',
            path: '/zh/DataSource/',
            children: [
              {
                title: 'MongoDB',
                path: '/zh/DataSource/MongoDB',
              },
              {
                title: 'MySQL',
                path: '/zh/DataSource/MySQL',
              },
              {
                title: 'Postgres',
                path: '/zh/DataSource/Postgres',
              },
              {
                title: 'Kafka',
                path: '/zh/DataSource/Kafka',
              },
              {
                title: 'ElasticSearch',
                path: '/zh/DataSource/ElasticSearch',
              },
            ]
          },
          {
            title: 'API',
            path: '/zh/Api/',
            children: [
              {
                title: 'API Token',
                path: '/zh/Api/ApiToken'
              }
            ]
          },
        ]
      },
      {
        title: '原理',
        path: '/zh/Architecture/',
        collapsable: false,
        initialOpenGroupIndex: 1,
        children: [
          {
            title: '整体架构',
            path: '/zh/Architecture/Architecture'
          },
          {
            title: '节点通信',
            path: '/zh/Architecture/NodeCommunication'
          },
          {
            title: '节点监控',
            path: '/zh/Architecture/NodeMonitoring'
          },
          {
            title: '爬虫部署',
            path: '/zh/Architecture/SpiderDeployment'
          },
          {
            title: '任务执行',
            path: '/zh/Architecture/TaskExecution'
          },
          {
            title: 'RPC',
            path: '/zh/Architecture/RPC'
          },
        ]
      },
      {
        title: '贡献',
        path: '/zh/Contribution/'
      },
      {
        title: 'Q&A',
        path: '/zh/QA/'
      },
    ]
  },
}
