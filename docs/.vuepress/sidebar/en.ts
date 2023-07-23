import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar([
  {
    text: "Guide",
    icon: "creative",
    prefix: "/en/guide/",
    collapsible: true,
    children: [
      {
        text: "Introduction",
        icon: "info",
        link: "README.md",
      },
      {
        text: "Quick Start",
        icon: "light",
        link: "quick-start",
      },
      {
        text: "Installation",
        icon: "operate",
        prefix: "installation/",
        collapsible: true,
        children: [
          {
            text: "Overview",
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
          //   text: 'Direct Deploy',
          //   link: 'installation/direct-deploy',
          // },
        ],
      },
      {
        text: "Basic Tutorial",
        icon: "flow",
        link: "basic-tutorial/",
      },
      {
        text: "Node",
        icon: "map",
        link: "node/",
      },
      {
        text: "Project",
        icon: "ability",
        link: "project/",
      },
      {
        text: "Spider",
        prefix: "spider/",
        icon: "debug",
        collapsible: true,
        children: [
          {
            text: "Overview",
            icon: "info",
            link: "README.md",
          },
          {
            text: "File Editor",
            icon: "template",
            link: "file-editor",
          },
          {
            text: "Data Integration",
            icon: "class",
            link: "integration",
          },
          {
            text: "Git Integration",
            icon: "git",
            link: "git",
          },
          {
            text: "Selenium Spider Integration",
            icon: "keyboard",
            link: "selenium",
          },
        ],
      },
      {
        text: "Schedule",
        icon: "time",
        link: "schedule/",
      },
      {
        text: "Task",
        icon: "list",
        link: "task",
      },
      {
        text: "User",
        icon: "people",
        link: "user/",
      },
      // {
      //   text: 'Token',
      //   link: 'token',
      // },
      {
        text: "Dependencies",
        icon: "stack",
        link: "deps/",
      },
      {
        text: "Data Sources",
        icon: "mysql",
        link: "data-sources/",
      },
      {
        text: "Notifications",
        icon: "notice",
        link: "notifications/",
      },
      {
        text: "Monitoring",
        icon: "process",
        link: "monitoring/",
      },
      {
        text: "Permissions",
        icon: "group",
        link: "permissions/",
      },
      {
        text: "Environment",
        icon: "object",
        link: "environment/",
      },
      // {
      //   text: 'Plugin',
      //   prefix: 'plugin/',
      //   collapsible: true,
      //   children: [
      //     {
      //       text: 'Spider Assistant Plugin',
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
    text: "Principle",
    icon: "software",
    prefix: "/en/principle/",
    collapsible: true,
    children: [
      {
        text: "Introduction",
        icon: "info",
        link: "README.md",
      },
      {
        text: "Architecture",
        icon: "back-stage",
        link: "architecture/",
      },
      {
        text: "Node",
        prefix: "node",
        icon: "map",
        collapsible: true,
        children: [
          {
            text: "Overview",
            icon: "info",
            link: "README.md",
          },
          {
            text: "Master Node",
            icon: "remote",
            link: "master-node",
          },
          {
            text: "Worker Node",
            icon: "tree",
            link: "worker-node",
          },
          {
            text: "Node Communication",
            icon: "asynchronous",
            link: "node-communication",
          },
        ],
      },
      {
        text: "Database",
        icon: "storage",
        prefix: "database/",
        collapsible: true,
        children: [
          {
            text: "Overview",
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
        text: "File System",
        prefix: "filesystem/",
        icon: "workingDirectory",
        collapsible: true,
        children: [
          {
            text: "Overview",
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
      //   text: 'Core Modules',
      //   link: '/en/principle/core-modules',
      //   children: [
      //     {
      //       text: 'Spider',
      //       link: '/en/principle/core-modules/spider',
      //     },
      //     {
      //       text: 'Task',
      //       link: '/en/principle/core-modules/task',
      //     },
      //     {
      //       text: 'Schedule',
      //       link: '/en/principle/core-modules/schedule',
      //     },
      //   ]
      // },
    ],
  },
  {
    text: "API Doc",
    icon: "api",
    prefix: "/en/api/",
    collapsible: true,
    children: [
      {
        text: "Introduction",
        icon: "info",
        link: "README.md",
      },
      {
        text: "API Reference",
        icon: "structure",
        link: "api-reference",
      },
    ],
  },
  {
    text: "Pro Edition",
    icon: "ability",
    prefix: "/en/pro/",
    collapsible: true,
    children: [
      {
        text: "Introduction",
        icon: "info",
        link: "README.md",
      },
      {
        text: "Installation",
        icon: "install",
        link: "installation",
      },
      {
        text: "License",
        icon: "license",
        link: "license",
      },
    ],
  },
  {
    text: "Migration",
    icon: "navigation",
    prefix: "/en/migration/",
    collapsible: true,
    children: [
      {
        text: "Introduction",
        icon: "info",
        link: "README.md",
      },
      {
        text: "Migrate to v0.6",
        icon: "line",
        link: "v0.6",
      },
    ],
  },
  // TODO: implement
  // {
  //   text: 'FAQ',
  //   link: '/en/faq',
  // },
  // TODO: implement
  // {
  //   text: 'Develop',
  //   link: '/en/develop',
  //   children: [
  //     {
  //       text: 'Introduction',
  //       link: '/en/develop/introduction',
  //     },
  //     {
  //       text: 'Plugins',
  //       link: '/en/develop/plugins',
  //     }
  //   ]
  // }
]);
