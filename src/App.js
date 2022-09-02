import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import './styling/home.css';
import './styling/navbar.css';
import Cursor from './components/Cursor'
import Home from './components/Home';
import Loader from './components/Loader'


function App() {
  const [loading, setLoading] = useState(false)
  
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [theme, setTheme] = useState(storedDarkMode)
  

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const existingPreference = localStorage.getItem('DARK_MODE', theme);
    if (existingPreference) {
     ( existingPreference === "dark")
        ? setTheme("dark")
        : setTheme("light");
    } else {
      setTheme("light");
      localStorage.setItem("DARK_MODE", "dark");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div id='home' className={theme}>
      <AnimatePresence>
        <Cursor />
        {loading ? (
          <motion.div
            key='loader'
            
          >
            <Loader theme={theme} setLoading={setLoading} />
          </motion.div>
        ) : (
          <Home theme={theme} toggle={toggleTheme} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
