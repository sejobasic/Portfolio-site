import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layr from '../pages/Layr'
import Simple from '../pages/Simple'
import Trails from '../pages/Trails'
import Home from '../components/Home'


function AnimatedRoutes() {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/layr" element={<Layr />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/Trails" element={<Trails />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes