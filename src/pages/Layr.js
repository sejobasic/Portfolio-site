import React from 'react'
import { motion } from 'framer-motion'
import useSound from 'use-sound';
import '../styling/projects.css'
import { Link } from 'react-router-dom'
import layr from '../assets/layr.png'
import wooshsound from '../assets/woosh1.wav'
import '../styling/home.css';
import '../styling/navbar.css';


function Layr() {
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
      <Link to='/simple'>
        <p onClick={playWoosh} className='link-tag next'>NEXT PROJECT</p>
      </Link>
      </div>
      <div className='project-image-container'>
        <img className='project-image' src={layr} alt='Project Img Header' />
      </div>
      <div className='project-text-container'>
        <p className='project-header'>Layr Sequencer</p>
        <p className='project-text'>
            Layr Sequencer is built with a React Front-end and Rails Back-end for Authentication. <br />
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