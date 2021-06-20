/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useProjectValues } from 'context'
import { generatePushId } from 'helpers'
import { useState } from 'react'

import { firebase } from '../firebase'

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow)
  const [projectName, setProjectName] = useState('')

  const projectId = generatePushId()
  const { projects, setProjects } = useProjectValues()

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection('projects')
      .add({
        projectId,
        name: projectName,
        userId: '58a6b823-a4c2-4493-82ea-1e7b21c56ef5',
      })
      .then(() => {
        setProjects([...projects])
        setProjectName('')
        setShow(false)
      })

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Add your project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button
            className="add-project__submit"
            onClick={() => addProject()}
            data-testid="add-project-submit"
            type="button"
          >
            Add Project
          </button>
          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(!show)}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        className="add-project__text"
        data-testid="add-project-action"
        onClick={() => setShow(!show)}
      >
        Add Project
      </span>
    </div>
  )
}
