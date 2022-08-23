import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="home-nav">
          Home
        </Link>
        <Link to="/about" className="home-nav">
          About Me
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
