// https://vitepress.dev/guide/custom-theme

import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

import tov from 'tov-ui'
import 'tov-ui/styles.ts'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    // ...
    app.component('Demo', AntdTheme)
    app.use(tov)
  },
} satisfies Theme
