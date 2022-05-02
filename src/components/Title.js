import React from 'react'

function Title({title, setActiveIndex, index}) {
  return (
    <div className='project-item'>
      <h3 
        className='project-title'
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}>
        <span>{title}</span>
      </h3>
    </div>
  )
}

export default Title