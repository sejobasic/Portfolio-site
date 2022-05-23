import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layr from '../pages/Layr'
import Simple from '../pages/Simple'
import Trails from '../pages/Trails'
import Home from '../components/Home'

function AnimatedRoutes({ theme, toggle }) {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home theme={theme} toggle={toggle} />} />
        <Route path="/layr" element={<Layr theme={theme} />} />
        <Route path="/simple" element={<Simple theme={theme} />} />
        <Route path="/Trails" element={<Trails theme={theme} />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes