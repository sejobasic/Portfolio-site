import React, {useRef, useEffect, useState} from 'react'
import '../styling/projects.css'
import shape2 from '../assets/shape2.png'
import projectData from '../utils/projectData'
import Title from './Title'
import Media from './Media'

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

  useEffect(() => {

    const updateMousePosition = event => {
      event.preventDefault();
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const {x, y} = useMousePosition()

  return (
    <div className='projects-main-reel' id='projects'>
      <div className='projects-reel'>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item-outline'>&nbsp; PROJECTS</div>
      </div>
      <div className='shape-container'>
      <img src={shape2} alt="shape" />
      </div>
      <div className='project-wrapper'>
        <div className='project-list'>
          {projectData.map(({title, link}, index) => (
            <Title 
              title={title} 
              link={link}
              setActiveIndex={setActiveIndex}
              index={index}
            />
          ))}
        </div>
        <div className='project-media'>
          {projectData.map(({ mediaUrl }, index) => {
            const isActive = index === activeIndex
            const xPos = isActive ? x : 0
            const yPos = isActive ? y : 0

            return <Media url={mediaUrl} active={isActive} x={xPos} y={yPos} />
          })}
        </div>
      </div>
      {/* <div className='shape-container-bottom'>
      <img src={shape2} alt="shape" />
      </div> */}
    </div>
  )
}

export default Projects