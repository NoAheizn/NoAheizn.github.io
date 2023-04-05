// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NoAheizn',
  tagline: 'Izuna is bot',
  favicon: 'img/ipixel.ico',

  // Set the production url of your site here
  url: 'https://noaheizn.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Nah-blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'noaheizn', // Usually your GitHub org/user name.
  projectName: 'nah-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'izuna-blog',
        routeBasePath: 'izuna',
        path: './izuna',
        showReadingTime: true,
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '포스트 목록',
        blogPostComponent: '@theme/BlogPostPage',
        blogTitle: 'Izuna\'s Blog',
        feedOptions: {
          language: 'kr',
          type: 'all',
          copyright:
            `Copyright © ${new Date().getFullYear()} NoAheizn, written by Izuna`,
        },
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'noa-blog',
        routeBasePath: 'noa',
        path: './noa',
        showReadingTime: true,
        blogSidebarCount: 'ALL',
        blogSidebarTitle: '포스트 목록',
        blogPostComponent: '@theme/BlogPostPage',
        blogTitle: 'NoA\'s Blog',
        feedOptions: {
          language: 'kr',
          type: 'all',
          copyright:
            `Copyright © ${new Date().getFullYear()} NoAheizn, written by Izuna`,
        },
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'idoc',
        path: './idoc',
        routeBasePath: 'idoc',
        sidebarPath: require.resolve('./sidebars.js'),
        docItemComponent: '@theme/DocItem',
        docLayoutComponent: '@theme/DocPage',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: { customCss: require.resolve('./src/css/custom.css') },
        docs: {
          id: 'docs',
          path: 'docs',
          routeBasePath: 'docs',
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Nah',
        hideOnScroll: true,
        logo: {
          alt: 'Nah Logo',
          src: 'img/ipixel.png',
          srcDark: 'img/ipixel.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'idoc',
            label: 'Idoc',
            docsPluginId: 'idoc',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            label: 'Docs',
            docsPluginId: 'docs',
            position: 'left',
          },
          {
            label: 'Blogs', position: 'left', type: 'dropdown', items: [
              { to: '/noa', label: 'NoA\'s Blog' },
              { to: '/izuna', label: 'Izuna\'s Blog' },
            ]
          },
          {
            href: 'https://github.com/NoAheizn/Nah-blog/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} NoAheizn, written by Izuna`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
