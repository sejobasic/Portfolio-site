import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import '../navbar.css'

function Navbar() {

  

  return (
      <div className='navbar'>
        <Link to='home' spy={true} smooth={true} offset={40} duration={1000} className='nav-item'>
          <div>
            <span className='nav-item-text'>HOME</span>
          </div>
        </Link>
        <Link to='projects' spy={true} smooth={true} offset={40} duration={1000} className='nav-item'>
          <div>
            <span className='nav-item-text'>PROJECTS</span>
          </div>
        </Link>
        <Link to='photos' spy={true} smooth={true} offset={50} duration={1000} className='nav-item'>
          <div>
            <span className='nav-item-text'>P+D</span>
          </div>
        </Link>
        <Link to='contact' spy={true} smooth={true} offset={50} duration={1000} className='nav-item'>
          <div>
            <span className='nav-item-text'>CONTACT</span>
          </div>
        </Link>
      </div>
  )
}

export default Navbar