import { defineConfig } from 'vite';
import vue              from '@vitejs/plugin-vue';
// @ts-ignore
import * as path        from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, './src')
    }
  }
});
