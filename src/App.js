import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './styling/home.css';
import './styling/navbar.css';
import Cursor from './components/Cursor'
import AnimatedRoutes from './components/AnimatedRoutes';
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
        ? setTheme("light")
        : setTheme("dark");
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
        <Router>
          <AnimatedRoutes theme={theme} toggle={toggleTheme} />
        </Router>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
