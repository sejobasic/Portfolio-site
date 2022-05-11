import React from 'react'
import { motion } from 'framer-motion'
import '../styling/projects.css'
import { Link } from 'react-router-dom'
import layr from '../assets/layr.png'



function Layr() {

  return (
    <div className='noise'>
      <motion.div 
        className='project-page'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
      <div className='project-links'>
      <Link to='/'>
        <p className='link-tag home'>HOME</p>
      </Link>
      <Link to='/simple'>
        <p className='link-tag next'>NEXT PROJECT</p>
      </Link>
      </div>
      <div className='project-image-container'>
        <img className='project-image' src={layr} alt='Project Img Header' />
      </div>
      <div className='project-text-container'>
        <p className='project-header'>Layr Sequencer</p>
        <p className='project-text'>
            Layr Sequencer is the capstone project that i made during my time at a Coding Bootcamp.<br />
            It is built with a React Front-end and Rails Back-end for Authentication.<br />
            Coming from a musical background i really wanted to do something a bit different<br />
            that was interactive and work with audio. The Layr Sequencer features a 16-Step Sequencer page<br /> 
            and a Jam page with a Piano and Drum Pad. This project very quickly became a passion project<br /> 
            and is something that i will continue working on and adding new features in the future.
        </p>
        <div className='link-container'>
          <a className='link-tag' href='https://github.com/sejobasic/Layr-Sequencer' target="_blank" rel="noreferrer">GITHUB</a>|
          <a className='link-tag' href='http://www.layrsequencer.com/' target="_blank" rel="noreferrer">LIVE</a>
        </div>
      </div>
      </motion.div>
    </div>
  )
}

export default Layr