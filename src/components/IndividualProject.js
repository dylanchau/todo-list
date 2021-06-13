/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useProjectValues, useSelectedProjectValue } from 'context'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

import { firebase } from '../firebase'

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false)
  const { projects, setProjects } = useProjectValues()
  const { setSelectedProject } = useSelectedProjectValue()

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection('projects')
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects])
        setSelectedProject('INBOX')
      })
  }

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowConfirm(!showConfirm)
        }}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project"
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <div className="project-delete-modal__control">
                <button
                  type="button"
                  onClick={() => deleteProject(project.docId)}
                >
                  Delete
                </button>
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setShowConfirm(!showConfirm)
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Cancel adding project, do not delete"
                >
                  Cancel
                </span>
              </div>
            </div>
          </div>
        )}
      </span>
    </>
  )
}
