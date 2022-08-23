import React from 'react'

const Avery = () => {
  return (
    <div className="avery">
      <div className="a-img-text">
        <div>
          <img src="./images/linkedinPFP.png" alt="" />
        </div>
        <div className="a-text">
          <h1>Avery Novick</h1>
          <h2>Full Stack Software Engineer</h2>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/avery-novick/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/25/25320.png" />
            </a>
            <a
              href="PUT LINK TO PDF RESUME HERE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" />
            </a>
            <a
              href="https://github.com/anovick1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/85/85047.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avery
