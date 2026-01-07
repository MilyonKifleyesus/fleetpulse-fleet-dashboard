import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  plugins: [
    angular({
      tsconfig: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
  css: {
    postcss: {
      plugins: ['tailwindcss', 'autoprefixer'],
    },
  },
});
