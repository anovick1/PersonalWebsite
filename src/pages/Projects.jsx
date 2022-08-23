import React from 'react'
import Project from '../components/Project'
import Avery from '../components/Avery'

const Projects = ({ allProjects }) => {
  let arr = allProjects.reverse()

  return (
    <div>
      <Avery />
      <div className="top-projects">
        <div className="home-title">
          <h1>All Projects</h1>
          <p>click to view more</p>
        </div>
        <div className="displayed-all-projects">
          {arr.map((p, index) => (
            <>{<Project p={p} index={index} />}</>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
