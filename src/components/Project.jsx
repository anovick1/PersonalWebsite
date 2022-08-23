import React from 'react'

const Project = (p) => {
  return (
    <div className="small-project">
      <h3>{p.title}</h3>
      <div className="sp-img">
        <img src={p.img[0]} />
        <h5>{p.date}</h5>
      </div>
      <p>{p.short_description}</p>
      <div className="sp-tech">
        {p.tech.map((t, index) => (
          <div>
            <a href={t.link} target="_blank" rel="noopener noreferrer">
              <img src={t.img} />{' '}
            </a>
          </div>
        ))}
      </div>
      <button>View More</button>
    </div>
  )
}

export default Project
