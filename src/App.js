import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './styling/home.css';
import './styling/navbar.css';
import Cursor from './components/Cursor'
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
      <div>
        <div >
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
