import { Checkbox } from 'components/Checkbox'
import { collectedTaks } from 'constant'
import { useProjectValues, useSelectedProjectValue } from 'context'
import { collectedTasksExist, getCollectedTitle, getTitle } from 'helpers'
import { useTasks } from 'hooks'
import { useEffect } from 'react'

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue()
  const { projects } = useProjectValues()
  const { tasks } = useTasks(selectedProject)

  let projectName = ''
  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collectedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name
  }

  if (selectedProject && collectedTasksExist(selectedProject)) {
    projectName = getCollectedTitle(collectedTaks, selectedProject).name
  }

  useEffect(() => {
    document.title = `${projectName} Todo List`
  })

  return (
    <div className="tasks" data-testid="tasks">
      <h2 className="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks &&
          tasks.map((t) => (
            <li key={`${t.id}`}>
              <Checkbox id={t.id} />
              <span>{t.task}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}
