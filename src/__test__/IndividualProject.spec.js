import { fireEvent, render } from '@testing-library/react'
import { IndividualProject } from 'components/IndividualProject'

import { firebase } from '../firebase'

const project = {
  name: 'THE OFFICE',
  projectId: '1',
  userId: 'jlIFXIwyAL3tzHMtzRbw',
  docId: 'michael-scott',
}

beforeEach(() => {
  // firebase mockup
  jest.spyOn(firebase.firestore(), 'collection').mockReturnValue({
    doc: jest.fn(() => ({ delete: () => Promise.resolve({}) })),
  })
})

jest.mock('../context', () => ({
  useProjectValues: () => ({
    projects: [project],
    setProjects: jest.fn(),
  }),
  useSelectedProjectValue: () => ({
    setSelectedProject: jest.fn(),
  }),
}))

describe('<IndividualProject />', () => {
  it('Delete project by click action', () => {
    const { queryByTestId, queryByText } = render(
      <IndividualProject project={project} />
    )
    expect(queryByText('THE OFFICE')).not.toBeNull()
    fireEvent.click(queryByTestId('delete-project'))

    fireEvent.click(queryByTestId('delete-action'))
  })

  it('Delete project by key event', () => {
    const { queryByTestId } = render(<IndividualProject project={project} />)
    fireEvent.keyDown(queryByTestId('delete-project'), {
      key: 'Enter',
      code: 13,
    })

    fireEvent.click(queryByTestId('delete-action'))
  })

  it('Cancel delete action by click action', () => {
    const { queryByTestId } = render(<IndividualProject project={project} />)
    fireEvent.click(queryByTestId('delete-project'))
    fireEvent.click(queryByTestId('cancel-delete'))
    expect(queryByTestId('delete-action')).toBeFalsy()
  })

  it('Cancel delete action by key down action', () => {
    const { queryByTestId } = render(<IndividualProject project={project} />)
    fireEvent.click(queryByTestId('delete-project'))
    fireEvent.keyDown(queryByTestId('cancel-delete'), {
      key: 'Enter',
      code: 13,
    })
    expect(queryByTestId('delete-action')).toBeFalsy()
  })
})
