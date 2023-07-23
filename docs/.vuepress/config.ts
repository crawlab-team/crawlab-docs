import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import {defineUserConfig} from "vuepress";
import {redirectPlugin} from "vuepress-plugin-redirect";
import {addCustomElement} from "vuepress-shared";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "",
      description:
        "Documentation for distributed web crawler management platform Crawlab",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "",
      description:
        "Documentation for distributed web crawler management platform",
    },
  },

  head: [
    [
      "meta",
      {name: "default-lang", content: process.env.CRAWLAB_LANG || "zh"},
    ],
    ["script", {src: "/assets/js/umeng.js"}],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-1YYCQBYL6M",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-G9445D9CW9');`,
    ],
    [
      "script",
      {},
      `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "e3a7lpontr");`,
    ],
  ],

  extendsBundlerOptions: (bundlerOptions, app) => {
    addCustomElement(bundlerOptions, app, "rapi-doc");
  },

  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: "docs/.vuepress/components",
    }),
    redirectPlugin(),
  ],
});
