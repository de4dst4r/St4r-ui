import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({ plugins: [
  vue(),
  vueJsx(),
  tsxResolveTypes(),
  dts({
    entryRoot: 'src',
    outDir: ['es', 'lib'],
    exclude: ['**/tests/**'],
  }),
], build: {
  rollupOptions: {
    external: ['vue'],
    output: [
      {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        format: 'esm',
        dir: 'es',
      },
      {
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        entryFileNames: '[name].js',
        format: 'cjs',
        dir: 'lib',
      },
    ],
  },
  lib: {
    entry: 'src/index.ts',
  },
} })
