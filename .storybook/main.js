const { loadConfigFromFile, mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(previousConfig) {
    const { config } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'));
    return mergeConfig(previousConfig, {
      ...config,
    });
  },
};
