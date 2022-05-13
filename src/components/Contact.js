import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import shape2 from '../assets/shape2.png'
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

  return (
    <div className='contact-main-reel'>
      <div className='contact-reel'>
        <div className='reel-item'>&nbsp;WORK</div>
        <div className='reel-item-outline'>&nbsp;WITH</div>
        <div className='reel-item'>&nbsp;ME</div>
        <div className='reel-item-outline'>&nbsp;WORK</div>
        <div className='reel-item'>&nbsp;WITH</div>
        <div className='reel-item-outline'>&nbsp;ME</div>
        <div className='reel-item'>&nbsp;WORK</div>
        <div className='reel-item-outline'>&nbsp;WITH</div>
        <div className='reel-item'>&nbsp;ME</div>
        <div className='reel-item-outline'>&nbsp;WORK</div>
        <div className='reel-item'>&nbsp;WITH</div>
        <div className='reel-item-outline'>&nbsp;ME</div>
        <div className='reel-item'>&nbsp;WORK</div>
        <div className='reel-item-outline'>&nbsp;WITH</div>
        <div className='reel-item'>&nbsp;ME</div>
        <div className='reel-item-outline'>&nbsp;WORK</div>
        <div className='reel-item'>&nbsp;WITH</div>
        <div className='reel-item-outline'>&nbsp;ME</div>
      </div>
      <div className='contact-links'>
        <motion.div
          id='contact'
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.3, duration: 2, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://github.com/sejobasic/Layr-Sequencer' 
          target="_blank" 
          rel="noreferrer">EMAIL</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item2}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.2, duration: 2, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://github.com/sejobasic/Layr-Sequencer' 
          target="_blank" 
          rel="noreferrer">LINKEDIN</a>
         </motion.div> 
         <motion.div
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.4, duration: 2, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://github.com/sejobasic/Layr-Sequencer' 
          target="_blank" 
          rel="noreferrer">GITHUB</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item2}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.6, duration: 2, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://github.com/sejobasic/Layr-Sequencer' 
          target="_blank" 
          rel="noreferrer">CODE SANDBOX</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.5, duration: 2, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://github.com/sejobasic/Layr-Sequencer' 
          target="_blank" 
          rel="noreferrer">INSTAGRAM</a>
         </motion.div>
         <motion.div
          className='contact-contents'
          variants={item1}
          initial='hidden'
          animate={controls}
          ref={ref}
          transition={{ delay: 0.7, duration: 2, type: 'tween' }}
        >
         <a 
          className='link-tag' 
          href='https://github.com/sejobasic/Layr-Sequencer' 
          target="_blank" 
          rel="noreferrer">RESUME</a>
         </motion.div>
         <motion.div 
        className='shape-container'
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