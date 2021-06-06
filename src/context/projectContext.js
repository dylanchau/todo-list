import { useProject } from 'hooks'
import { createContext, useContext } from 'react'

export const ProjectContext = createContext()

export const ProjectProvide = ({ children }) => {
  const { projects, setProjects } = useProject()
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useProjectValues = () => useContext(ProjectContext)
