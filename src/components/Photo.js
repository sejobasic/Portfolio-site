import React, { useState} from 'react'
import '../styling/photo.css'
import close from '../assets/close.png'
import designData  from '../utils/designData'
import Tilt from 'react-parallax-tilt';


function Photo() {
const [modal, setModal] = useState(false)
const [tempImgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModal(true)
  }
 

  return (
    <div className='photo-main-reel'>
      <div className='photo-reel' id='photos'>
        <div className='reel-item'>&nbsp;PHOTOGRAPHY</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item-outline'>&nbsp;DESIGN</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item'>&nbsp;PHOTOGRAPHY</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item-outline'>&nbsp;DESIGN</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item'>&nbsp;PHOTOGRAPHY</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item-outline'>&nbsp;DESIGN</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item'>&nbsp;PHOTOGRAPHY</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item-outline'>&nbsp;DESIGN</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item'>&nbsp;PHOTOGRAPHY</div>
        <div className='reel-item'>&nbsp;+</div>
        <div className='reel-item-outline'>&nbsp;DESIGN</div>
        <div className='reel-item'>&nbsp;+</div>
      </div>
      <div className={modal ? 'modal open' : 'modal'}>
        <Tilt glareEnable={true} glareColor='#fbdce2' glarePosition='all' glareMaxOpacity={0.5} perspective={800} gyroscope={true} tiltMaxAngleX={35} tiltMaxAngleY={35}>
        <img className='modal-img' src={tempImgSrc} alt='images modal' onClick={() => setModal(false)}  />
        </Tilt>
        <img className='close' src={close} alt='close button' onClick={() => setModal(false)} />
        <p>PHOTOGRAPHY AND DESIGN WORK BY SEJO BASIC</p>
      </div>
      <div className='gallery'>
        {designData.map((item, index) => {
          return (
            <div className='images' key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt='photography' style={{width: '100%'}} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Photo