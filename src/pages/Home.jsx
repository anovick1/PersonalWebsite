import React from 'react'
import Project from '../components/Project'
import Avery from '../components/Avery'

const Home = ({ topProjects }) => {
  return (
    <div className="home">
      <Avery />
      <div className="top-projects">
        <h2>Top Projects</h2>
        <div className="displayed-projects">
          {topProjects.map((p, index) => (
            <>{Project(p)}</>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
