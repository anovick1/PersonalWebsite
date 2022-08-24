import React from 'react'
import { useEffect } from 'react'
import Project from '../components/Project'
import Avery from '../components/Avery'
import Skills from '../components/Skills'
import { useNavigate } from 'react-router-dom'

const Home = ({
  topProjects,
  skills,
  displayedProject,
  setDisplayedProject
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let navigate = useNavigate()
  const viewMore = () => {
    navigate('/projects')
    window.scrollTo(0, 0)
  }
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
        <div className="view-more">
          <div className="vm-text" onClick={viewMore}>
            <h3>View More Projects</h3>
          </div>
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
