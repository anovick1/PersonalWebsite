import React from 'react'

const Skills = ({ s, index }) => {
  return (
    <div className="skill" key={index}>
      <div className="skill-img">
        <a href={s.link} target="_blank" rel="noopener noreferrer">
          <img src={s.img} />
        </a>
      </div>
      <div>
        <p>{s.type}</p>
      </div>
    </div>
  )
}

export default Skills
