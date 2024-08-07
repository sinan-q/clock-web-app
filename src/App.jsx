import React, {useState} from 'react'


import StatusBar from './components/StatusBar'
import PageRoutes from './components/PageRoutes'


export function AddRouteData(parent, path, title, element, icon = null)  {
  return {
    parent: parent,
    path: path,
    title: title,
    element: element,
    icon: icon
  }
}
const App = () => {
  return (  
    <div className=" root w-svw h-svh flex overflow-hidden z-10 justify-center">
        <span></span>        <span></span>        <span></span>        <span></span> <span></span>
    <div class=" bg-white box-content border-4 w-80 max-h-[670px] relative my-10 border-cyan-900 flex flex-col">
      <StatusBar />
      <PageRoutes/>
    </div>
    </div>
  )
}

export default App
