import React from 'react'
import Project from '../components/Project'
import Avery from '../components/Avery'

const Projects = ({
  allProjects,
  displayedProject,
  setDisplayedProject,
  mobile
}) => {
  return (
    <div>
      <Avery mobile={mobile} />
      <div className="top-projects">
        <div className="home-title">
          <h1>All Projects</h1>
          <p>click to view more</p>
        </div>
        <div className="displayed-all-projects">
          {allProjects.map((p, index) => (
            <>
              {
                <Project
                  p={p}
                  index={index}
                  displayedProject={displayedProject}
                  setDisplayedProject={setDisplayedProject}
                />
              }
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
