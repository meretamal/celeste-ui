import type { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig } from 'vite';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, _options) {
    const viteConfig = await import('../vite.config');
    return mergeConfig(config, viteConfig.default);
  },
  features: {
    storyStoreV7: true,
  },
};

export default config;
