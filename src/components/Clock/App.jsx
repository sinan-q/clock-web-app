import React , {createContext, useEffect, useState} from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Alarm from './Alarm'
import Clock from './Clock'
import Timer from './Timer'
import Stopwatch from './Stopwatch'
import Bedtime from './Bedtime'
import TopAppBar from './TopAppBar'
import { AddRouteData } from '../../App'
import BottomBar from '../BottomBar'

export const ClockContext = createContext()

const ClockApp = () => {
    const [element, setElement] = useState(ClockRoutes.get("/clock"));
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');


    useEffect(() => {
        setElement(ClockRoutes.get(location.pathname.slice(location.pathname.lastIndexOf("/"))))
    }, [location])


  return (
    <ClockContext.Provider value={element}>
    <TopAppBar title={element.title} />
    {element.element}
    <Outlet/>
    <BottomBar bottomNavElements={bottomNavElements} routes={ClockRoutes} parent={"/clock"}/>
    </ClockContext.Provider>
    
  )
}

export default ClockApp

const parent = "/clock"
const bottomNavElements = ['/alarm','/clock','/timer','/stopwatch','/bedtime']
export const ClockRoutes = new Map();
    ClockRoutes.set( "/alarm", {title: "Alarm",element: <Alarm/>, icon: "alarm"} ),
    ClockRoutes.set( "/bedtime", { title:"Bedtime",element: <Bedtime/>, icon:"bedtime"}),
    ClockRoutes.set( "/clock", { title:"Clock",element: <Clock/> ,  icon: "schedule"}),
    ClockRoutes.set( "/timer", { title:"Timer",element: <Timer/>,icon:"hourglass_empty"}),
    ClockRoutes.set( "/stopwatch", { title:"Stopwatch",element: <Stopwatch/>, icon:"timer"})



