/* eslint-disable no-nested-ternary */
import { collectedTasksExist } from 'helpers'
import moment from 'moment'
import { useEffect, useState } from 'react'

import { firebase } from '../firebase'

const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([])
  const [archivedTasks, setArchivedTasks] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', '58a6b823-a4c2-4493-82ea-1e7b21c56ef5')

    unsubscribe =
      selectedProject && !collectedTasksExist(selectedProject)
        ? unsubscribe.where('projectId', '==', selectedProject)
        : selectedProject === 'TODAY'
        ? unsubscribe.where('date', '==', moment().format('DD/MM/YYY'))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? unsubscribe.where('date', '==', '')
        : unsubscribe

    unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((t) => ({
        id: t.id,
        ...t.data(),
      }))

      setTasks(
        selectedProject === 'NEXT7'
          ? newTasks.filter(
              (t) =>
                moment(t.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7 &&
                t.archived !== true
            )
          : newTasks.filter((t) => tasks.archived !== true)
      )

      setArchivedTasks(newTasks.filter((t) => t.archived !== false))
    })

    return () => unsubscribe()
  }, [selectedProject])

  return { tasks, archivedTasks }
}

export default useTasks
