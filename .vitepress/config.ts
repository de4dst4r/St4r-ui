import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tov UI',
  description: 'vue component library',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/docs/(.*)': 'components/icons/(.*)',

  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/',
        },
        {
          text: '输入框',
          link: '/components/input/',
        },
        {
          text: 'Tooltip',
          link: '/components/tooltip/',
        },
        {
          text: '表格',
          link: '/components/table/',
        },
        {
          text: '虚拟列表',
          link: '/components/virtual-list/',
        },
        {
          text: '通知',
          link: '/components/notification/',
        },
        {
          text: '图标',
          link: '/components/icons/',
        },
      ],
      '/utils/': [
        {
          text: '生成样式',
          link: '/utils/gen-class',
        },
      ],
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/de4dst4r/tov-ui' },
    ],
  },
})
