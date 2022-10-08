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
            link: '/zh/guide/',
          },
          {
            text: '原理',
            link: '/zh/principle/',
          },
          {
            text: 'API 文档',
            link: '/zh/api/',
          }
          // {
          //   text: '开发',
          //   link: '/zh/develop/',
          // },
        ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/crawlab-team/crawlab'
      },
      {
        text: 'v0.6.x',
        items: [
          {
            text: 'v0.5.x',
            link: 'https://docs-v05.crawlab.cn/zh/',
          },
        ]
      },
    ],
    sidebar: [
      {
        title: '指南',
        path: '/zh/guide',
        collapsable: false,
        initialOpenGroupIndex: 1,
        children: [
          {
            title: '介绍',
            path: '/zh/guide/introduction',
          },
          {
            title: '快速开始',
            path: '/zh/guide/quick-start',
          },
          {
            title: '安装',
            path: '/zh/guide/installation/',
            children: [
              {
                title: 'Docker',
                path: '/zh/guide/installation/docker',
              },
              // TODO: implement
              // {
              //   title: 'Kubernetes',
              //   path: '/zh/guide/installation/kubernetes',
              // },
              // {
              //   title: '直接部署',
              //   path: '/zh/guide/installation/direct-deploy',
              // },
            ]
          },
          {
            title: '基础教程',
            path: '/zh/guide/basic-tutorial/',
          },
          {
            title: '节点',
            path: '/zh/guide/node/',
          },
          {
            title: '项目',
            path: '/zh/guide/project/',
          },
          {
            title: '爬虫',
            path: '/zh/guide/spider/',
          },
          {
            title: '定时任务',
            path: '/zh/guide/schedule/',
          },
          {
            title: '任务',
            path: '/zh/guide/task/',
          },
          {
            title: '用户',
            path: '/zh/guide/user/',
          },
          {
            title: '令牌',
            path: '/zh/guide/token/',
          },
          {
            title: '环境依赖',
            path: '/zh/guide/deps/',
          },
          {
            title: '消息通知',
            path: '/zh/guide/notification/',
          },
          {
            title: '插件',
            path: '/zh/guide/plugin/',
            children: [
              {
                title: '爬虫助手插件',
                path: '/zh/guide/plugin/plugin-spider-assistant',
              },
            ]
          },
          {
            title: 'CLI',
            path: '/zh/guide/cli/',
          },
        ]
      },
      {
        title: '原理',
        path: '/zh/principle/',
        collapsable: false,
        children: [
          {
            title: '介绍',
            path: '/zh/principle/introduction',
          },
          {
            title: '架构',
            path: '/zh/principle/architecture/',
          },
          {
            title: '节点',
            path: '/zh/principle/node/',
            children: [
              {
                title: '主节点',
                path: '/zh/principle/node/master-node',
              },
              {
                title: '工作节点',
                path: '/zh/principle/node/worker-node',
              },
              {
                title: '节点通信',
                path: '/zh/principle/node/node-communication',
              },
            ]
          },
          {
            title: '数据库',
            path: '/zh/principle/database/',
            children: [
              {
                title: 'MongoDB',
                path: '/zh/principle/database/mongodb',
              },
            ],
          },
          {
            title: '文件系统',
            path: '/zh/principle/filesystem/',
            children: [
              {
                title: 'SeaweedFS',
                path: '/zh/principle/filesystem/seaweedfs',
              },
            ]
          },
          // TODO: implement
          // {
          //   title: '核心模块',
          //   path: '/zh/principle/core-modules/',
          //   children: [
          //     {
          //       title: '爬虫',
          //       path: '/zh/principle/core-modules/spider/',
          //     },
          //     {
          //       title: '任务',
          //       path: '/zh/principle/core-modules/task/',
          //     },
          //     {
          //       title: '定时任务',
          //       path: '/zh/principle/core-modules/schedule/',
          //     },
          //   ]
          // },
        ],
      },
      {
        title: 'API 文档',
        path: '/zh/api/',
        children: [
          {
            title: '介绍',
            path: '/zh/api/introduction',
          },
          {
            title: 'API 参考文档',
            path: '/zh/api/api-reference',
          }
        ]
      },
      {
        title: '专业版',
        path: '/zh/pro/',
      },
      {
        title: '旧版本迁移',
        path: '/zh/migration/',
        children: [
          {
            title: '迁移至 v0.6',
            path: '/zh/migration/v0.6',
          },
        ],
      },
      // TODO: implement
      // {
      //   title: 'FAQ',
      //   path: '/zh/faq/',
      // },
      // TODO: implement
      // {
      //   title: '开发',
      //   path: '/zh/develop/',
      //   collapsable: false,
      //   initialOpenGroupIndex: 1,
      //   children: [
      //     {
      //       title: '介绍',
      //       path: '/zh/develop/introduction',
      //     },
      //     {
      //       title: '插件',
      //       path: '/zh/develop/plugins/',
      //     }
      //   ]
      // }
    ]
  },
}
