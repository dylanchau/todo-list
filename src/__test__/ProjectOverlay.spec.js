import { fireEvent, render } from '@testing-library/react'
import { ProjectOverlay } from 'components/ProjectOverlay'

jest.mock('../context', () => ({
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

describe('<ProjectOverlay />', () => {
  it('Render project overlay', () => {
    const { queryByTestId } = render(<ProjectOverlay showProjectOverlay />)
    expect(queryByTestId('project-overlay')).toBeTruthy()
    expect(queryByTestId('project-overlay-action')).toBeTruthy()
  })

  it('Trigger click action', () => {
    const setProject = jest.fn()
    const setShowProjectOveerlay = jest.fn()
    const { queryByTestId } = render(
      <ProjectOverlay
        showProjectOverlay
        setProject={setProject}
        setShowProjectOveerlay={setShowProjectOveerlay}
      />
    )
    expect(queryByTestId('project-overlay')).toBeTruthy()
    expect(queryByTestId('project-overlay-action')).toBeTruthy()

    fireEvent.click(queryByTestId('project-overlay-action'))
    expect(setProject).toHaveBeenCalledWith('1')
    expect(setShowProjectOveerlay).toHaveBeenCalledWith(false)
  })
})
