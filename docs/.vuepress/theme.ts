import { hopeTheme, navbar } from 'vuepress-theme-hope';
import { enSidebar } from './sidebar/en.js';
import { zhSidebar } from './sidebar/zh.js';

export default hopeTheme({
  hostname: 'https://docs.crawlab.cn',
  author: {
    name: 'Marvin Zhang',
  },
  favicon: '/favicon.ico',
  logo: '/logo-main.svg',
  repo: 'crawlab-team/crawlab-docs',
  docsDir: 'docs',

  footer: `\
<div style="display: flex;align-items: center">
  <span style="margin-right:16px">渝ICP备2021011872号-1</span>
  <a
    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011202503421"
    target="_blank"
    style="display:flex;align-items:center;color:#383a42"
  >
    <img style="height:14px;margin-right:3px;font-size:12px" src="/assets/images/beian-logo.png">渝公网安备 50011202503421号
  </a>
</div>
`,
  copyright: '2019-2023 © Crawlab.cn All rights reserved',

  pageInfo: ['Category', 'Tag'],

  displayFooter: true,

  darkmode: 'toggle',

  iconAssets: 'fontawesome-with-brands',
  // iconAssets: 'https://kit.fontawesome.com/3b22754081.js',

  locales: {
    '/en/': {
      navbar: navbar([
        { text: 'Guide', icon: 'lightbulb', link: '/en/guide/' },
        {
          text: 'Official Site',
          icon: 'home',
          link: 'https://www.crawlab.cn/en/',
        },
        { text: 'Purchase', icon: 'shopping-cart', link: 'https://www.crawlab.cn/en/#pricing' },
        { text: 'Demo', icon: 'play-circle', link: 'https://demo.crawlab.cn' },
        { text: 'AI', icon: 'robot', link: '/en/ai' },
        {
          text: 'Older Versions',
          icon: 'tag',
          children: [{ text: 'v0.5.x', link: 'https://docs-v05.crawlab.cn' }],
        },
      ]),
      sidebar: enSidebar,
    },
    '/zh/': {
      navbar: navbar([
        { text: '指南', icon: 'lightbulb', link: '/zh/guide/' },
        { text: '官网', icon: 'home', link: 'https://www.crawlab.cn' },
        { text: '购买', icon: 'shopping-cart', link: 'https://www.crawlab.cn/zh/#pricing' },
        { text: '演示', icon: 'play-circle', link: 'https://demo.crawlab.cn' },
        { text: 'AI', icon: 'robot', link: '/zh/ai/' },
        {
          text: '历史版本',
          icon: 'tag',
          children: [{ text: 'v0.5.x', link: 'https://docs-v05.crawlab.cn' }],
        },
      ]),
      sidebar: zhSidebar,
    },
  },

  plugins: {
    mdEnhance: {
      mermaid: true,
    },
  },
});
