import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import '../styling/navbar.css'
import sejo from '../assets/sejo7.png'

function Navbar() {

  

  return (
      <div className='navbar'>
        <div className='logo-nav'>
        <Link to='home' spy={true} smooth={true} offset={40} duration={1000} className='logo-item' >
          <div>
            <img  className='logo' src={sejo} alt="sejo logo" />
          </div>
        </Link>
        </div>
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