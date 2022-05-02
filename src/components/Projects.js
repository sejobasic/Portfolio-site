import React, {useRef, useEffect, useState} from 'react'
import '../projects.css'
import layr from '../assets/layr.png'
import simple from '../assets/simple.png'
import projectData from '../utils/projectData'
import Title from './Title'
import Media from './Media'
import { gsap } from 'gsap'
import * as THREE from 'three';

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
  
  // const imgRef = useRef(null)
  // const imgRef2 = useRef(null)

  // useEffect(() => {
  //   document.addEventListener('mousemove', (event) => {
  //     const { clientX, clientY } = event
  //     const mouseX = clientX - imgRef.current.clientWidth / 1
  //     const mouseY = clientY - imgRef.current.clientHeight / 1
  //     imgRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
  //   })
  // }, [])

  // useEffect(() => {
  //   document.addEventListener('mousemove', (event) => {
  //     const { clientX, clientY } = event
  //     const mouseX = clientX - imgRef2.current.clientWidth / 1
  //     const mouseY = clientY - imgRef2.current.clientHeight / 1
  //     imgRef2.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
  //   })
  // }, [])

  return (
    <div className='projects-main-reel'>
      <div className='projects-reel' id='projects'>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
        <div className='reel-item'>&nbsp; PROJECTS</div>
      </div>
      <div className='project-wrapper'>
        <div className='project-list'>
          {projectData.map(({title}, index) => (
            <Title 
              title={title} 
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
    </div>
  )
}

export default Projects