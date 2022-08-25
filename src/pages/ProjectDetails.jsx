import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Skills from '../components/Skills'

const ProjectDetails = ({
  displayedProject,
  setDisplayedProject,
  allProjects,
  mobile
}) => {
  let { name } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
    let select = allProjects.find((p) => p.name === name)
    setDisplayedProject(select)
  }, [name])

  return displayedProject ? (
    <div className="large-project">
      <div className="home-title" id="lp-title-git">
        {/* <div className="lp-title-git"> */}
        <div className="lp-title">
          <h1>{displayedProject.title}</h1>
          {displayedProject.deployed_link !== null ? (
            <a
              href={displayedProject.deployed_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>Deployed Link</h5>
            </a>
          ) : (
            ''
          )}
          {!mobile ? <p>{displayedProject.short_description}</p> : ''}
        </div>
        <div className="lp-github">
          <a
            href={displayedProject.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" />
            {/* <p>GitHub Link</p> */}
          </a>
        </div>
      </div>

      <div className="lp-title-images">
        <div className="section-title">
          <h2>Screenshots</h2>
        </div>
        <div className="lp-images">
          {displayedProject.img.map((i, index) => (
            <div className="lp-img" key={index}>
              <img src={i} />
            </div>
          ))}
        </div>
      </div>
      <div className="section-cont">
        <div className="section-title">
          <h2>Description</h2>
        </div>
        <div className="lp-description">
          <h3>{displayedProject.long_description}</h3>
          <p>{displayedProject.date}</p>
        </div>
      </div>
      <div className="section-title">
        <h2>Technology Used</h2>
        <p>click to view documentation</p>
      </div>
      <div className="displayed-skills" id="lp-skill">
        {displayedProject.tech.map((s, index) => (
          <>{<Skills s={s} index={index} />}</>
        ))}
      </div>
    </div>
  ) : (
    ''
  )
}

export default ProjectDetails
