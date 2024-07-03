import React, {useState} from 'react'
import { Routes, Route ,Navigate } from 'react-router-dom';


import StatusBar from './components/StatusBar'
import BottomBar from './components/BottomBar'
import Alarm from './components/Alarm'
import TopAppBar from './components/TopAppBar'
import Clock from './components/Clock'
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch';

const App = () => {
  return (  
    <div className="w-dvw h-dvh flex overflow-hidden z-10 justify-center">
    <div class=" bg-white box-content border-4 w-80 relative my-10 border-cyan-900 flex flex-col">
      <StatusBar></StatusBar>
      <TopAppBar/>
      <Routes>
        <Route exact path="/" element={<Navigate replace  to="/alarm" />} />
        <Route path="/alarm" element={ <Alarm/>} />
        <Route path='/clock' element={ <Clock /> } />
        <Route path='/timer' element={ <Timer /> }/>
        <Route path='/stopwatch' element={ <Stopwatch/>} />
      </Routes>
      <BottomBar></BottomBar>
    </div>
    </div>
  )
}

export default App