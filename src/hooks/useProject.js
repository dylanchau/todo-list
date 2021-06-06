import { useEffect, useState } from 'react'

import { firebase } from '../firebase'

const useProject = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', '58a6b823-a4c2-4493-82ea-1e7b21c56ef5')
      .orderBy('projectId')
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((p) => ({
          ...p.data(),
          docId: p.id,
        }))

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects)
        }
      })
  }, [projects])

  return { projects, setProjects }
}

export default useProject
