import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Marquee from 'react-fast-marquee'
import '../styling/projects.css'
import shape2 from '../assets/shape2.png'
import projectData from '../utils/projectData'
import Title from './Title'
import Media from './Media'

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (event) => {
      event.preventDefault()
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const { x, y } = useMousePosition()

  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  const projectVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  }

  const shapeVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
      },
    },
  }

  return (
    <div className='projects-main-reel' id='projects'>
      <Marquee speed={100} gradient={false}>
        <div className='projects-reel'>
          <span className='reel-item'>&nbsp; PROJECTS</span>
          <span className='reel-item-outline'>&nbsp; PROJECTS</span>
        </div>
      </Marquee>
      <motion.div
        className='shape-container'
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
        initial='hidden'
        animate={controls}
        variants={shapeVariant}
        ref={ref}
      >
        <img src={shape2} alt='shape' />
      </motion.div>
      <div className='project-wrapper'>
        <motion.div
          className='project-list'
          initial='hidden'
          animate={controls}
          variants={projectVariant}
          ref={ref}
        >
          {projectData.map(({ title, id, link }, index) => (
            <Title
              id={id}
              link={link}
              title={title}
              setActiveIndex={setActiveIndex}
              index={index}
            />
          ))}
        </motion.div>
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
