import type { App } from 'vue'
import StarProgress from './StarProgress.vue'

StarProgress.install = (app: App) => {
  app.component('StarProgress', StarProgress)
}

export default StarProgress
