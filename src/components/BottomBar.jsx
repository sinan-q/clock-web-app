import React from 'react'
import { Link } from 'react-router-dom';


const BottomBar = () => {
  return (
    <div className='fixed bottom-11 bg-white w-80 flex gap-2 justify-center py-2 px-5'>
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
              icon={"hourglass_bottom"}
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
                <Link to={route} className="flex items-center flex-col"    >
                    <div className="material-icons px-2 w-fit">{icon}</div>
                    <p className=' text-xs'>{label}</p>
                </Link>  
    
    )
}

export default BottomBar

