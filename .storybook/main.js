/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  stories: ['../stories/**/*.stories.@(js|mjs|ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: [
    '../Animation-Library',
    '../components',
    '../css',
    '../generated-images',
    '../js',
  ],
  docs: {
    autodocs: 'tag',
  },
};

export default config;
