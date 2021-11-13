module.exports = {
  locale: {
    lang: 'en-US',
    title: 'Crawlab',
    description: 'Documentation for distributed web crawler management platform Crawlab',
  },
  themeConfig: {
    selectText: 'Languages',
    label: 'English',
    ariaLabel: 'Languages',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh'
      }
    },
    algolia: {},
    nav: [
      // { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/en/guide',
        collapsable: false,
        initialOpenGroupIndex: 1,
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
            ]
          },
        ]
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
