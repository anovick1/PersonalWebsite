import React from 'react'
import Project from '../components/Project'
import Avery from '../components/Avery'

const Home = ({ topProjects }) => {
  return (
    <div className="home">
      <Avery />
      <div className="displayed-projects">
        {topProjects.map((p, index) => (
          <>{Project(p)}</>
        ))}
      </div>
    </div>
  )
}

export default Home
