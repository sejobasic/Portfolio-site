import React from 'react'
import '../design.css'

function DesignItem({src, index, columnOffset}) {

  const values = points[index]
  

  return (
    <div 
      className='design-item'
      style={{
        gridArea:
      }}
      >
      <div className="design-item-image">
        <div 
          className="design-item-imginner"
          style={{backgroundImage: `url(${src})`}}
        ></div>
      </div>
    </div>
  )
}

export default DesignItem