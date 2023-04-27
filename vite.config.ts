import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, '/src') }],
  },
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: [resolve(__dirname, 'src', 'index.ts')],
      name: 'Celeste',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@emotion/css'],
    },
    sourcemap: true,
  },
});
