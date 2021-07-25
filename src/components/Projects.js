/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useProjectValues, useSelectedProjectValue } from 'context'
import { useState } from 'react'

import { IndividualProject } from './IndividualProject'

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectValues()

  return (
    projects &&
    projects.map((p) => (
      <li
        key={p.projectId}
        data-doc-id={p.docId}
        data-testid="project-action"
        className={
          active === p.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setActive(p.projectId)
            setSelectedProject(p.projectId)
          }
        }}
        onClick={() => {
          setActive(p.projectId)
          setSelectedProject(p.projectId)
        }}
      >
        <IndividualProject project={p} />
      </li>
    ))
  )
}
