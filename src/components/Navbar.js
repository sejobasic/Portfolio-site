import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import useSound from 'use-sound';
import switchsound from '../assets/switch.mp3'
import { Link } from 'react-scroll'
import '../styling/navbar.css'
import sejo from '../assets/sejo7.png'


function Navbar({toggle, theme}) {

  const [play] = useSound(switchsound, { volume: 0.25 });


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
          <div >
            <span className='nav-item-text'>CONTACT</span>
          </div>
        </Link>
        {/* <div className='switch'>
        <ReactSwitch 
          onChange={toggle}
          checked={theme === 'dark'}
          handleDiameter={0}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={165}
          offHandleColor='#fbdce2'
          onHandleColor='#fbdce2'
          onColor='#08372c'
          offColor='#08372c'
        />
        </div> */}
        <div onClick={play}>
        <span className='nav-item-text'>{theme === 'light' ? 'TURN OFF THE LIGHT' : 'TURN ON THE LIGHT'}
        </span>
        <ReactSwitch 
          onChange={toggle}
          checked={theme === 'dark'}
          handleDiameter={0.1}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={165}
          boxShadow='none'
          activeBoxShadow='none'
          offHandleColor='transparent'
          onHandleColor='transparent'
          onColor='transparent'
          offColor='transparent'
          className='switch'
        />
        </div>
        {/* <ReactSwitch 
          onChange={toggle}
          checked={theme === 'dark'}
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          height={25}
          width={45}
          offHandleColor='#fbdce2'
          onHandleColor='#fbdce2'
          onColor='#131212'
          offColor='#08372c'
          className='switch'
        /> */}
      </div>
  )
}

export default Navbar