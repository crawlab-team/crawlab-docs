import { hopeTheme, navbar } from "vuepress-theme-hope";
import { enSidebar } from "./sidebar/en.js";
import { zhSidebar } from "./sidebar/zh.js";

export default hopeTheme({
  hostname: "https://docs.crawlab.cn",
  author: {
    name: "Marvin Zhang",
  },
  favicon: "/favicon.ico",
  logo: "/logo.svg",
  repo: "crawlab-team/crawlab-docs",
  docsDir: "docs",

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
  copyright: "2019-2023 © Crawlab.cn All rights reserved",

  pageInfo: ["Category", "Tag"],

  displayFooter: true,

  darkmode: "toggle",
  iconAssets: "iconfont",

  locales: {
    "/en/": {
      navbar: navbar([
        { text: "Guide", icon: "creative", link: "/en/guide/" },
        { text: "Principle", icon: "software", link: "/en/principle/" },
        { text: "API", icon: "api", link: "/en/api/" },
        { text: "Pro Edition", icon: "ability", link: "/en/pro/" },
        { text: "Migration", icon: "navigation", link: "/en/migration/" },
        // {
        //   text: "Official Site",
        //   icon: "home",
        //   link: "https://docs.crawlab.cn/en/",
        // },
        { text: "Demo", icon: "slides", link: "https://demo-pro.crawlab.cn" },
        {
          text: "Older Versions",
          icon: "tag",
          children: [{ text: "v0.5.x", link: "https://docs-v05.crawlab.cn" }],
        },
      ]),
      sidebar: enSidebar,
    },
    "/zh/": {
      navbar: navbar([
        { text: "指南", icon: "creative", link: "/zh/guide/" },
        { text: "原理", icon: "software", link: "/zh/principle/" },
        { text: "API", icon: "api", link: "/zh/api/" },
        { text: "专业版", icon: "ability", link: "/zh/pro/" },
        { text: "旧版本迁移", icon: "navigation", link: "/zh/migration/" },
        // { text: "官网", icon: "home", link: "https://docs.crawlab.cn/zh/" },
        { text: "演示", icon: "slides", link: "https://demo-pro.crawlab.cn" },
        {
          text: "历史版本",
          icon: "tag",
          children: [{ text: "v0.5.x", link: "https://docs-v05.crawlab.cn" }],
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
