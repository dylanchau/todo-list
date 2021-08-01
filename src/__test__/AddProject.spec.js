import { fireEvent, render } from '@testing-library/react'
import { AddProject } from 'components/AddProject'
import { act } from 'react-dom/test-utils'

import { firebase } from '../firebase'

jest.mock('../context', () => ({
  useProjectValues: () => ({ projects: [], setProjects: jest.fn() }),
}))

describe('<AddProject />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Render add project without input', () => {
    const { queryByTestId } = render(<AddProject />)
    expect(queryByTestId('add-project')).toBeTruthy()
    expect(queryByTestId('project-name')).toBeFalsy()
  })

  it('Render add project with input', () => {
    const { queryByTestId } = render(<AddProject />)
    act(() => {
      fireEvent.click(queryByTestId('add-project-action'))
    })
    expect(queryByTestId('project-name')).toBeTruthy()
  })

  it('Add project', () => {
    jest
      .spyOn(firebase.firestore(), 'collection')
      .mockReturnValue({ add: () => Promise.resolve({}) })

    const { queryByTestId } = render(<AddProject shouldShow />)
    expect(queryByTestId('project-name')).toBeTruthy()

    act(() => {
      fireEvent.change(queryByTestId('project-name'), {
        target: { value: 'project 1' },
      })
    })
    act(() => {
      fireEvent.click(queryByTestId('add-project-submit'))
    })
  })

  it('Hide the input', () => {
    const { queryByTestId } = render(<AddProject shouldShow />)
    act(() => {
      fireEvent.click(queryByTestId('hide-project-overlay'))
    })
    expect(queryByTestId('project-name')).toBeFalsy()
  })
})
