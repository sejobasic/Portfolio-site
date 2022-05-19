import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactSwitch from 'react-switch'
import useSound from 'use-sound';
import switchsound from '../assets/switch.mp3'
import { Link } from 'react-scroll'
import '../styling/navbar.css'
import sejo from '../assets/sejo7.png'

function Navbar({toggle, theme}) {
  const [play] = useSound(switchsound, { volume: 0.25 });

  return (
      <motion.div 
        className='navbar'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className='logo-nav'
          drag
          dragConstraints={{ left:0, top:0, right: 0, bottom: 0}}
          dragElastic={0.7}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2.5 }}
        >
          <Link to='home' spy={true} smooth={true} offset={40} duration={1000} className='logo-item' >
            <div>
              <img  className='logo' src={sejo} alt="sejo logo" />
            </div>
          </Link>
        </motion.div>
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
        <div className='sound-div' onClick={play}>
          <span className='nav-item-text'>{theme === 'light' ? 'TURN OFF THE LIGHTS' : 'TURN ON THE LIGHTS'}
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
      </motion.div>
  )
}

export default Navbar