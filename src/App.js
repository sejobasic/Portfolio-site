import React, { useState } from 'react';
import ReactSwitch from 'react-switch'
import './styling/home.css';
import './styling/navbar.css';
import Home from './components/Home'
import Projects from './components/Projects'
import Cursor from './components/Cursor'
import Photo from './components/Photo'
import Navbar from './components/Navbar'
import Contact from './components/Contact'


function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
      <div className={theme}>
        <div className='noise'>
          <div className='App'>
            <Cursor />
            <Navbar theme={theme} toggle={toggleTheme} />
            <Home />
            <Projects />
            <Photo />
            <Contact />
          </div>
        </div>
      </div>
  );
}

export default App;
