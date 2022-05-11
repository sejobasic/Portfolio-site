import React, { useState } from 'react'
import Contact from './Contact'
import Projects from './Projects'
import Photo from './Photo'
import Navbar from './Navbar'
import '../styling/home.css';
import '../styling/navbar.css';

function Home() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  
  return (
    <div className='home'>
      <div className={theme}>
        <div className='noise'>
          <div className='App'>
            <Navbar theme={theme} toggle={toggleTheme} />
            <div className="container">
              <div className="container1">
                <div className="txt-line" id="sejo">
                  <p>Sejo Basic</p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="left-side-quote">
              <p> HI MY NAME IS SEJO, I AM A SOFTWARE ENGINEER AND GRAPHIC DESIGNER WITH A FOCUS ON, <br /> 
              BUT NOT LIMITED TO, FRONT-END DEVELOPMENT AND CREATIVE DESIGN. <br />
              WITH A BACKGROUND IN DESIGN, I BRING ARTISTIC DETAIL TO FRONT-END DEVELOPMENT. <br />
              MY PASSION FOR CREATIVITY MOTIVATES ME TO CONTINUOUSLY EXPAND MY SKILL SET <br />
              THROUGH NEW TECHNOLOGIES, INSPIRE OTHERS, AND WORK COLLECTIVELY TO BRING NEW IDEAS TO LIFE.
              </p>
            </div>
            <div className="container">
              <div></div>
              <div className="container2">
                <div className='wrapper'>
                  <div className="txt-line-title" id="digital">
                    <div className='line-title'></div>
                      <span>Creative Developer</span>
                      <span>Graphic Designer</span>
                      <span>Musician</span>
                      <span>Artist</span>
                      <span>Creative Developer</span>
                  </div>
                </div>
              </div>
            </div>
            <Projects />
            <Photo />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home