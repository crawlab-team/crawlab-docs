module.exports = {
  locale: {
    lang: 'zh-CN',
    title: 'Crawlab',
    description: 'Documentation for distributed web crawler management platform',
  },
  themeConfig: {
    selectText: '选择语言',
    label: '简体中文',
    ariaLabel: '选择语言',
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
        text: '其他版本',
        items: [
          {
            text: '0.5.1',
            link: 'https://docs.crawlab.cn/zh/',
          },
        ]
      }
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
        ]
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
