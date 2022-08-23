import React from 'react'
import Project from '../components/Project'
import Avery from '../components/Avery'
import Skills from '../components/Skills'

const Home = ({ topProjects, skills }) => {
  return (
    <div className="home">
      <Avery />

      <div className="top-projects">
        <div className="home-title">
          <h1>Top Projects</h1>
          <p>click to view more</p>
        </div>
        <div className="displayed-projects">
          {topProjects.map((p, index) => (
            <>{<Project p={p} index={index} />}</>
          ))}
        </div>
      </div>
      <div className="skills">
        <div className="home-title">
          <h1>Skills</h1>
          <p>click to view documentation</p>
        </div>
        <div className="displayed-skills">
          {skills.map((s, index) => (
            <>{<Skills s={s} index={index} />}</>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
