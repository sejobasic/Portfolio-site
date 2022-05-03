import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import '../navbar.css'

function Navbar() {

  const navItems = [...document.querySelectorAll('.nav-item')]

  navItems.forEach(item => {
    let word = item.children[0].children[0].innerText.split('')
    item.children[0].innerHTML = ''
    word.forEach((letter, index) => {
      item.children[0].innerHTML += `<span style="--index: ${index};">${letter}</span>`;
    })
    let cloneDiv = item.children[0].cloneNode(true)
    cloneDiv.style.position = 'absolute'
    cloneDiv.style.left = '0'
    cloneDiv.style.top = '0'
    item.appendChild(cloneDiv)
  })

  return (
      <div className='navbar'>
        <a className='nav-item' href='#'>
          <div>
            <span className='nav-item-text'>HOME</span>
          </div>
        </a>
        <a className='nav-item' href='#'>
          <div>
            <span className='nav-item-text'>PROJECTS</span>
          </div>
        </a>
        <a className='nav-item' href='#'>
          <div>
            <span className='nav-item-text'>P+D</span>
          </div>
        </a>
        <a className='nav-item' href='#'>
          <div>
            <span className='nav-item-text'>CONTACT</span>
          </div>
        </a>
        {/* <a href="javascript:void(0)">P+D</a>
        <a href="javascript:void(0)">PROJECTS</a>
        <a href="javascript:void(0)">HOME</a> */}
      </div>
  )
}

export default Navbar