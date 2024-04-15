import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tov UI",
  description: "vue component library",
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/button/index.md': 'components/button/index.md',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '首页', link: '/'},
      { text: '介绍', link: '/introduce'},
      { text: '组件', link: '/components/'},
      { text: '工具', link: '/utils'},
    ],

    sidebar: {
      "/components/": [
        {
        text: '按钮',
        link : '/components/button/'
      }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
