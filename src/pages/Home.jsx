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
            <h3>View All Projects</h3>
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
      <div className="education">
        <div className="home-title">
          <h1>Education</h1>
        </div>
        <div className="displayed-education">
          <div className="small-education">
            <div className="sp-title">
              <h3>American University</h3>
              <h5>May 2021</h5>
            </div>
            <div className="sp-img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/American_Eagles_logo.png" />
            </div>
            <div className="sp-description" id="american">
              <p>
                <span>Major</span>: Computer Science
              </p>
              <p>
                <span>Major:</span> Business Administration
              </p>
              <p>
                <span>Concentration</span>: Entrepreneurship
              </p>
            </div>
          </div>
          <div className="small-education">
            <div className="sp-title">
              <h3>General Assembly</h3>
              <h5>September 2022</h5>
            </div>
            <div className="sp-img">
              <img src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/23593/ga-logo-gear.png" />
            </div>
            <div className="sp-description" id="american">
              <p>
                500+ hours of expert-led instruction in full stack web and
                mobile application fundamentals using the industry’s most
                in-demand technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
