import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useSound from 'use-sound';
import suctionsound from '../assets/suction.mp3'

function Title({ title, setActiveIndex, index, link }) {
  const [playSuction] = useSound(suctionsound, { volume: 0.3 });

  return (
      <Link to={link}>
      <div className='project-item'>
        <div 
          className='project-title'
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(-1)}
        >
          <div onClick={playSuction} className='project-line'>{title}</div>
        </div>
      </div>
      </Link>
  )
}

export default Title