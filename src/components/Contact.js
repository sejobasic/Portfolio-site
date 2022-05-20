/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import {saveAs} from 'file-saver';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Marquee from "react-fast-marquee";
import shape2 from '../assets/shape2.png'
import img from '../assets/sejobasic-resume.pdf';
import '../styling/contact.css'
import '../styling/home.css';
import '../styling/navbar.css';

function Contact() {
  const controls = useAnimation();
  const { ref, inView } = useInView();  

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const item1 = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0 }
  }

  const item2 = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0 }
  }

  const shapeVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1, 
        duration: 2
      }
    }
  }

  function downloadImage() {
    saveAs(img, 'sejobasic-resume.pdf');
  }

  return (
    <div className='contact-main-reel' id='contact'>
       <Marquee
        speed={100}
        gradient={false}
      >
        <div className='contact-reel'>
          <span className='reel-item'>&nbsp;WORK</span>
          <span className='reel-item-outline'>&nbsp;WITH</span>
          <span className='reel-item'>&nbsp;ME</span>
          <span className='reel-item-outline'>&nbsp;WORK</span>
          <span className='reel-item'>&nbsp;WITH</span>
          <span className='reel-item-outline'>&nbsp;ME</span>
        </div>
      </Marquee>
      <div className='contact-links'>
        <motion.div
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.3, duration: 1, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='mailto:sejobasicwork@gmail.com' 
          target="_blank" 
          rel="noreferrer">EMAIL</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item2}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.2, duration: 1, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='http://www.linkedin.com/in/sejo-basic' 
          target="_blank" 
          rel="noreferrer">LINKEDIN</a>
         </motion.div> 
         <motion.div
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.4, duration: 1, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://github.com/sejobasic' 
          target="_blank" 
          rel="noreferrer">GITHUB</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item2}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.6, duration: 1, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://codesandbox.io/u/sejobasic/' 
          target="_blank" 
          rel="noreferrer">CODE SANDBOX</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.5, duration: 1, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://www.instagram.com/sejoforever/?hl=en' 
          target="_blank" 
          rel="noreferrer">INSTAGRAM</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.5, duration: 1, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://medium.com/@sejobasic' 
          target="_blank" 
          rel="noreferrer">BLOG</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.7, duration: 1, type: 'tween' }}
        >
         <a
          className='link-tag'
          onClick={downloadImage}
          rel="noreferrer">RESUME</a>
         </motion.div>
         <motion.div 
        className='shape-container'
        drag
        dragConstraints={{ left:0, top:0, right: 0, bottom: 0}}
        dragElastic={0.7}
        initial='hidden'
        animate={controls}
        variants={shapeVariant}
        ref={ref}
      >
        <img src={shape2} alt="shape" />
      </motion.div>
      </div>
    </div>
  )
}

export default Contact