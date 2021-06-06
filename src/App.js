import { Content } from 'components/layout/Content'
import { Header } from 'components/layout/Header'
import { ProjectProvide, SelectedProjectProvide } from 'context'

function App() {
  return (
    <>
      <SelectedProjectProvide>
        <ProjectProvide>
          <div className="App">
            <Header />
            <Content />
          </div>
        </ProjectProvide>
      </SelectedProjectProvide>
    </>
  )
}

export { App }
export default App
