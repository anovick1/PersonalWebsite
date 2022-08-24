import React from 'react'
import { useNavigate } from 'react-router-dom'

const Project = ({ p, index, displayedProject, setDisplayedProject }) => {
  let navigate = useNavigate()

  const showProject = (p) => {
    setDisplayedProject(p)
    navigate(`/${p.name}`)
  }
  return (
    <div className="small-project" key={index} onClick={() => showProject(p)}>
      <div className="sp-title">
        <h5>{p.date}</h5>
        <h3>{p.title}</h3>
      </div>
      <div className="sp-img">
        <img src={p.img[0]} />
      </div>
      <div className="sp-description">
        <p>{p.short_description}</p>
      </div>
      <div className="sp-tech">
        {p.tech.map((t, index) => (
          <div>
            <a href={t.link} target="_blank" rel="noopener noreferrer">
              <img src={t.img} />{' '}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
