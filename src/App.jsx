import React, {useState} from 'react'
import StatusBar from './components/StatusBar'
import BottomBar from './components/BottomBar'
import Alarm from './components/Alarm'
import TopAppBar from './components/TopAppBar'
import Clock from './components/Clock'

const App = () => {
  return (  
    <div class="bg-white border-cyan-900 h-dvh w-dvw flex flex-col">
      <StatusBar></StatusBar>
      <TopAppBar/>
      <Clock />
      <BottomBar></BottomBar>
    </div>
    
  )
}

export default App