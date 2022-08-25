import React from 'react'

const Avery = ({ mobile }) => {
  return (
    <div className="avery">
      {mobile ? (
        <div className="a-img-text">
          <div className="a-text">
            <h1>Avery Novick</h1>
            <div>
              <img src="./images/linkedinPFP.png" alt="" />
            </div>
            <h2>Full Stack Software Engineer</h2>
            <p>averynov@yahoo.com</p>
            <p>(781) 290-8623</p>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/avery-novick/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png" />
              </a>
              <a
                href="https://github.com/anovick1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" />
              </a>
              <a
                href="https://drive.google.com/file/d/1GnQLT_PGd4vuk-0O70CEKVavZVTxHdgY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/85/85047.png" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="a-img-text">
          <div>
            <img src="./images/linkedinPFP.png" alt="" />
          </div>
          <div className="a-text">
            <h1>Avery Novick</h1>
            <h2>Full Stack Software Engineer</h2>
            <p>averynov@yahoo.com</p>
            <p>(781) 290-8623</p>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/avery-novick/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png" />
              </a>
              <a
                href="https://github.com/anovick1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" />
              </a>
              <a
                href="https://drive.google.com/file/d/1GnQLT_PGd4vuk-0O70CEKVavZVTxHdgY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/85/85047.png" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Avery
