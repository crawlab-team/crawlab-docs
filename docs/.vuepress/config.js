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
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['meta', {name: 'default-lang', content: process.env.CRAWLAB_LANG || 'zh'}],
    ['script', {src: '/assets/js/umeng.js'}],
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-G9445D9CW9'}],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-G9445D9CW9');`],
//     ['script', {}, `(function(c,l,a,r,i,t,y){
// c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
// t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
// y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
// })(window, document, "clarity", "script", "e3a7lpontr");`],
    ['script', {}, `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "e36ab99a5l");`],
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
