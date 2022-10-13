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
            link: '/en/guide/',
          },
          {
            text: 'Principle',
            link: '/en/principle/',
          },
          {
            text: 'API Doc',
            link: '/en/api/',
          },
          // {
          //   text: 'Develop',
          //   link: '/en/develop/',
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
            text: '0.5.x',
            link: 'https://docs-v05.crawlab.cn/en/',
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
            children: [
              {
                title: 'Docker',
                path: '/en/guide/installation/docker',
              },
              // TODO: implement
              // {
              //   title: 'Kubernetes',
              //   path: '/en/guide/installation/kubernetes',
              // },
              // {
              //   title: 'Direct Deploy',
              //   path: '/en/guide/installation/direct-deploy',
              // },
            ]
          },
          {
            title: 'Basic Tutorial',
            path: '/en/guide/basic-tutorial/',
          },
          {
            title: 'Node',
            path: '/en/guide/node/',
          },
          {
            title: 'Project',
            path: '/en/guide/project/',
          },
          {
            title: 'Spider',
            path: '/en/guide/spider/',
          },
          {
            title: 'Schedule',
            path: '/en/guide/schedule/',
          },
          {
            title: 'Task',
            path: '/en/guide/task/',
          },
          {
            title: 'User',
            path: '/en/guide/user/',
          },
          // {
          //   title: 'Token',
          //   path: '/en/guide/token/',
          // },
          {
            title: 'Dependencies',
            path: '/en/guide/deps/',
          },
          {
            title: 'Notifications',
            path: '/en/guide/notifications/',
          },
          {
            title: 'Data Sources',
            path: '/en/guide/data-sources/',
          },
          {
            title: 'Monitoring',
            path: '/en/guide/monitoring/',
          },
          {
            title: 'Permission Management',
            path: '/en/guide/permissions/',
          },
          {
            title: 'Plugin',
            path: '/en/guide/plugin/',
            children: [
              {
                title: 'Spider Assistant Plugin',
                path: '/en/guide/plugin/plugin-spider-assistant',
              },
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
        path: '/en/principle/',
        collapsable: false,
        children: [
          {
            title: 'Introduction',
            path: '/en/principle/introduction',
          },
          {
            title: 'Architecture',
            path: '/en/principle/architecture/',
          },
          {
            title: 'Node',
            path: '/en/principle/node/',
            children: [
              {
                title: 'Master Node',
                path: '/en/principle/node/master-node',
              },
              {
                title: 'Worker Node',
                path: '/en/principle/node/worker-node',
              },
              {
                title: 'Node Communication',
                path: '/en/principle/node/node-communication',
              },
            ]
          },
          {
            title: 'Database',
            path: '/en/principle/database/',
            children: [
              {
                title: 'MongoDB',
                path: '/en/principle/database/mongodb',
              },
            ],
          },
          {
            title: 'File System',
            path: '/en/principle/filesystem/',
            children: [
              {
                title: 'SeaweedFS',
                path: '/en/principle/filesystem/seaweedfs',
              },
            ]
          },
          // TODO: implement
          // {
          //   title: 'Core Modules',
          //   path: '/en/principle/core-modules/',
          //   children: [
          //     {
          //       title: 'Spider',
          //       path: '/en/principle/core-modules/spider/',
          //     },
          //     {
          //       title: 'Task',
          //       path: '/en/principle/core-modules/task/',
          //     },
          //     {
          //       title: 'Schedule',
          //       path: '/en/principle/core-modules/schedule/',
          //     },
          //   ]
          // },
        ],
      },
      {
        title: 'API Doc',
        path: '/en/api/',
        children: [
          {
            title: 'Introduction',
            path: '/en/api/introduction',
          },
          {
            title: 'API Reference',
            path: '/en/api/api-reference',
          }
        ]
      },
      {
        title: 'Pro Edition',
        path: '/en/pro/',
        children: [
          {
            title: 'Introduction',
            path: '/en/pro/introduction',
          },
          {
            title: 'Installation',
            path: '/en/pro/installation',
          },
          {
            title: 'License',
            path: '/en/pro/license',
          },
        ],
      },
      {
        title: 'Migration',
        path: '/en/migration/',
        children: [
          {
            title: 'Migrate to v0.6',
            path: '/en/migration/v0.6',
          },
        ],
      },
      // TODO: implement
      // {
      //   title: 'FAQ',
      //   path: '/en/faq/',
      // },
      // TODO: implement
      // {
      //   title: 'Develop',
      //   path: '/en/develop/',
      //   children: [
      //     {
      //       title: 'Introduction',
      //       path: '/en/develop/introduction',
      //     },
      //     {
      //       title: 'Plugins',
      //       path: '/en/develop/plugins/',
      //     }
      //   ]
      // }
    ]
  }
}
