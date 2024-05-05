import { defineConfig } from 'vitest/config'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import alias from './alias'

export default defineConfig({
  plugins: [vueJsx(), tsxResolveTypes(), vue(), dts({
    entryRoot: 'src',
    outDir: ['es', 'lib'],
    exclude: ['**/tests/*'],
  })],
  resolve: {
    alias,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
