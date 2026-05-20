import { defineConfig } from 'vitepress';
import { generateSidebar } from './sidebar-generator.js';

export default defineConfig({
  title: 'UI-Verse',
  description: 'Open-source UI Component Library',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Documentation', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/uiverse/uiverse' }
    ],
    sidebar: generateSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/uiverse/uiverse' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 UI-Verse'
    }
  },
  markdown: {
    lineNumbers: true
  }
});