// import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import Component from 'unplugin-vue-components/vite'
import alias from './alias'

import { tovResolver } from './scripts/tov-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
    vueJsx(),
    tsxResolveTypes(),
    Component({
      resolvers: [tovResolver()],
    }),
  ],
  resolve: {
    alias,
  },
})
