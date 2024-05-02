import type { App } from 'vue'
import TovTooltip from './TovTooltip.jsx'

TovTooltip.install = (app: App) => {
  app.component('TovTooltip', TovTooltip)
}

export default TovTooltip
