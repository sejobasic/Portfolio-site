import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './styling/home.css';
import Cursor from './components/Cursor'
import AnimatedRoutes from './components/AnimatedRoutes';
import Loader from './components/Loader'


function App() {
  const [loading, setLoading] = useState(false)
  
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [theme, setTheme] = useState(storedDarkMode)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className={theme}>
      <AnimatePresence>
        <Cursor />
        {loading ? (
          <motion.div
            key='loader'
          >
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
        <Router>
          <AnimatedRoutes />
        </Router>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
