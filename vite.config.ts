import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components({
      deep: true,
      dts: true,
      extensions: ['vue'],
      dirs: ['src/*'],
    }),
    AutoImport({
      imports: ['vue', 'vue/macros'],
      dirs: ['./src/composables'],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});

