/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useProjectValues } from 'context'
import React from 'react'

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOveerlay,
}) => {
  const { projects } = useProjectValues()
  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((p) => (
            <li
              key={p.projectId}
              data-testid="project-overlay-action"
              onClick={() => {
                setProject(p.projectId)
                setShowProjectOveerlay(false)
              }}
            >
              <div>{p.name}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}
