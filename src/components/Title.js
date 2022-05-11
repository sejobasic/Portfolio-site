import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



function Title({ title, setActiveIndex, index, link }) {
  return (
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
  )
}

export default Title