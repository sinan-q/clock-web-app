import React from 'react'
import { Link } from 'react-router-dom';


const BottomBar = () => {
  return (
    <div className='fixed pb-5 bg-secondary-container bottom-11 w-80 flex justify-center py-1 px-5'>
            <BottomBarElement
              icon={"alarm"}
              label={"Alarm"}
              route = {"/alarm"}
            />
            <BottomBarElement
              icon={"schedule"}
              label={"Clock"}
              route = {"/clock"}

            />
            <BottomBarElement
              icon={"hourglass_empty"}
              label={"Timer"}
              route = {"/timer"}

            />
            <BottomBarElement
              icon={"timer"}
              label={"StopWatch"}
              route = {"/stopwatch"}

            />
            <BottomBarElement
              icon={"bedtime"}
              label={"BedTime"}
              route = {"/bedtime"}

            />
            

    </div>
  )
}

const BottomBarElement = ({icon, label, route}) => {
    return (
                <Link to={route} className="flex items-center mx-1 font-medium hover:font-semibold flex-col"    >
                    <div className="material-icons-outlined px-4 w-fit text-base hover:bg-brown-100 rounded-xl">{icon}</div>
                    <p className=' text-xs '>{label}</p>
                </Link>  
    
    )
}

export default BottomBar

