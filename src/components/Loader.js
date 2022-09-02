import React from 'react'
import Marquee from 'react-fast-marquee'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import '../styling/loader.css'

function Loader({ setLoading, theme }) {
  const marqueeTop = {
    hidden: {
      opacity: 0,
      y: -300,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 3,
      },
    },
  }

  const marqueeBottom = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 3,
      },
    },
  }

  const counter = {
    hidden: {
      opacity: 0,
      scale: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 3,
      },
    },
  }

  return (
    <div className={theme}>
      <div className='loader-container'>
        <Marquee
          className='marquee'
          speed={100}
          gradient={false}
          direction='right'
        >
          <motion.div
            className='marquee-top'
            variants={marqueeTop}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <span className='reel-item-loader'>&nbsp;WELCOME</span>
            <span className='reel-item-loader'>&nbsp;WELCOME</span>
            <span className='reel-item-loader'>&nbsp;WELCOME</span>
          </motion.div>
        </Marquee>
        <motion.div
          className='counter-container'
          variants={counter}
          initial='hidden'
          animate='visible'
          exit='exit'
          onAnimationComplete={() => setLoading(false)}
        >
          <CountUp className='counter' end={100} duration={3} />%
        </motion.div>
        <Marquee className='marquee' speed={100} gradient={false}>
          <motion.div
            className='marquee-top'
            variants={marqueeBottom}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <div className='marquee-bottom'>
              <span className='reel-item-outline-loader'>&nbsp;WELCOME</span>
              <span className='reel-item-outline-loader'>&nbsp;WELCOME</span>
              <span className='reel-item-outline-loader'>&nbsp;WELCOME</span>
            </div>
          </motion.div>
        </Marquee>
      </div>
    </div>
  )
}

export default Loader
