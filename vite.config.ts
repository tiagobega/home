import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compilerOptions } from './tsconfig.app.json';
import { URL, fileURLToPath } from 'node:url';

function mountAliasPaths() {
  const paths = compilerOptions.paths as Record<string, string[]>;

  const aliases: Record<string, string> = {};

  Object.keys(paths).forEach((alias) => {
    const aliasArray = paths[alias].map((aliasPath) =>
      fileURLToPath(new URL(aliasPath.replace('/*', ''), import.meta.url))
    );

    aliases[alias.replace('/*', '')] = aliasArray[0];
  });

  return aliases;
}

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/includes" as *;`,
      },
    },
    postcss: {
      plugins: [],
    },
  },
  resolve: {
    alias: mountAliasPaths(),
  },
  build: {
    target: 'es2015',
  },

  server: {
    open: 'index.html',
    port: 4000,
    host: '0.0.0.0',
  },
  plugins: [react()],
});
