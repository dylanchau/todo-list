import { render } from '@testing-library/react'
import { App } from 'App'

describe('<App />', () => {
  it('Render App component', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('application')).toBeTruthy()
    expect(
      getByTestId('application').classList.contains('darkmode')
    ).toBeFalsy()
  })
  it('Render App componenti with dark mode', () => {
    const { getByTestId } = render(<App darkModeDefault />)
    expect(
      getByTestId('application').classList.contains('darkmode')
    ).toBeTruthy()
  })
})
