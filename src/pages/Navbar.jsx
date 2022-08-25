import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ mobile }) => {
  return (
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
  )
}

export default Navbar
