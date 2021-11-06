module.exports = {
  locale: {
    lang: 'zh-CN',
    title: 'Crawlab 文档',
    description: 'Documentation for distributed web crawler management platform',
  },
  themeConfig: {
    selectText: '选择语言',
    label: '简体中文',
    ariaLabel: '选择语言',
    editLinkText: '在 GitHub 上编辑此页',
    serviceWorker: {
      updatePopup: {
        message: '发现新内容可用.',
        buttonText: '刷新'
      }
    },
    algolia: {},
    nav: [
      // { text: '嵌套', link: '/zh/nested/' }
    ],
    sidebar: [
      {
        title: '简介',
        path: '/zh/',
      },
      {
        title: '安装',
        path: '/zh/installation',
      },
    ]
  },
}
