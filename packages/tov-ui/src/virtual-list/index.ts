import type { App } from 'vue'
import TovVirtuallist from './virtual-list'

TovVirtuallist.install = (app: App) => {
  app.component('TovVirtuallist', TovVirtuallist)
}

export default TovVirtuallist
