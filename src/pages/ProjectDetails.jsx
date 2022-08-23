import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = ({
  displayedProject,
  setDisplayedProject,
  allProjects
}) => {
  let { name } = useParams()
  useEffect(() => {
    let select = allProjects.find((p) => p.name === name)
    setDisplayedProject(select)
  }, [name])

  return displayedProject ? (
    <div className="large-project">
      <div className="home-title" id="lp-title-git">
        {/* <div className="lp-title-git"> */}
        <div>
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
          <p>{displayedProject.short_description}</p>
        </div>
        <div className="lp-github">
          <a
            href={displayedProject.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  ) : (
    ''
  )
}

export default ProjectDetails
