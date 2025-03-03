import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';
import { createApiPageMD } from 'docusaurus-plugin-openapi-docs/lib/markdown';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const API_REF_PRO_PATH_REGEX_PATTERNS = [
  /^\/dependencies/,
  /^\/notifications/,
  /^\/gits/,
  /^\/databases/,
  /^\/roles/,
  /^\/settings/,
  /\/metrics/,
];

const config: Config = {
  title: 'Crawlab Docs',
  tagline: 'Documentation for distributed web crawler management platform Crawlab',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.crawlab.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  staticDirectories: ['static'],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '中文',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    image: 'logo-main.svg',
    navbar: {
      title: '',
      logo: {
        alt: 'Crawlab',
        src: 'logo-main.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'examplesSidebar',
          position: 'left',
          label: 'Examples',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/crawlab-team/crawlab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/',
            },
            {
              label: 'Getting Started',
              to: '/docs/category/getting-started/',
            },
            {
              label: 'Guides',
              to: '/docs/category/guides/',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/crawlab-team/crawlab',
            },
          ],
        },
      ],
      copyright: `Copyright © 2019-${new Date().getFullYear()} Crawlab Team. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'crawlab-api',
        docsPluginId: 'docusaurus-plugin-content-docs',
        config: {
          crawlab: {
            specPath: 'openapi.yaml',
            outputDir: 'docs/api-ref',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
            markdownGenerators: {
              createApiPageMD: (pageData) => {
                // 1. 获取默认的 Markdown 内容 (假设插件内部导出了默认函数)
                const defaultMarkdown = createApiPageMD(pageData); // 路径和方法名需要根据实际情况调整

                if (API_REF_PRO_PATH_REGEX_PATTERNS.every(regex => !pageData.api.path.match(regex))) {
                  return defaultMarkdown;
                }

                // 2. 添加自定义内容 (例如，在页面顶部添加一段自定义文本)
                const customContent = `:::info\nThis API is only available in **Crawlab Pro**.\n:::\n\n`;
                const modifiedMarkdown = customContent + defaultMarkdown; // 将自定义内容添加到默认内容之前

                // 3. 返回修改后的 Markdown 字符串
                return modifiedMarkdown;
                // if (API_REF_PRO_IDS.includes(id)) {
                //   return `:::info\nThis API is only available in **Crawlab Pro**.\n:::`;
                // }
                // return '';
              },
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
};

export default config;
