import React, {useState} from 'react'


import StatusBar from './components/StatusBar'
import BottomBar from './components/BottomBar'
import TopAppBar from './components/TopAppBar'
import PageRoutes from './components/PageRoutes'


const App = () => {
  return (  
    <div className="w-dvw h-dvh flex overflow-hidden z-10 justify-center">
    <div class=" bg-white box-content border-4 w-80 relative my-10 border-cyan-900 flex flex-col">
      <StatusBar></StatusBar>
      <TopAppBar/>
      <PageRoutes/>
      <BottomBar></BottomBar>
    </div>
    </div>
  )
}

export default App