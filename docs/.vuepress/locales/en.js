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
        text: 'GitHub',
        link: 'https://github.com/crawlab-team/crawlab'
      },
      {
        text: 'v0.6.x',
        items: [
          {
            text: '0.5.1',
            link: 'https://docs.crawlab.cn/en/',
          },
        ]
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/en/guide',
        collapsable: false,
        children: [
          {
            title: 'Introduction',
            path: '/en/guide/introduction',
          },
          {
            title: 'Quick Start',
            path: '/en/guide/quick-start',
          },
          {
            title: 'Installation',
            path: '/en/guide/installation/',
            collapsable: false,
            children: [
              {
                title: 'Docker',
                path: '/en/guide/installation/docker',
              },
              {
                title: 'Kubernetes',
                path: '/en/guide/installation/kubernetes',
              },
              {
                title: 'Direct Deploy',
                path: '/en/guide/installation/direct-deploy',
              },
            ]
          },
          {
            title: 'Use Crawlab',
            path: '/en/guide/use-crawlab/',
            collapsable: false,
            children: [
              {
                title: 'Quick Tutorial',
                path: '/en/guide/use-crawlab/quick-tutorial',
              },
              {
                title: 'Basic Concepts',
                path: '/en/guide/use-crawlab/basic-concepts/',
                children: [
                  {
                    title: 'Node',
                    path: '/en/guide/use-crawlab/basic-concepts/node',
                  },
                  {
                    title: 'Project',
                    path: '/en/guide/use-crawlab/basic-concepts/project',
                  },
                  {
                    title: 'Spider',
                    path: '/en/guide/use-crawlab/basic-concepts/spider',
                  },
                  {
                    title: 'Task',
                    path: '/en/guide/use-crawlab/basic-concepts/task',
                  },
                  {
                    title: 'Schedule',
                    path: '/en/guide/use-crawlab/basic-concepts/schedule',
                  },
                  {
                    title: 'User',
                    path: '/en/guide/use-crawlab/basic-concepts/user',
                  },
                  {
                    title: 'Plugin',
                    path: '/en/guide/use-crawlab/basic-concepts/plugin',
                  },
                  {
                    title: 'Others',
                    path: '/en/guide/use-crawlab/basic-concepts/others',
                  },
                ]
              },
              {
                title: 'Official Plugins',
                path: '/en/guide/use-crawlab/public-plugins/',
                children: [
                  {
                    title: 'plugin-dependency',
                    path: '/en/guide/use-crawlab/public-plugins/plugin-dependency',
                  },
                  {
                    title: 'plugin-spider-assistant',
                    path: '/en/guide/use-crawlab/public-plugins/plugin-spider-assistant',
                  },
                  {
                    title: 'plugin-notification',
                    path: '/en/guide/use-crawlab/public-plugins/plugin-notification',
                  },
                ]
              }
            ]
          },
          {
            title: 'CLI',
            path: '/en/guide/cli/',
          }
        ]
      },
      {
        title: 'Principle',
        path: '/en/principle',
        collapsable: false,
        children: [
          {
            title: 'Introduction',
            path: '/en/principle/introduction',
          },
        ],
      },
      {
        title: 'Develop',
        path: '/en/develop/',
        children: [
          {
            title: 'Introduction',
            path: '/en/develop/introduction',
          },
          {
            title: 'Plugins',
            path: '/en/develop/plugins/',
          }
        ]
      }
    ]
  }
}
