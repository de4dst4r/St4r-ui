import type { ComponentResolver } from 'unplugin-vue-components/types'

export function tovResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      console.log(name)
      if (name.startsWith('Tov')) {
        return {
          name,
          from: 'tov-ui',
        }
      }
    },
  }
}
