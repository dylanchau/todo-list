/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { AddProject } from 'components/AddProject'
import { Projects } from 'components/Projects'
import { useSelectedProjectValue } from 'context'
import { useState } from 'react'
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from 'react-icons/fa'

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue()
  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true)

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === 'inbox' ? 'active' : ''}
          data-testid="inbox"
          onClick={() => {
            setActive('inbox')
            setSelectedProject('INBOX')
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          className={active === 'today' ? 'active' : ''}
          data-testid="today"
          onClick={() => {
            setActive('today')
            setSelectedProject('TODAY')
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span> Today</span>
        </li>
        <li
          className={active === 'next_7' ? 'active' : ''}
          data-testid="next_7"
          onClick={() => {
            setActive('next_7')
            setSelectedProject('NEXT_7')
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown className={!showProjects ? 'hidden-projects' : ''} />
        </span>
        <h2>Project</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  )
}
