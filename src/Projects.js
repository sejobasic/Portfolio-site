import React, {useRef, useEffect} from 'react'
import './projects.css'
import layr from './assets/layr.png'
import simple from './assets/simple.png'
import { gsap } from 'gsap'
import * as THREE from 'three';

function Projects() {
  
  const imgRef = useRef(null)
  const imgRef2 = useRef(null)

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - imgRef.current.clientWidth / 1
      const mouseY = clientY - imgRef.current.clientHeight / 1
      imgRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - imgRef2.current.clientWidth / 1
      const mouseY = clientY - imgRef2.current.clientHeight / 1
      imgRef2.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  
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
      <div className='main-nav'>
        <a href='#' className='image-hover'>
          <span className='project-title' data-title='Layr Sequencer'>Layr Sequencer</span>
          <img className='project-img' ref={imgRef2} src={layr} alt='layr sequencer' />
        </a>
        <a href='#' className='image-hover'>
          <span className='project-title' data-title='Layr Sequencer'>Simple Fridge</span>
          <img className='project-img' ref={imgRef} src={simple} alt='layr sequencer' />
        </a>
      </div>
    </div>
  )
}

export default Projects