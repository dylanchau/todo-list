import { Checkbox } from 'components/Checkbox'
import { useTasks } from 'hooks'

export const Tasks = () => {
  const { task } = useTasks('1')
  console.log(task)
  const projectName = ''

  return (
    <div className="tasks" data-testid="tasks">
      <h2 className="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {task &&
          task.map((t) => (
            <li key={`${t.id}`}>
              <Checkbox id={t.id} />
              <span>{t.task}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}
