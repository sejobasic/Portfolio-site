import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Contact from './Contact'
import Projects from './Projects'
import Photo from './Photo'
import Navbar from './Navbar'
import '../styling/home.css';
import '../styling/navbar.css';

function Home() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [theme, setTheme] = useState(storedDarkMode)

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const controls = useAnimation();
  const { ref, inView } = useInView();  

  useEffect(() => {
    localStorage.setItem('DARK_MODE', theme);
  }, [theme]);


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const titleVariant = {
    hidden: { x: -1000, opacity: 0 },
    visible: {
      x: 10, 
      opacity: 1,
      transition: {
        delay: 0.3, 
        duration: 3, 
        type: 'tween'
      }
    }
  }

  const quoteVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 3, 
        duration: 3, 
        type: 'tween'
      }
    }
  }

  const roleVariant = {
    hidden: { x: 1100, opacity: 0 },
    visible: {
      x: 0, 
      opacity: 1,
      transition: {
        delay: 0.3, 
        duration: 3, 
        type: 'tween'
      }
    }
  }

  
  return (
    <div className='home'>
      <div className={theme}>
        <div className='noise'>
          <div className='App'>
            <Navbar theme={theme} toggle={toggleTheme} />
            <div className="container">
              <motion.div 
                className="container1"
                initial='hidden'
                animate={controls}
                variants={titleVariant}
                ref={ref}
              >
                <div className="txt-line" id="sejo">
                  <p>Sejo Basic</p>
                </div>
              </motion.div>
              <div></div>
            </div>
            <motion.div 
              className="left-side-quote"
              initial='hidden'
              animate={controls}
              variants={quoteVariant}
              ref={ref}
            >
              <p> HI MY NAME IS SEJO, I AM A SOFTWARE ENGINEER AND GRAPHIC DESIGNER WITH A FOCUS ON, <br /> 
              BUT NOT LIMITED TO, FRONT-END DEVELOPMENT AND CREATIVE DESIGN. <br />
              WITH A BACKGROUND IN DESIGN, I BRING ARTISTIC DETAIL TO FRONT-END DEVELOPMENT. <br />
              MY PASSION FOR CREATIVITY MOTIVATES ME TO CONTINUOUSLY EXPAND MY SKILL SET <br />
              THROUGH NEW TECHNOLOGIES, INSPIRE OTHERS, AND WORK COLLECTIVELY TO BRING NEW IDEAS TO LIFE.
              </p>
            </motion.div>
            <div className="container">
              <div></div>
              <motion.div 
                className="container2"                     
                animate={controls}
                variants={roleVariant}
                ref={ref}>
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
              </motion.div>
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