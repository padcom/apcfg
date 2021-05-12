import './main.scss'
import './fonts/fonts.css'
import './polyfills'

const { MavEsp8266 } = require('node-mavlink')
window.mavlink = new MavEsp8266()

window.onunhandledrejection = function(error) {
  console.log('Unhandled error', error)
}

import { Logger, LogLevel } from './logger'
Logger.getLogger('DEFAULT').level = LogLevel.info
Logger.events.on('debug', ({ source, args }) => { console.log(`[${source}]`, ...args) })
Logger.events.on('info', ({ source, args }) => { console.log(`[${source}]`, ...args) })
Logger.events.on('warn', ({ source, args }) => { console.warn(`[${source}]`, ...args) })
Logger.events.on('err', ({ source, args }) => { console.error(`[${source}]`, ...args) })

import { createApp } from 'vue'
import App from './App.vue'
import { logger, mavlink, taskScheduler } from './plugins'
import { router } from './router'

const app = createApp(App)
  .use(logger)
  .use(mavlink)
  .use(taskScheduler)
  .use(router)

window.mavlink.start()
  .then(() => router.isReady())
  .then(() => app.mount('#app'))
