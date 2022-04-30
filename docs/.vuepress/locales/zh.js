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
            text: '开发',
            link: '/zh/develop/',
          },
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
            text: 'v0.5.1',
            link: 'https://docs.crawlab.cn/zh/',
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
            collapsable: false,
            children: [
              {
                title: 'Docker',
                path: '/zh/guide/installation/docker',
              },
              {
                title: 'Kubernetes',
                path: '/zh/guide/installation/kubernetes',
              },
              {
                title: '直接部署',
                path: '/zh/guide/installation/direct-deploy',
              },
            ]
          },
          {
            title: '使用 Crawlab',
            path: '/zh/guide/use-crawlab/',
            collapsable: false,
            children: [
              {
                title: '快速教程',
                path: '/zh/guide/use-crawlab/quick-tutorial',
              },
              {
                title: '基础概念',
                path: '/zh/guide/use-crawlab/basic-concepts/',
                children: [
                  {
                    title: '节点',
                    path: '/zh/guide/use-crawlab/basic-concepts/node',
                  },
                  {
                    title: '项目',
                    path: '/zh/guide/use-crawlab/basic-concepts/project',
                  },
                  {
                    title: '爬虫',
                    path: '/zh/guide/use-crawlab/basic-concepts/spider',
                  },
                  {
                    title: '任务',
                    path: '/zh/guide/use-crawlab/basic-concepts/task',
                  },
                  {
                    title: '定时任务',
                    path: '/zh/guide/use-crawlab/basic-concepts/schedule',
                  },
                  {
                    title: '用户',
                    path: '/zh/guide/use-crawlab/basic-concepts/user',
                  },
                  {
                    title: '插件',
                    path: '/zh/guide/use-crawlab/basic-concepts/plugin',
                  },
                  {
                    title: '其他',
                    path: '/zh/guide/use-crawlab/basic-concepts/others',
                  },
                ]
              },
            ]
          },
          {
            title: '官方插件',
            path: '/zh/guide/use-crawlab/public-plugins/',
            children: [
              {
                title: '依赖管理插件',
                path: '/zh/guide/use-crawlab/public-plugins/plugin-dependency',
              },
              {
                title: '爬虫助手插件',
                path: '/zh/guide/use-crawlab/public-plugins/plugin-spider-assistant',
              },
              {
                title: '消息通知插件',
                path: '/zh/guide/use-crawlab/public-plugins/plugin-notification',
              },
            ]
          },
          {
            title: 'CLI',
            path: '/zh/guide/cli/',
          }
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
          {
            title: '核心模块',
            path: '/zh/principle/core-modules/',
            children: [
              {
                title: '爬虫',
                path: '/zh/principle/core-modules/spider/',
              },
              {
                title: '任务',
                path: '/zh/principle/core-modules/task/',
              },
              {
                title: '定时任务',
                path: '/zh/principle/core-modules/schedule/',
              },
            ]
          },
        ],
      },
      {
        title: '开发',
        path: '/zh/develop/',
        collapsable: false,
        initialOpenGroupIndex: 1,
        children: [
          {
            title: '介绍',
            path: '/zh/develop/introduction',
          },
          {
            title: '插件',
            path: '/zh/develop/plugins/',
          }
        ]
      }
    ]
  },
}
