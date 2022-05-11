import React from 'react'
import { motion } from 'framer-motion'
import '../styling/projects.css'
import { Link } from 'react-router-dom'

function Simple() {
  return (
    <div className='noise'>
    <motion.div 
      className='project-page'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Link to='/'>
        <button>Click</button>
      </Link>
    <div>Layr</div>
    <div>Layr</div>
    <div>Layr</div>
    </motion.div>
  </div>
  )
}

export default Simple