import { fireEvent, render, waitFor } from '@testing-library/react'
import { AddTask } from 'components/AddTask'

import { firebase } from '../firebase'

jest.mock('../context', () => ({
  useSelectedProjectValue: () => ({ selectedProject: 1 }),
  useProjectValues: () => ({ projects: [] }),
}))

beforeEach(() => {
  // firebase mockup
  jest
    .spyOn(firebase.firestore(), 'collection')
    .mockReturnValue({ add: () => Promise.resolve({}) })
})

describe('<AddTask />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Quick add task', () => {
    it('Render quick add task popup', () => {
      const { getByTestId, getByText } = render(<AddTask showQuickAddTask />)
      expect(getByTestId('add-task-main')).toBeTruthy()
      expect(getByText('Quick Add Task')).toBeTruthy()
    })

    it('Trigger cancel action', () => {
      const setShowQuickAddTask = jest.fn()
      const { getByTestId, getByText } = render(
        <AddTask showQuickAddTask setShowQuickAddTask={setShowQuickAddTask} />
      )
      expect(getByText('Quick Add Task')).toBeTruthy()
      fireEvent.click(getByTestId('add-task-quick-cancel'))
      expect(setShowQuickAddTask).toHaveBeenCalledTimes(1)
    })

    it('Add task', async () => {
      const setShowQuickAddTask = jest.fn()
      const { getByTestId } = render(
        <AddTask showQuickAddTask setShowQuickAddTask={setShowQuickAddTask} />
      )
      fireEvent.change(getByTestId('add-task-content'), {
        target: { value: 'new task' },
      })
      fireEvent.click(getByTestId('add-task'))
      await waitFor(() => expect(setShowQuickAddTask).toHaveBeenCalledTimes(1))
    })
  })

  describe('Add task main', () => {
    it('Render show add task main', () => {
      const { getByTestId } = render(<AddTask />)
      fireEvent.click(getByTestId('show-main-action'))
      expect(getByTestId('add-task-main')).toBeTruthy()
    })

    it('Render show add task main project overlay', () => {
      const { queryByTestId } = render(<AddTask />)
      fireEvent.click(queryByTestId('show-main-action'))
      fireEvent.click(queryByTestId('show-project-overlay'))
      expect(queryByTestId('project-overlay')).toBeTruthy()
      fireEvent.click(queryByTestId('show-task-date-overlay'))
      expect(queryByTestId('task-date-overlay')).toBeTruthy()
    })

    it('Trigger add task main cancel action', () => {
      const { queryByTestId } = render(<AddTask />)
      fireEvent.click(queryByTestId('show-main-action'))
      expect(queryByTestId('add-task-main')).toBeTruthy()
      fireEvent.click(queryByTestId('add-task-main-cancel'))
      expect(queryByTestId('project-overlay')).toBeFalsy()
    })
  })
})
