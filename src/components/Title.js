import React from 'react'
import useSound from 'use-sound'
import suctionsound from '../assets/suction.mp3'

function Title({ title, setActiveIndex, index, link }) {
  const [playSuction] = useSound(suctionsound, { volume: 0.3 })

  return (
    <div className='project-item'>
      <a href={link} target='_blank' rel='noreferrer'>
        <div
          className='project-title'
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(-1)}
        >
          <div onClick={playSuction} className='project-line'>
            {title}
          </div>
        </div>
      </a>
    </div>
  )
}

export default Title
