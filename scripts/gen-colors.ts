import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { gold, green, purple, red } from '@ant-design/colors'

let colors = ''
purple.forEach((color, index) => {
  colors += `--tov-color-primary-${++index}: ${color};\n`
  color += '\n'
})

green.forEach((color, index) => {
  colors += `--tov-color-success-${++index}: ${color};\n`
})
gold.forEach((color, index) => {
  colors += `--tov-color-warning-${++index}: ${color};\n`
  color += '\n'
})
red.forEach((color, index) => {
  colors += `--tov-color-error-${++index}: ${color};\n`
  color += '\n'
})

const baseURL = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseURL, 'packages/tov-ui/src/style/theme/colors.css')
fs.writeFileSync(cssFile, `:root{\n${colors}}`)
console.log(colors)
