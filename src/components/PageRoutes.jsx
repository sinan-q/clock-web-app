import React from 'react'
import { Routes, Route ,Navigate } from 'react-router-dom';
import ClockApp from './Clock/App';

const PageRoutes = () => {
  return (
    <Routes>
        <Route path='/clock/*' element={ <ClockApp /> } />
      </Routes>
  )
}

export default PageRoutes