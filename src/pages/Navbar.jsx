import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="home-nav">
          Home
        </Link>
        <div className="nav-right">
          <Link to="/projects" className="home-nav">
            Projects
          </Link>
          <Link to="/about" className="home-nav">
            About Me
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
