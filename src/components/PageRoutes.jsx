import React from 'react'
import { Routes, Route ,Navigate } from 'react-router-dom';
import Clock from './Clock'
import Timer from './Timer'
import Stopwatch from './Stopwatch';
import Alarm from './Alarm';

const PageRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Navigate replace  to="/alarm" />} />
        <Route path="/alarm" element={ <Alarm/> } />
        <Route path='/clock' element={ <Clock /> } />
        <Route path='/timer' element={ <Timer /> }/>
        <Route path='/stopwatch' element={ <Stopwatch/>} />
      </Routes>
  )
}

export default PageRoutes