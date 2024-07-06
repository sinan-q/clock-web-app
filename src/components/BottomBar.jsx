import React from 'react'
import { Link } from 'react-router-dom';


const BottomBar = () => {
  return (
    <div className='fixed bg-secondary-container bottom-11 w-80  pt-1 px-5'>
      <div className="flex pb-4 justify-center">
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
      <div className='w-full h-1 pb-3'>
        <div className="w-24 h-1 rounded-xl m-auto bg-black "> </div>
      </div>
            
            

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

