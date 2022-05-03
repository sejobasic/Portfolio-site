import React, { useRef, useEffect } from 'react'
import DesignItem from './DesignItem'
import { imageData } from '../utils/designData'
import LocomotiveScroll from 'locomotive-scroll'
import '../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import '../design.css'

function DesignIndex() {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef) {
      new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction: 'horizontal',
        multiplier: 0.5,
        scrollFromAnywhere: true,
        gestureDirection: 'both'
      })
    }
  }, [])
  

  const images = imageData.map((tupples, index) => 
    tupples.map((url, elementIndex) => (
      <DesignItem 
        key={url} 
        index={elementIndex} 
        src={url} 
        columnOffset={index*14} 
      />
    ))
  )
  return (
    <div className='main-container'>
      <div className="scroll-container" data-scroll-container  ref={scrollRef}>
        <div className="content" data-scroll-section>
          <div className="gallery">
            {images}
            <div className="gallery-helper">
              SCROLL TO DISCOVER MORE
            </div>
            <div className="gallery-text fill">
              DESIGN WORK BY SEJO BASIC
            </div>
            <div className="gallery-text outline">
              DESIGN WORK BY SEJO BASIC
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignIndex