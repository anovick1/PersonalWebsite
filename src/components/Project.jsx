import React from 'react'
import { useNavigate } from 'react-router-dom'

const Project = ({ p, index }) => {
  let navigate = useNavigate()

  const showProject = (p) => {
    navigate(`/${p}`)
  }
  return (
    <div
      className="small-project"
      key={index}
      onClick={() => showProject(p.name)}
    >
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
      {/* <button>View More</button> */}
    </div>
  )
}

export default Project
