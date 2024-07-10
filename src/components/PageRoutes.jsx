import React from 'react'
import { Routes, Route ,Navigate } from 'react-router-dom';
import ClockApp from './Clock/App';
import CalculatorApp from './Calculator/App';

const PageRoutes = () => {
  return (
  <Routes>
        <Route exact path="/" element={<Navigate replace  to="/clock" />} />
        <Route path='/clock/*' element={ <ClockApp /> } />
        <Route path='/calculator' element={ <CalculatorApp /> } />
      </Routes>    
  )
}

export default PageRoutes