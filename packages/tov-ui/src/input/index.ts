/* import type { defineComponent } from 'vue'
import TovInput from './TovInput.vue'

TovInput.install = (app: ReturnType<typeof defineComponent>) => {
  app.component(TovInput.name, TovInput)
}

export default TovInput */

import type { App } from 'vue'
import TovInput from './TovInput.vue'

TovInput.install = (app: App) => {
  app.component('TovInput', TovInput)
}

export default TovInput
