import type { defineComponent } from 'vue'
import TovButton from './TovButton.vue'

TovButton.install = (app: ReturnType<typeof defineComponent>) => {
  app.component(TovButton.name, TovButton)
}

export default TovButton
