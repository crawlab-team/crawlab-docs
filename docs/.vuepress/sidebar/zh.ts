import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar([
  {
    text: "指南",
    icon: "creative",
    prefix: "/zh/guide/",
    collapsible: true,
    children: [
      {
        text: "介绍",
        icon: "info",
        link: "README.md",
      },
      {
        text: "快速开始",
        icon: "light",
        link: "quick-start",
      },
      {
        text: "安装",
        icon: "operate",
        prefix: "installation/",
        collapsible: true,
        children: [
          {
            text: "概览",
            icon: "info",
            link: "README.md",
          },
          {
            text: "Docker",
            icon: "app",
            link: "docker",
          },
          // TODO: implement
          // {
          //   text: 'Kubernetes',
          //   link: 'installation/kubernetes',
          // },
          // {
          //   text: '直接部署',
          //   link: 'installation/direct-deploy',
          // },
        ],
      },
      {
        text: "基础教程",
        icon: "flow",
        link: "basic-tutorial/",
      },
      {
        text: "节点",
        icon: "map",
        link: "node/",
      },
      {
        text: "项目",
        icon: "ability",
        link: "project/",
      },
      {
        text: "爬虫",
        icon: "debug",
        prefix: "spider/",
        collapsible: true,
        children: [
          {
            text: "概览",
            icon: "info",
            link: "README.md",
          },
          {
            text: "文件编辑",
            icon: "template",
            link: "file-editor",
          },
          {
            text: "数据集成",
            icon: "class",
            link: "integration",
          },
          {
            text: "Git 集成",
            icon: "git",
            link: "git",
          },
          {
            text: "Selenium 爬虫集成",
            icon: "keyboard",
            link: "selenium",
          },
        ],
      },
      {
        text: "定时任务",
        icon: "time",
        link: "schedule/",
      },
      {
        text: "任务",
        icon: "list",
        link: "task/",
      },
      {
        text: "用户",
        icon: "people",
        link: "user/",
      },
      // {
      //   text: '令牌',
      //   link: 'token',
      // },
      {
        text: "依赖管理",
        icon: "stack",
        link: "deps/",
      },
      {
        text: "数据源",
        icon: "mysql",
        link: "data-sources/",
      },
      {
        text: "消息通知",
        icon: "notice",
        link: "notifications/",
      },
      {
        text: "监控指标",
        icon: "process",
        link: "monitoring/",
      },
      {
        text: "权限管理",
        icon: "group",
        link: "permissions/",
      },
      {
        text: "环境变量",
        icon: "object",
        link: "environment/",
      },
      // {
      //   text: '插件',
      //   prefix: 'plugin',
      //   collapsible: true,
      //   children: [
      //     {
      //       text: '爬虫助手插件',
      //       link: 'plugin-spider-assistant',
      //     },
      //   ]
      // },
      {
        text: "CLI",
        icon: "shell",
        link: "cli/",
      },
    ],
  },
  {
    text: "原理",
    icon: "software",
    prefix: "/zh/principle/",
    collapsible: true,
    children: [
      {
        text: "介绍",
        icon: "info",
        link: "README.md",
      },
      {
        text: "架构",
        icon: "back-stage",
        link: "architecture/",
      },
      {
        text: "节点",
        prefix: "node/",
        collapsible: true,
        children: [
          {
            text: "概览",
            icon: "info",
            link: "README.md",
          },
          {
            text: "主节点",
            icon: "remote",
            link: "master-node",
          },
          {
            text: "工作节点",
            icon: "tree",
            link: "worker-node",
          },
          {
            text: "节点通信",
            icon: "asynchronous",
            link: "node-communication",
          },
        ],
      },
      {
        text: "数据库",
        icon: "storage",
        prefix: "database/",
        collapsible: true,
        children: [
          {
            text: "概览",
            icon: "info",
            link: "README.md",
          },
          {
            text: "MongoDB",
            icon: "object",
            link: "mongodb",
          },
        ],
      },
      {
        text: "文件系统",
        prefix: "filesystem/",
        icon: "workingDirectory",
        collapsible: true,
        children: [
          {
            text: "概览",
            icon: "info",
            link: "README.md",
          },
          {
            text: "SeaweedFS",
            icon: "file",
            link: "seaweedfs",
          },
        ],
      },
      // TODO: implement
      // {
      //   text: '核心模块',
      //   link: '/zh/principle/core-modules',
      //   children: [
      //     {
      //       text: '爬虫',
      //       link: '/zh/principle/core-modules/spider',
      //     },
      //     {
      //       text: '任务',
      //       link: '/zh/principle/core-modules/task',
      //     },
      //     {
      //       text: '定时任务',
      //       link: '/zh/principle/core-modules/schedule',
      //     },
      //   ]
      // },
    ],
  },
  {
    text: "API 文档",
    icon: "api",
    prefix: "/zh/api/",
    collapsible: true,
    children: [
      {
        text: "介绍",
        icon: "info",
        link: "README.md",
      },
      {
        text: "API 参考文档",
        icon: "structure",
        link: "api-reference",
      },
    ],
  },
  {
    text: "专业版",
    icon: "ability",
    prefix: "/zh/pro/",
    collapsible: true,
    children: [
      {
        text: "介绍",
        icon: "info",
        link: "README.md",
      },
      {
        text: "安装",
        icon: "install",
        link: "installation",
      },
      {
        text: "许可证",
        icon: "license",
        link: "license",
      },
    ],
  },
  {
    text: "旧版本迁移",
    icon: "navigation",
    prefix: "/zh/migration/",
    collapsible: true,
    children: [
      {
        text: "介绍",
        icon: "info",
        link: "README.md",
      },
      {
        text: "迁移至 v0.6",
        icon: "line",
        link: "v0.6",
      },
    ],
  },
  // TODO: implement
  // {
  //   text: 'FAQ',
  //   link: '/zh/faq',
  // },
  // TODO: implement
  // {
  //   text: '开发',
  //   link: '/zh/develop',
  //   collapsible: false,
  //   initialOpenGroupIndex: 1,
  //   children: [
  //     {
  //       text: '介绍',
  //       link: '/zh/develop/introduction',
  //     },
  //     {
  //       text: '插件',
  //       link: '/zh/develop/plugins',
  //     }
  //   ]
  // }
]);
