import type { App } from 'vue'
import { Notification } from './notification'
import { createNotification } from './instance'

const instance = createNotification();

(Notification as any).install = (app: App) => {
  app.config.globalProperties.$notification = instance
}

export default instance
