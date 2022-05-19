import React from 'react'
import { motion } from 'framer-motion'
import useSound from 'use-sound';
import wooshsound from '../assets/woosh1.wav'
import '../styling/projects.css'
import { Link } from 'react-router-dom'
import trails from '../assets/trails.png'

function Trails() {
  const [playWoosh] = useSound(wooshsound, { volume: 0.1 });

  return (
    <div className='noise'>
    <motion.div 
        className='project-page'
        initial={{width: 0, opacity: 0}}
        animate={{width: '100%', opacity: 1}}
        exit={{x: window.innerWidth, transition: { duration: 0.4 }}}
    >
    <div className='project-links'>
      <Link to='/'>
        <p onClick={playWoosh} className='link-tag home'>HOME</p>
      </Link>
      <Link to='/layr'>
        <p onClick={playWoosh} className='link-tag next'>NEXT PROJECT</p>
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