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
        title: 'Introduction',
        path: '/',
      },
      {
        title: 'Installation',
        path: '/installation',
      },
    ]
  }
}
