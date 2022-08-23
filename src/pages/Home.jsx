import React from 'react'
import Project from '../components/Project'

const Home = ({ topProjects }) => {
  return (
    <div className="displayed-projects">
      {topProjects.map((p, index) => (
        <>{Project(p)}</>
      ))}
    </div>
  )
}

export default Home
