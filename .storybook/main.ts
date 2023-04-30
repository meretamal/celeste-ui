import type { StorybookViteConfig } from '@storybook/builder-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

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
    const viteConfig = defineConfig({
      resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, '/src') }],
      },
      plugins: [vue(), vueJsx()],
    });
    return mergeConfig(config, viteConfig);
  },
  features: {
    storyStoreV7: true,
  },
};

export default config;
