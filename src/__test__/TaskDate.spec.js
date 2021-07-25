import { fireEvent, render } from '@testing-library/react'
import { TaskDate } from 'components/TaskDate'

describe('<TaskDate />', () => {
  it('Render task date', () => {
    const setTaskDate = jest.fn()
    const setShowTaskDate = jest.fn()

    const { queryByTestId } = render(
      <TaskDate
        setTaskDate={setTaskDate}
        showTaskDate
        setShowTaskDate={setShowTaskDate}
      />
    )
    expect(queryByTestId('task-date-today')).toBeTruthy()
    expect(queryByTestId('task-date-tomorrow')).toBeTruthy()
    expect(queryByTestId('task-date-next-week')).toBeTruthy()
  })

  it('Trigger click action', () => {
    const setTaskDate = jest.fn()
    const setShowTaskDate = jest.fn()

    const { queryByTestId } = render(
      <TaskDate
        setTaskDate={setTaskDate}
        showTaskDate
        setShowTaskDate={setShowTaskDate}
      />
    )

    fireEvent.click(queryByTestId('task-date-today'))
    fireEvent.click(queryByTestId('task-date-tomorrow'))
    fireEvent.click(queryByTestId('task-date-next-week'))
    expect(setShowTaskDate).toHaveBeenCalledTimes(3)
  })
})
