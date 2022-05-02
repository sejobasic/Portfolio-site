import React from 'react'
import { points } from '../utils/designData'
import '../design.css'

function DesignItem({src, index, columnOffset}) {

  const values = points[index]
  if (!values) return null

  const [row, column, spanRow, spanColumn] = values

  return (
    <div 
      className='design-item'
      style={{
        gridArea: `${row} / ${column + columnOffset} 
        / span ${spanRow} / span ${spanColumn}`
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