import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './styling/home.css';
import './styling/navbar.css';
import Cursor from './components/Cursor'
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [theme, setTheme] = useState(storedDarkMode)


  return (
      <div>
        <div className={theme}>
          <div className='App'>
            <Router>
              <Cursor />
              <AnimatedRoutes />
            </Router>
          </div>
        </div>
      </div>
  );
}

export default App;
