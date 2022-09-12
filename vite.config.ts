import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components({
      deep: true,
      dts: true,

      dirs: ['src/*'],
    }),
    AutoImport({
      imports: ['vue', 'vue/macros', '@vueuse/core'],
      dirs: ['./src/*'],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}`,
    },
  },
});

