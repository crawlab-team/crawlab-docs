module.exports = {
  locale: {
    lang: 'en-US',
    title: 'Crawlab Documentation',
    description: 'Documentation for distributed web crawler management platform',
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
        path: '/guide',
        collapsable: false,
        initialOpenGroupIndex: 1,
        children: [
          {
            title: 'Introduction',
            path: '/guide/introduction',
          },
          {
            title: 'Quick Start',
            path: '/guide/quick-start',
          },
          {
            title: 'Installation',
            path: '/guide/installation/',
            collapsable: false,
            children: [
              {
                title: 'Docker',
                path: '/guide/installation/docker',
              },
              {
                title: 'Kubernetes',
                path: '/guide/installation/kubernetes',
              },
              {
                title: 'Direct Deploy',
                path: '/guide/installation/direct-deploy',
              },
            ]
          },
          {
            title: 'Use Crawlab',
            path: '/guide/use-crawlab/',
            collapsable: false,
            children: [
              {
                title: 'Quick Tutorial',
                path: '/guide/use-crawlab/quick-tutorial',
              },
              {
                title: 'Basic Concepts',
                path: '/guide/use-crawlab/basic-concepts/',
                children: [
                  {
                    title: 'Node',
                    path: '/guide/use-crawlab/basic-concepts/node',
                  },
                  {
                    title: 'Project',
                    path: '/guide/use-crawlab/basic-concepts/project',
                  },
                  {
                    title: 'Spider',
                    path: '/guide/use-crawlab/basic-concepts/spider',
                  },
                  {
                    title: 'Task',
                    path: '/guide/use-crawlab/basic-concepts/task',
                  },
                  {
                    title: 'Schedule',
                    path: '/guide/use-crawlab/basic-concepts/schedule',
                  },
                  {
                    title: 'User',
                    path: '/guide/use-crawlab/basic-concepts/user',
                  },
                  {
                    title: 'Plugin',
                    path: '/guide/use-crawlab/basic-concepts/plugin',
                  },
                  {
                    title: 'Others',
                    path: '/guide/use-crawlab/basic-concepts/others',
                  },
                ]
              },
            ]
          }
        ]
      },
    ]
  }
}
