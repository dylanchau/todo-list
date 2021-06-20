/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { AddTask } from 'components/AddTask'
import { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false)
  const [showQuickAddTask, setShowQuickAddTask] = useState(false)

  return (
    <div className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todo List" />
        </div>
        <div className="settings">
          <ul>
            <li
              onClick={() => {
                setShouldShowMain(true)
                setShowQuickAddTask(true)
              }}
              className="settings__add"
              data-testid="quick-add-task-action"
            >
              +
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              className="settings__darkmode"
              data-testid="dark-mode-action"
            >
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </div>
  )
}
