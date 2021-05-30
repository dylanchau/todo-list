import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from 'react-icons/fa'

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li className="inbox" data-testId="inbox">
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li className="today" data-testId="today">
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li className="next_7" data-testId="next_7">
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>
    <div className="sidebar__niddle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Project</h2>
    </div>
    <ul className="sidebar__project">Project will be here!</ul>
    Add Project Component Here!
  </div>
)
