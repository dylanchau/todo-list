import { collectedTaks } from 'constant'

export const collectedTasksExist = (selectedTasks) => {
  collectedTaks.find((task) => task.key === selectedTasks)
}
