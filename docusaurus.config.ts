import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {contactMeData} from './src/data/constants'


const config: Config = {
  title: 'Lucas Cruz',
  favicon: 'img/favicon/favicon.ico',

  // Set the production url of your site here
  url: 'https://lucas-cruz.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cruz-lucas', // Usually your GitHub org/user name.
  projectName: 'cruz-lucas.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-MS3FF7B6JV',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-57WJMXBB',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Lucas Cruz',
      logo: {
        alt: 'Site Logo',
        src: 'img/favicon/favicon-32x32.png',
        srcDark: 'img/favicon/dark-favicon-32x32.png',
        target: '_self',
        width: 32,
        height: 32,
        className: 'custom-navbar-logo-class',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Wiki',
          position: 'left',
          to: 'wiki',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'RLSidebar',
              label: 'Reinforcement Learning',
            },
            {
              type: 'docSidebar',
              sidebarId: 'MLSidebar',
              label: 'Machine Learning',
            },
            {
              type: 'docSidebar',
              sidebarId: 'StatsSidebar',
              label: 'Statistics',
            },
          ],
        },
        // {
        //   type: 'docSidebar', 
        //   label: 'Research',
        //   sidebarId: 'ResearchSidebar',
        //   // position: 'left',
        // },
        // {
        //   to: '/about', 
        //   label: 'About',
        //   position: 'right',
        // },
        {
          to: '/cv', 
          label: 'Curriculum Vitae',
          position: 'right',
        },
        {
          href: "https://github.com/cruz-lucas",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            // {
            //   label: 'About',
            //   to: '/about'
            // },
            // {
            //   label: 'Projects',
            //   to: '/about/projects',
            // },
            {
              label: 'Curriculum Vitae',
              to: '/cv',
            },
          ],
        },
        {
          title: 'Reinforcement Learning',
          items: [
            {
              label: 'Intro to RL',
              to: '/rl',
            },
            // {
            //   label: 'Foundations of Deep RL',
            //   to: '/drl',
            // },
          ],
        },
        {
          title: 'Machine Learning',
          items: [
            {
              label: 'Designing Machine Learning Systems',
              to: '/ml-systems',
            },
          ],
        },
        {
          title: 'Statistics',
          items: [
            {
              label: 'Basic Statistical Concepts',
              to: '/statistics',
            },
            // {
            //   label: 'A Practical Guide to A/B Testing',
            //   to: '/experimentation',
            // },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: contactMeData.github,
              href: contactMeData.githubLink
            },            
            {
              label: contactMeData.twitter,
              href: contactMeData.twitterLink
            },            
            {
              label: contactMeData.linkedin,
              href: contactMeData.linkedinLink
            },            
            // {
            //   label: contactMeData.mail,
            //   to: '/about'
            // },            
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lucas Cruz. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
