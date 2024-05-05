import { createVNode, render } from 'vue'
import type { NotificationConfig, NotificationInstance } from './interface'
import { Notification } from './notification.tsx'

export function createNotification() {
  let instance: NotificationInstance
  const info = (config: NotificationConfig) => {
    if (!instance) {
      const body = document.body
      const vnode = createVNode(Notification, {
        onReady(_instance: NotificationInstance) {
          instance = _instance
          instance.add(config)
        },
      })
      if (config.appContext)
        vnode.appContext = config.appContext
      render(vnode, body)
    }
    else {
      instance.add(config)
    }
  }

  return { info }
}
