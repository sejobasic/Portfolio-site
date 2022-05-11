import React from 'react'
import { motion } from 'framer-motion'
import '../styling/projects.css'
import { Link } from 'react-router-dom'
import simple from '../assets/simple.png'

function Simple() {
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
        <Link to='/trails'>
          <p className='link-tag next'>NEXT PROJECT</p>
        </Link>
      </div>
      <div className='project-image-container'>
        <img className='project-image' src={simple} alt='Project Img Header' />
      </div>
      <div className='project-text-container'>
        <p className='project-header'>Simple Fridge</p>
        <p className='project-text'>
          Simple Fridge was built with a React Front-end and Ruby/Sinatra Back-end.<br />
          It was created during a 1-week Group Project sprint at Flatiron School.<br />
          Simple Fridge is an easy to use application that keeps track of the grocery<br />
          items in your fridge and shows how many days left until the items expire.<br />
          The user has the ability to add new items and remove current items from their fridge.<br /> 
        </p>
        <div className='link-container'>
          <a className='link-tag' href='https://github.com/weiwei-out/MagicFridge' target="_blank" rel="noreferrer">GITHUB</a>
        </div>
      </div>
      </motion.div>
    </div>
  )
}

export default Simple