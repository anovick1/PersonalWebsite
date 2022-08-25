import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ mobile }) => {
  const [show, setShow] = useState(true)
  const [y, setY] = useState(window.pageYOffset)

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset
    if (y > currentScrollPos || window.pageYOffset < 50) {
      setShow(true)
    } else {
      setShow(false)
    }
    setY(window.pageYOffset)
  }

  return show ? (
    <header>
      <nav>
        <Link to="/" className="home-nav">
          Home
        </Link>
        {!mobile ? (
          <div className="nav-right">
            <Link to="/projects" className="home-nav">
              Projects
            </Link>
            <Link to="/about" className="home-nav">
              About Me
            </Link>
          </div>
        ) : (
          <>
            <Link to="/projects" className="home-nav">
              Projects
            </Link>
            <Link to="/about" className="home-nav">
              About Me
            </Link>
          </>
        )}
      </nav>
    </header>
  ) : (
    ''
  )
}

export default Navbar
