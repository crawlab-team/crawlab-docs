import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar([
  {
    text: '指南',
    prefix: '/zh/guide/',
    icon: 'lightbulb',
    collapsible: true,
    children: [
      {
        text: '介绍',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: '快速开始',
        icon: 'bolt',
        link: 'quick-start',
      },
      {
        text: '安装',
        prefix: 'installation/',
        icon: 'wrench',
        collapsible: true,
        children: [
          {
            text: '概览',
            icon: 'info-circle',
            link: 'README.md',
          },
          {
            text: 'Docker',
            icon: 'ship',
            link: 'docker',
          },
          {
            text: 'Kubernetes',
            icon: 'project-diagram',
            link: 'kubernetes',
          },
        ],
      },
      {
        text: '基础教程',
        icon: 'graduation-cap',
        link: 'basic-tutorial/',
      },
      {
        text: '节点',
        icon: 'share-nodes',
        link: 'node/',
      },
      {
        text: '项目',
        icon: 'list-check',
        link: 'project/',
      },
      {
        text: '爬虫',
        prefix: 'spider/',
        icon: 'spider',
        collapsible: true,
        children: [
          {
            text: '概览',
            icon: 'info-circle',
            link: 'README.md',
          },
          {
            text: '文件编辑',
            icon: 'code',
            link: 'file-editor',
          },
          {
            text: '数据集成',
            icon: 'database',
            link: 'integration',
          },
          {
            text: 'Git 集成',
            icon: 'code-branch',
            link: 'git',
          },
          {
            text: 'Selenium 爬虫集成',
            icon: 'keyboard',
            link: 'selenium',
          },
        ],
      },
      {
        text: '定时任务',
        icon: 'clock',
        link: 'schedule/',
      },
      {
        text: '任务',
        icon: 'list',
        link: 'task/',
      },
      {
        text: '用户',
        icon: 'user',
        link: 'user/',
      },
      // {
      //   text: '令牌',
      //   link: 'token',
      // },
      {
        text: '依赖管理',
        icon: 'cubes',
        link: 'deps/',
      },
      {
        text: '数据源',
        icon: 'database',
        link: 'data-sources/',
      },
      {
        text: '消息通知',
        icon: 'bell',
        link: 'notifications/',
      },
      {
        text: '监控指标',
        icon: 'chart-line',
        link: 'monitoring/',
      },
      {
        text: '权限管理',
        icon: 'user-group',
        link: 'permissions/',
      },
      {
        text: '环境变量',
        icon: 'sliders',
        link: 'environment/',
      },
      {
        text: 'CLI',
        icon: 'terminal',
        link: 'cli/',
      },
    ],
  },
  {
    text: '原理',
    prefix: '/zh/principle/',
    icon: 'object-group',
    collapsible: true,
    children: [
      {
        text: '介绍',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: '架构',
        icon: 'layer-group',
        link: 'architecture/',
      },
      {
        text: '节点',
        prefix: 'node/',
        icon: 'share-nodes',
        collapsible: true,
        children: [
          {
            text: '概览',
            icon: 'info-circle',
            link: 'README.md',
          },
          {
            text: '主节点',
            icon: 'sitemap',
            link: 'master-node',
          },
          {
            text: '工作节点',
            icon: 'microchip',
            link: 'worker-node',
          },
          {
            text: '节点通信',
            icon: 'satellite-dish',
            link: 'node-communication',
          },
        ],
      },
      {
        text: '数据库',
        prefix: 'database/',
        icon: 'database',
        collapsible: true,
        children: [
          {
            text: '概览',
            icon: 'info-circle',
            link: 'README.md',
          },
          {
            text: 'MongoDB',
            icon: 'file-lines',
            link: 'mongodb',
          },
        ],
      },
      {
        text: '文件系统',
        prefix: 'filesystem/',
        icon: 'floppy-disk',
        collapsible: true,
        children: [
          {
            text: '概览',
            icon: 'info-circle',
            link: 'README.md',
          },
          {
            text: 'SeaweedFS',
            icon: 'file',
            link: 'seaweedfs',
          },
        ],
      },
    ],
  },
  {
    text: '专业版',
    icon: 'trophy',
    prefix: '/zh/pro/',
    collapsible: true,
    children: [
      {
        text: '介绍',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: '安装',
        icon: 'wrench',
        link: 'installation',
      },
      {
        text: '许可证',
        icon: 'id-card',
        link: 'license',
      },
    ],
  },
  {
    text: '人工智能 (Crawlab AI)',
    prefix: '/zh/ai/',
    icon: 'robot',
    collapsible: true,
    children: [
      {
        text: '介绍',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: 'SDK',
        icon: 'code',
        link: 'sdk',
      },
      {
        text: '许可证',
        icon: 'id-card',
        link: 'license',
      },
      {
        text: 'API 令牌',
        icon: 'key',
        link: 'api-token',
      },
    ],
  },
  {
    text: 'API 文档',
    icon: 'server',
    prefix: '/zh/api/',
    collapsible: true,
    children: [
      {
        text: '介绍',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: 'API 参考文档',
        icon: 'book',
        link: 'api-reference',
      },
    ],
  },
  {
    text: '旧版本迁移',
    icon: 'circle-up',
    prefix: '/zh/migration/',
    collapsible: true,
    children: [
      {
        text: '介绍',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: '迁移至 v0.6',
        icon: 'circle-up',
        link: 'v0.6',
      },
    ],
  },
  {
    text: 'FAQ',
    icon: 'question-circle',
    link: '/zh/faq',
  },
]);
