import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './components-css/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMenu}>
                  FineRecipes <i className="fas fa-scroll"/>
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                      <Link to="/" className="nav-links" onClick={closeMenu}>
                          Home
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/recipes" className="nav-links" onClick={closeMenu}>
                          Recipes
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/my-recipes" className="nav-links" onClick={closeMenu}>
                          My Recipes
                      </Link>
                  </li>
              </ul>
          </div>
      </nav>  
    )
}

export default Navbar
