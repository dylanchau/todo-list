import { Checkbox } from 'components/Checkbox'
import { useTasks } from 'hooks'

export const Tasks = () => {
  const { tasks } = useTasks('1')

  const projectName = ''

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
