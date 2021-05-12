import { TaskScheduler } from './TaskScheduler'

const scheduler = new TaskScheduler()

export function useTaskScheduler() {
  return scheduler
}
