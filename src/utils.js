import { Logger } from './logger'

const log = Logger.getLogger('UTILS')

export function readonly(object, field, value) {
  log.trace(`Defining readonly property ${field} with value ${JSON.stringify(value)}`)

  Object.defineProperty(object, field, {
    get() { return value }
  })
}
