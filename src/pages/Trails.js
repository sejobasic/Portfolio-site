import React from 'react'
import { motion } from 'framer-motion'
import '../styling/projects.css'
import { Link } from 'react-router-dom'
import trails from '../assets/trails.png'

function Trails() {

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
      <Link to='/layr'>
        <p className='link-tag next'>NEXT PROJECT</p>
      </Link>
    </div>
    <div className='project-image-container'>
      <img className='project-image' src={trails} alt='Project Img Header' />
    </div>
    <div className='project-text-container'>
      <p className='project-header'>Trails</p>
      <p className='project-text'>
        Trails is built with a React Front-end and Rails Back-end.<br />
        It was created during a 1-week Group Project sprint at Flatiron School.<br />
        As Avid Hikers ourselves we wanted to create an application that would make<br />
        finding new hiking spots and trails easier and connect with other hikers.<br />
        The user has the ability to see trails, add trails to their favorites list and<br />
        also leave a review comment on a specific trail.<br />
      </p>
      <div className='link-container'>
        <a className='link-tag' href='https://github.com/sejobasic/Trails-app' target="_blank" rel="noreferrer">GITHUB</a>
      </div>
    </div>
    </motion.div>
  </div>
  )
}

export default Trails