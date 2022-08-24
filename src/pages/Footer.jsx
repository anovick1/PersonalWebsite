import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="f-name">
          <p>Avery Novick</p>
        </div>
        <div className="f-contact">
          <div className="f-info">
            <p>averynov@yahoo.com</p>
          </div>
          <div className="f-info">
            <p>(781) 290-8623</p>
          </div>
        </div>
        <div className="socials" id="footer">
          <a
            href="https://www.linkedin.com/in/avery-novick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/25/25320.png" />
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
    </footer>
  )
}

export default Footer
