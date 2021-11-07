const en = require('./locales/en')
const zh = require('./locales/zh')

module.exports = {
  locales: {
    '/': en.locale,
    '/zh/': zh.locale,
  },
  themeConfig: {
    locales: {
      '/': en.themeConfig,
      '/zh/': zh.themeConfig,
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    '@vuepress/active-header-links',
    [
      'md-enhance',
      {
        // Enable flowchart
        flowchart: true,
      },
    ]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-plantuml'))
    },
  },
  extraWatchFiles: [
    '.vuepress/locales/en.js',
    '.vuepress/locales/zh.js',
    '.vuepress/styles/index.styl',
    '.vuepress/styles/palette.styl',
  ]
}
