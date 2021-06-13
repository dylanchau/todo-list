/* eslint-disable no-plusplus */
import { collectedTaks } from 'constant'

export const getTitle = (projects, projectId) => {
  const result = projects.find((p) => p.projectId === projectId)
  return result || []
}

export const getCollectedTitle = (projects, key) =>
  projects.find((p) => p.key === key)

export const collectedTasksExist = (selectedTasks) =>
  collectedTaks.find((task) => task.key === selectedTasks)

export const generatePushId = (() => {
  const PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'

  const lastRandChars = []

  return function () {
    let now = new Date().getTime()

    const timeStampChars = new Array(8)
    for (let i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64)
      now = Math.floor(now / 64)
    }

    let id = timeStampChars.join('')

    for (let i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i])
    }

    return id
  }
})()
