// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'aos': path.resolve(__dirname, 'node_modules/aos')
    }
  }
});
