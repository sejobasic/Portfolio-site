import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Contact from './Contact'
import Projects from './Projects'
import Photo from './Photo'
import Navbar from './Navbar'
import '../styling/home.css'
import '../styling/navbar.css'

function Home({ theme, toggle }) {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  const titleVariant = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: {
      x: 10,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 3,
        type: 'tween',
      },
    },
  }

  const quoteVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 3,
        type: 'tween',
      },
    },
  }

  const roleVariant = {
    hidden: { x: '200vw', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 3,
        type: 'tween',
      },
    },
  }

  return (
    <div className='main'>
      <div className={theme}>
        <div className='App'>
          <Navbar theme={theme} toggle={toggle} />
          <div className='home-container'>
            <div ref={ref} className='container'>
              <motion.div
                className='container1'
                initial='hidden'
                animate={controls}
                variants={titleVariant}
              >
                <div className='txt-line' id='sejo'>
                  <p>Sejo Basic</p>
                </div>
              </motion.div>
              <div></div>
            </div>
            <motion.div
              className='left-side-quote'
              initial='hidden'
              animate={controls}
              variants={quoteVariant}
            >
              <p ref={ref}>
                {' '}
                HI MY NAME IS SEJO, I AM A SOFTWARE ENGINEER AND GRAPHIC DESIGNER <br />
                BASED IN ARIZONA. I SPECIALIZE IN FRONT-END DEVELOPMENT,
                CREATIVE DESIGN AND USER EXPERIENCE. <br />
                MY PASSION FOR CREATIVITY MOTIVATES ME TO CONTINUOUSLY EXPAND MY
                SKILL SET THROUGH NEW <br />
                TECHNOLOGIES, INSPIRE OTHERS, AND WORK COLLECTIVELY TO BRING NEW
                IDEAS TO LIFE.
              </p>
            </motion.div>
            <div ref={ref} className='container'>
              <div></div>
              <motion.div
                className='container2'
                animate={controls}
                variants={roleVariant}
              >
                <div ref={ref} className='wrapper'>
                  <div className='txt-line-title' id='digital'>
                    <div className='line-title'></div>
                    <span>Creative Developer</span>
                    <span>Graphic Designer</span>
                    <span>Musician</span>
                    <span>Artist</span>
                    <span>Creative Developer</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <Projects />
          <Photo />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Home
