import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Marquee from "react-fast-marquee";
import '../styling/photo.css'
import close from '../assets/close.png'
import designData  from '../utils/designData'
import photoData  from '../utils/photoData'
import Tilt from 'react-parallax-tilt';
import useSound from 'use-sound';
import photosound from '../assets/wand.wav'
import modalsound from '../assets/fairy.wav'
import loadsound from '../assets/pop2.wav'
import lesssound from '../assets/pop.wav'


function Photo() {
const [modal, setModal] = useState(false)
const [tempImgSrc, setTempImgSrc] = useState('')
const [visible, setVisible] = useState(11)

const showMoreItems = () => {
  setVisible(prevValue => prevValue + 5)
  playLoad()
}

const showLessItems = () => {
  setVisible(prevValue => prevValue - 5)
  playLess()
}

const [playPhoto] = useSound(photosound, { volume: 0.1 });
const [playModal] = useSound(modalsound, { volume: 0.1 });
const [playLoad] = useSound(loadsound, { volume: 0.1 });
const [playLess] = useSound(lesssound, { volume: 0.1 });

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModal(true)
  }

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

  const photoVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, 
        duration: 1
      }
    }
  }

  return (
    <div className='photo-main-reel' id='photos'>
       <Marquee
        className='marquee'
        speed={80}
        gradient={false}
      >
        <div className='photo-reel' >
          <div className='reel-item'>&nbsp;PHOTOGRAPHY</div>
          <div className='reel-item'>&nbsp;+</div>
          <div className='reel-item-outline'>&nbsp;DESIGN</div>
          <div className='reel-item'>&nbsp;+</div>
        </div>
      </Marquee>
      <div  className={modal ? 'modal open' : 'modal'}>
        <Tilt glareEnable={true} glareColor='#fbdce2' glarePosition='all' glareMaxOpacity={0.5} perspective={800} gyroscope={true} tiltMaxAngleX={35} tiltMaxAngleY={35}>
          <div onClick={playModal} >
            <img  className='modal-img' src={tempImgSrc} alt='images modal' onClick={() => setModal(false)}  />
          </div>
        </Tilt>
        <div onClick={playModal} >
          <img className='close' src={close} alt='close button' onClick={() => setModal(false)} />
        </div>
        <p>PHOTOGRAPHY AND DESIGN WORK BY SEJO BASIC</p>
      </div>
      <motion.div 
        className='gallery'
        initial='hidden'
        animate={controls}
        variants={photoVariant}
        ref={ref}
      >
        {designData.slice(0, visible).map((item, index) => {
          return (
            <motion.div 
              drag 
              dragConstraints={{ left:0, top:0, right: 0, bottom: 0}}
              dragElastic={0.7}
              className='images' 
              key={index} 
              onClick={() => getImg(item.imgSrc)}
            >
              <img onClick={playPhoto} src={item.imgSrc} alt='photography' />
            </motion.div>
          )
        })}
        {photoData.slice(0, visible).map((item, index) => {
          return (
            <motion.div
              drag 
              dragConstraints={{ left:0, top:0, right: 0, bottom: 0}}
              dragElastic={0.7}
              className='images' 
              key={index} 
              onClick={() => getImg(item.imgSrc)}
            >
              <img onClick={playPhoto} src={item.imgSrc} alt='photography' />
            </motion.div>
          )
        })}
        </motion.div>
      <motion.div 
        className='load-btn'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1}}
      >
        <button  className='link-tag' onClick={showMoreItems}>LOAD MORE</button>
        <button className='link-tag' onClick={showLessItems}>LOAD LESS</button>
      </motion.div>
    </div>
  )
}

export default Photo