import {defineUserConfig} from 'vuepress';
import {} from 'vue';
import MermaidJsPlugin from 'vuepress-plugin-mermaidjs';
import theme from './theme';

export default defineUserConfig({
  base: '/',

  locales: {
    '/en': {
      lang: 'en-US',
      title: 'Crawlab Documentation',
      description: 'Documentation for distributed web crawler management platform Crawlab',
    },
    '/zh': {
      lang: 'zh-CN',
      title: 'Crawlab 中文文档',
      description: 'Documentation for distributed web crawler management platform',
    },
  },
  theme,
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['meta', {name: 'default-lang', content: process.env.CRAWLAB_LANG || 'zh'}],
    ['script', {src: '/assets/js/umeng.js'}],
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-G9445D9CW9'}],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-G9445D9CW9');`],
    ['script', {}, `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "e3a7lpontr");`],
  ],
  plugins: [
    MermaidJsPlugin(),
  ]
});
