import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'
import { vitepressDemo } from "vite-plugin-vitepress-demo"
const baseUrl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue',],
    })
  ],
  resolve: {
    alias:[
      {
        find: /^@tov-ui\/utils/,
        replacement: path.resolve(baseUrl,'packages/utils/src')
      }
    ]
  }
})
