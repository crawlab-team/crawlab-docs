import {hopeTheme} from 'vuepress-theme-hope';

export default hopeTheme({
  hostname: 'https://docs.crawlab.cn',

  darkmode: 'toggle',

  author: {
    name: 'Marvin Zhang',
  },

  iconAssets: 'iconfont',

  logo: '/logo.svg',

  repo: 'crawlab-team/crawlab-docs',

  docsDir: 'docs',

  pageInfo: ['Category', 'Tag'],

  locales: {
    '/en': {
      sidebar: [
        {
          text: 'Guide',
          icon: 'creative',
          prefix: '/en/guide',
          collapsable: true,
          children: [
            {
              text: 'Introduction',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: 'Quick Start',
              icon: 'light',
              link: 'quick-start',
            },
            {
              text: 'Installation',
              icon: 'operate',
              prefix: 'installation',
              collapsable: true,
              children: [
                {
                  text: 'Overview',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: 'Docker',
                  icon: 'app',
                  link: 'docker',
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
              ]
            },
            {
              text: 'Basic Tutorial',
              icon: 'flow',
              link: 'basic-tutorial/README.md',
            },
            {
              text: 'Node',
              icon: 'map',
              link: 'node/README.md',
            },
            {
              text: 'Project',
              icon: 'ability',
              link: 'project/README.md',
            },
            {
              text: 'Spider',
              prefix: 'spider',
              icon: 'debug',
              collapsable: true,
              children: [
                {
                  text: 'Overview',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: 'File Editor',
                  icon: 'template',
                  link: 'file-editor',
                },
                {
                  text: 'Integration',
                  icon: 'class',
                  link: 'integration',
                },
              ]
            },
            {
              text: 'Schedule',
              icon: 'time',
              link: 'schedule/README.md',
            },
            {
              text: 'Task',
              icon: 'list',
              link: 'task',
            },
            {
              text: 'User',
              icon: 'people',
              link: 'user/README.md',
            },
            // {
            //   text: 'Token',
            //   link: 'token',
            // },
            {
              text: 'Dependencies',
              icon: 'stack',
              link: 'deps/README.md',
            },
            {
              text: 'Notifications',
              icon: 'notice',
              link: 'notifications/README.md',
            },
            {
              text: 'Data Sources',
              icon: 'mysql',
              link: 'data-sources/README.md',
            },
            {
              text: 'Monitoring',
              icon: 'process',
              link: 'monitoring/README.md',
            },
            {
              text: 'Permissions',
              icon: 'group',
              link: 'permissions/README.md',
            },
            // {
            //   text: 'Plugin',
            //   prefix: 'plugin',
            //   collapsable: true,
            //   children: [
            //     {
            //       text: 'Spider Assistant Plugin',
            //       link: 'plugin-spider-assistant',
            //     },
            //   ]
            // },
            {
              text: 'CLI',
              icon: 'shell',
              link: 'cli/README.md',
            }
          ]
        },
        {
          text: 'Principle',
          icon: 'software',
          prefix: '/en/principle',
          collapsable: true,
          children: [
            {
              text: 'Introduction',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: 'Architecture',
              icon: 'back-stage',
              link: 'architecture/README.md',
            },
            {
              text: 'Node',
              prefix: 'node',
              icon: 'map',
              collapsable: true,
              children: [
                {
                  text: 'Overview',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: 'Master Node',
                  icon: 'remote',
                  link: 'master-node',
                },
                {
                  text: 'Worker Node',
                  icon: 'tree',
                  link: 'worker-node',
                },
                {
                  text: 'Node Communication',
                  icon: 'asynchronous',
                  link: 'node-communication',
                },
              ]
            },
            {
              text: 'Database',
              icon: 'storage',
              prefix: 'database',
              collapsable: true,
              children: [
                {
                  text: 'Overview',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: 'MongoDB',
                  icon: 'object',
                  link: 'mongodb',
                },
              ],
            },
            {
              text: 'File System',
              prefix: 'filesystem',
              icon: 'workingDirectory',
              collapsable: true,
              children: [
                {
                  text: 'Overview',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: 'SeaweedFS',
                  icon: 'file',
                  link: 'seaweedfs',
                },
              ]
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
          text: 'API Doc',
          icon: 'api',
          prefix: '/en/api',
          collapsable: true,
          children: [
            {
              text: 'Introduction',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: 'API Reference',
              icon: 'structure',
              link: 'api-reference',
            }
          ]
        },
        {
          text: 'Pro Edition',
          icon: 'ability',
          prefix: '/en/pro',
          collapsable: true,
          children: [
            {
              text: 'Introduction',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: 'Installation',
              icon: 'install',
              link: 'installation',
            },
            {
              text: 'License',
              icon: 'license',
              link: 'license',
            },
          ],
        },
        {
          text: 'Migration',
          icon: 'navigation',
          prefix: '/en/migration',
          collapsable: true,
          children: [
            {
              text: 'Introduction',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: 'Migrate to v0.6',
              icon: 'line',
              link: 'v0.6',
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
      ],
    },
    '/zh': {
      sidebar: [
        {
          text: '指南',
          icon: 'creative',
          prefix: '/zh/guide',
          collapsable: true,
          children: [
            {
              text: '介绍',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: '快速开始',
              icon: 'light',
              link: 'quick-start',
            },
            {
              text: '安装',
              icon: 'operate',
              prefix: 'installation',
              collapsable: true,
              children: [
                {
                  text: '概览',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: 'Docker',
                  icon: 'app',
                  link: 'docker',
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
              ]
            },
            {
              text: '基础教程',
              icon: 'flow',
              link: 'basic-tutorial/README.md',
            },
            {
              text: '节点',
              icon: 'map',
              link: 'node/README.md',
            },
            {
              text: '项目',
              icon: 'ability',
              link: 'project/README.md',
            },
            {
              text: '爬虫',
              icon: 'debug',
              prefix: 'spider',
              collapsable: true,
              children: [
                {
                  text: '概览',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: '文件编辑',
                  icon: 'template',
                  link: 'file-editor',
                },
                {
                  text: '爬虫集成',
                  icon: 'class',
                  link: 'integration',
                },
              ],
            },
            {
              text: '定时任务',
              icon: 'time',
              link: 'schedule/README.md',
            },
            {
              text: '任务',
              icon: 'list',
              link: 'task/README.md',
            },
            {
              text: '用户',
              icon: 'people',
              link: 'user/README.md',
            },
            // {
            //   text: '令牌',
            //   link: 'token',
            // },
            {
              text: '依赖管理',
              icon: 'stack',
              link: 'deps/README.md',
            },
            {
              text: '消息通知',
              icon: 'notice',
              link: 'notifications/README.md',
            },
            {
              text: '数据源',
              icon: 'mysql',
              link: 'data-sources/README.md',
            },
            {
              text: '监控指标',
              icon: 'process',
              link: 'monitoring/README.md',
            },
            {
              text: '权限管理',
              icon: 'group',
              link: 'permissions/README.md',
            },
            // {
            //   text: '插件',
            //   prefix: 'plugin',
            //   collapsable: true,
            //   children: [
            //     {
            //       text: '爬虫助手插件',
            //       link: 'plugin-spider-assistant',
            //     },
            //   ]
            // },
            {
              text: 'CLI',
              icon: 'shell',
              link: 'cli/README.md',
            },
          ]
        },
        {
          text: '原理',
          icon: 'software',
          prefix: '/zh/principle',
          collapsable: true,
          children: [
            {
              text: '介绍',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: '架构',
              icon: 'back-stage',
              link: 'architecture/README.md',
            },
            {
              text: '节点',
              prefix: 'node',
              collapsable: true,
              children: [
                {
                  text: '概览',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: '主节点',
                  icon: 'remote',
                  link: 'master-node',
                },
                {
                  text: '工作节点',
                  icon: 'tree',
                  link: 'worker-node',
                },
                {
                  text: '节点通信',
                  icon: 'asynchronous',
                  link: 'node-communication',
                },
              ]
            },
            {
              text: '数据库',
              icon: 'storage',
              prefix: 'database',
              collapsable: true,
              children: [
                {
                  text: '概览',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: 'MongoDB',
                  icon: 'object',
                  link: 'mongodb',
                },
              ],
            },
            {
              text: '文件系统',
              prefix: 'filesystem',
              icon: 'workingDirectory',
              collapsable: true,
              children: [
                {
                  text: '概览',
                  icon: 'info',
                  link: 'README.md',
                },
                {
                  text: 'SeaweedFS',
                  icon: 'file',
                  link: 'seaweedfs',
                },
              ]
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
          text: 'API 文档',
          icon: 'api',
          prefix: '/zh/api',
          collapsable: true,
          children: [
            {
              text: '介绍',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: 'API 参考文档',
              icon: 'structure',
              link: 'api-reference',
            }
          ]
        },
        {
          text: '专业版',
          icon: 'ability',
          prefix: '/zh/pro',
          collapsable: true,
          children: [
            {
              text: '介绍',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: '安装',
              icon: 'install',
              link: 'installation',
            },
            {
              text: '许可证',
              icon: 'license',
              link: 'license',
            },
          ],
        },
        {
          text: '旧版本迁移',
          icon: 'navigation',
          prefix: '/zh/migration',
          collapsable: true,
          children: [
            {
              text: '介绍',
              icon: 'info',
              link: 'README.md',
            },
            {
              text: '迁移至 v0.6',
              icon: 'line',
              link: 'v0.6',
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
        //   collapsable: false,
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
      ]
    },
  },
});
