import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



function Title({ title, setActiveIndex, index, link }) {
  return (
    <motion.div 
      className='project-item'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Link to={link}>
      <div className='project-item'>
        <div 
          className='project-title'
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(-1)}>
          <div className='project-line'>{title}</div>
        </div>
      </div>
      </Link>
    </motion.div>
  )
}

export default Title