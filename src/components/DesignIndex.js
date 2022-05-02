import React from 'react'
import DesignItem from './DesignItem'
import { imageData } from '../utils/designData'
import '../design.css'

function DesignIndex() {

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
      <div className="scroll-container">
        <div className="content">
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