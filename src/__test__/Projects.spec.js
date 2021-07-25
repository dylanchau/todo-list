import { fireEvent, render } from '@testing-library/react'
import { Projects } from 'components/Projects'

jest.mock('../context', () => ({
  useSelectedProjectValue: () => ({
    setSelectedProject: () => 'INBOX',
  }),
  useProjectValues: () => ({
    projects: [
      {
        name: '🙌 THE OFFICE',
        projectId: '1',
        userId: 'jlIFXIwyAL3tzHMtzRbw',
        docId: 'michael-scott',
      },
    ],
  }),
}))

describe('<Projects />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Render project', () => {
    const { queryByTestId } = render(<Projects />)
    expect(queryByTestId('project-action')).toBeTruthy()
  })

  it('Trigger click action', () => {
    const { queryByTestId } = render(<Projects />)
    fireEvent.click(queryByTestId('project-action'))
    expect(
      queryByTestId('project-action').classList.contains('active')
    ).toBeTruthy()
  })

  it('Trigger key down action', () => {
    const { queryByTestId } = render(<Projects />)
    expect(queryByTestId('project-action')).toBeTruthy()

    fireEvent.keyDown(queryByTestId('project-action'), {
      key: 'a',
      code: 65,
    })

    expect(
      queryByTestId('project-action').classList.contains('active')
    ).toBeFalsy()

    fireEvent.keyDown(queryByTestId('project-action'), {
      key: 'Enter',
      code: 13,
    })

    expect(
      queryByTestId('project-action').classList.contains('active')
    ).toBeTruthy()
  })
})
