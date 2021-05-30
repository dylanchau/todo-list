import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
  const x = 1
  return (
    <div className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todo List" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">+</li>
            <li className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
