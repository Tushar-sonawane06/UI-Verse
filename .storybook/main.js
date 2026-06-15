/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  stories: ['../stories/**/*.stories.@(js|mjs|ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: [
    { from: '../Animation-Library', to: '/Animation-Library' },
    { from: '../components', to: '/components' },
    { from: '../css', to: '/css' },
    { from: '../generated-images', to: '/generated-images' },
    { from: '../js', to: '/js' },
    { from: '../dist', to: '/dist' },
  ],
  docs: {
    autodocs: 'tag',
  },
};

export default config;
