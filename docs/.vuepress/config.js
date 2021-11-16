const en = require('./locales/en')
const zh = require('./locales/zh')

module.exports = {
  locales: {
    '/en/': en.locale,
    '/zh/': zh.locale,
  },
  sidebarDepth: 2,
  themeConfig: {
    logo: '/assets/img/logo.svg',
    smoothScroll: true,
    locales: {
      '/en/': en.themeConfig,
      '/zh/': zh.themeConfig,
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'default-lang', content: process.env.CRAWLAB_LANG || 'zh' }],
    ['script', { src: '/assets/js/umeng.js' }]
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
