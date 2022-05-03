import React from 'react'

function Title({title, setActiveIndex, index}) {
  return (
    <div className='project-item'>
      <div 
        className='project-title'
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}>
        <div>{title}</div>
      </div>
    </div>
  )
}

export default Title