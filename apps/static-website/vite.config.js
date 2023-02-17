const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
});
