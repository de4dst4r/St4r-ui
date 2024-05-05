import path from 'node:path'
import { fileURLToPath } from 'node:url'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^tov-ui/,
    replacement: path.resolve(baseUrl, 'packages/tov-ui/src'),
  },
  {
    find: /^@tov-ui\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'),
  },
  {
    find: /^@tov-ui\/icons/,
    replacement: path.resolve(baseUrl, 'packages/icons/src'),
  },
]
