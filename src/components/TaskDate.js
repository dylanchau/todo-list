/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from 'moment'
import React from 'react'
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from 'react-icons/fa'

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li
          onClick={() => {
            setShowTaskDate(false)
            setTaskDate(moment().format('DD/MM/YYYY'))
          }}
          data-testid="task-date-overlay"
        >
          <div>
            <span>
              {' '}
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          onClick={() => {
            setShowTaskDate(false)
            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'))
          }}
          data-testid="task-date-tomorrow"
        >
          <div>
            <span>
              {' '}
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </div>
        </li>
        <li
          onClick={() => {
            setShowTaskDate(false)
            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'))
          }}
          data-testid="task-date-next-week"
        >
          <div>
            <span>
              {' '}
              <FaRegPaperPlane />
            </span>
            <span>Next Week</span>
          </div>
        </li>
      </ul>
    </div>
  )
