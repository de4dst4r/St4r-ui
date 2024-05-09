import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import fs from 'fs-extra'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'tov-ui.css',
      },
    },
    lib: {
      entry: 'src/styles.ts',
      formats: ['es'],
      fileName: () => `tov-ui-style.js`,
    },
  },
  plugins: [
    {
      name: 'remove: tov-ui-style.js',
      closeBundle() {
        const tovPath = fileURLToPath(new URL('./dist', import.meta.url))
        const styleFilePath = path.resolve(tovPath, 'tov-ui-style.js')
        fs.removeSync(styleFilePath)
      },
    },
  ],
})
