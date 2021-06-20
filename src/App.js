import { Content } from 'components/layout/Content'
import { Header } from 'components/layout/Header'
import { ProjectProvide, SelectedProjectProvide } from 'context'
import { useState } from 'react'

function App({ darkModeDefault = false }) {
  const [darkMode, setDarkMode] = useState(darkModeDefault)
  return (
    <>
      <SelectedProjectProvide>
        <ProjectProvide>
          <main className={darkMode ? 'darkmode' : ''}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Content />
          </main>
        </ProjectProvide>
      </SelectedProjectProvide>
    </>
  )
}

export { App }
export default App
