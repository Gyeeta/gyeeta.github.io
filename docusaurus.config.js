// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gyeeta',
  tagline: "A Non-Intrusive, Free and 100% Open Source Observability Product for your Infrastructure, Services and Processes",
  url: 'https://gyeeta.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'gyeeta', // GitHub org/user name.
  projectName: 'gyeeta.github.io', // repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/gyeeta.github.io/tree/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/gyeeta.github.io/tree/main/',
	  feedOptions: {
            type: 'rss',
	    title: 'Gyeeta Blog Posts',
	    description: 'A Blog describing planned features, use cases of Gyeeta and monitoring in general',
	    copyright: 'Exact Solutions, Inc.',
	    language: 'en-US',
          }		  
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
      navbar: {
        title: 'Gyeeta',
        logo: {
          alt: 'Gyeeta Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/gyeeta/gyeeta',
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
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github Discussions',
                href: 'https://github.com/orgs/Gyeeta/discussions',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/gyeeta',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gyeeta/gyeeta',
              },
              {
                label: 'Youtube',
                href: 'https://youtube.com/@gyeeta',
              },
            ],
          },
        ],
      logo: {
        alt: 'Gyeeta Logo',
        src: 'img/logo.png',
        width: 72,
        height: 72,
      },	
        copyright: `Copyright © ${new Date().getFullYear()} Exact Solutions, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
