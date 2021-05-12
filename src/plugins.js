import { readonly } from './utils'
import { Logger } from './logger'
import { useTaskScheduler } from './composables/task-scheduler'

export const logger = {
  install(app) {
    app.mixin({
      created() {
        const logger = Logger.getLogger(this.$options.name || 'MAIN')
        readonly(this, '$log', logger)
      }
    })
  }
}

export const mavlink = {
  install(app) {
    app.mixin({
      created() {
        readonly(this, '$mavlink', window.mavlink)
      }
    })
  }
}

export const taskScheduler = {
  install(app) {
    app.mixin({
      beforeCreate() {
        readonly(this, '$scheduler', useTaskScheduler())
      }
    })
  }
}
