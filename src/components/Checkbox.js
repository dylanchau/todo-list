/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types'

import { firebase } from '../firebase'

export const Checkbox = ({ id, taskDesc = '' }) => {
  const archivedTask = () => {
    firebase.firestore().collection('tasks').doc(id).update({ archived: true })
  }
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archivedTask()}
      onKeyDown={(e) => {
        e.key === 'Enter' && archivedTask()
      }}
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  )
}

Checkbox.prototype = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
}
