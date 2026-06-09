import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar([
  {
    text: 'Guide',
    prefix: '/en/guide/',
    icon: 'lightbulb',
    collapsible: true,
    children: [
      {
        text: 'Introduction',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: 'Quick Start',
        icon: 'bolt',
        link: 'quick-start',
      },
      {
        text: 'Installation',
        prefix: 'installation/',
        icon: 'wrench',
        collapsible: true,
        children: [
          {
            text: 'Overview',
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
        text: 'Basic Tutorial',
        icon: 'graduation-cap',
        link: 'basic-tutorial/',
      },
      {
        text: 'Node',
        icon: 'share-nodes',
        link: 'node/',
      },
      {
        text: 'Project',
        icon: 'list-check',
        link: 'project/',
      },
      {
        text: 'Spider',
        prefix: 'spider/',
        icon: 'spider',
        collapsible: true,
        children: [
          {
            text: 'Overview',
            icon: 'info-circle',
            link: 'README.md',
          },
          {
            text: 'File Editor',
            icon: 'code',
            link: 'file-editor',
          },
          {
            text: 'Data Integration',
            icon: 'database',
            link: 'integration',
          },
          {
            text: 'Git Integration',
            icon: 'code-branch',
            link: 'git',
          },
          {
            text: 'Selenium Spider Integration',
            icon: 'keyboard',
            link: 'selenium',
          },
        ],
      },
      {
        text: 'Schedule',
        icon: 'clock',
        link: 'schedule/',
      },
      {
        text: 'Task',
        icon: 'list',
        link: 'task',
      },
      {
        text: 'User',
        icon: 'user',
        link: 'user/',
      },
      // {
      //   text: 'Token',
      //   link: 'token',
      // },
      {
        text: 'Dependencies',
        icon: 'cubes',
        link: 'deps/',
      },
      {
        text: 'Data Sources',
        icon: 'database',
        link: 'data-sources/',
      },
      {
        text: 'Notifications',
        icon: 'bell',
        link: 'notifications/',
      },
      {
        text: 'Monitoring',
        icon: 'chart-line',
        link: 'monitoring/',
      },
      {
        text: 'Permissions',
        icon: 'user-group',
        link: 'permissions/',
      },
      {
        text: 'Environment',
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
    text: 'Principle',
    prefix: '/en/principle/',
    icon: 'object-group',
    collapsible: true,
    children: [
      {
        text: 'Introduction',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: 'Architecture',
        icon: 'layer-group',
        link: 'architecture/',
      },
      {
        text: 'Node',
        prefix: 'node',
        icon: 'share-nodes',
        collapsible: true,
        children: [
          {
            text: 'Overview',
            icon: 'info-circle',
            link: 'README.md',
          },
          {
            text: 'Master Node',
            icon: 'sitemap',
            link: 'master-node',
          },
          {
            text: 'Worker Node',
            icon: 'microchip',
            link: 'worker-node',
          },
          {
            text: 'Node Communication',
            icon: 'satellite-dish',
            link: 'node-communication',
          },
        ],
      },
      {
        text: 'Database',
        prefix: 'database/',
        icon: 'database',
        collapsible: true,
        children: [
          {
            text: 'Overview',
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
        text: 'File System',
        prefix: 'filesystem/',
        icon: 'floppy-disk',
        collapsible: true,
        children: [
          {
            text: 'Overview',
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
    text: 'Pro Edition',
    icon: 'trophy',
    prefix: '/en/pro/',
    collapsible: true,
    children: [
      {
        text: 'Introduction',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: 'Installation',
        icon: 'wrench',
        link: 'installation',
      },
      {
        text: 'License',
        icon: 'id-card',
        link: 'license',
      },
    ],
  },
  {
    text: 'Crawlab AI',
    prefix: '/en/ai/',
    icon: 'robot',
    collapsible: true,
    children: [
      {
        text: 'Introduction',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: 'SDK',
        icon: 'code',
        link: 'sdk',
      },
      {
        text: 'License',
        icon: 'id-card',
        link: 'license',
      },
      {
        text: 'API Token',
        icon: 'key',
        link: 'api-token',
      },
    ],
  },
  {
    text: 'API Doc',
    icon: 'server',
    prefix: '/en/api/',
    collapsible: true,
    children: [
      {
        text: 'Introduction',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: 'API Reference',
        icon: 'book',
        link: 'api-reference',
      },
    ],
  },
  {
    text: 'Migration',
    icon: 'circle-up',
    prefix: '/en/migration/',
    collapsible: true,
    children: [
      {
        text: 'Introduction',
        icon: 'info-circle',
        link: 'README.md',
      },
      {
        text: 'Migrate to v0.6',
        icon: 'circle-up',
        link: 'v0.6',
      },
    ],
  },
  {
    text: 'FAQ',
    icon: 'question-circle',
    link: '/en/faq',
  },
]);
