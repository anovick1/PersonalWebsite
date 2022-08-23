import React from 'react'

const ProjectDetails = (p) => {
  return (
    <div className="large-project">
      <h1>{p.title}</h1>
      {p.img.map((i, index) => (
        <div>
          <img src={i} />
        </div>
      ))}
    </div>
  )
}

export default ProjectDetails
