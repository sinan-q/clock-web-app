import React from 'react'
import { Link } from 'react-router-dom';


const BottomBar = () => {
  return (
    <div className='flex gap-2 justify-center px-5 w-dvw'>
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
                    <div className="material-icons px-2 pt-2 w-fit">{icon}</div>
                    <p className=''>{label}</p>
                </Link>  
    
    )
}

export default BottomBar

