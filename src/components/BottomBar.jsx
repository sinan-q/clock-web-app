import React from 'react'
import { Link } from 'react-router-dom';


const BottomBar = ({bottomNavElements = null ,routes = null , parent}) => {
  return (
    <div className='relative bg-slate-200 bottom pt-1 '>
      <div className="flex pb-4 justify-center">
            {bottomNavElements && bottomNavElements.map((value) => {
              let element = routes.get(value)
              return <BottomBarElement
                icon={element.icon}
                label={element.title}
                route = {parent+value}
              />
            })}
            
      </div>
      <div className='w-full h-1 pb-3'>
        <div className="w-24 h-1 rounded-xl m-auto bg-black "> </div>
      </div>
            
            

    </div>
  )
}

const BottomBarElement = ({icon, label, route}) => {
    return (
                <Link to={route} className="group flex items-center mx-1 font-medium hover:font-semibold flex-col"    >
                    <div className="material-icons-outlined px-4 w-fit text-base group-hover:bg-slate-400 group-ZZhover:text-white rounded-xl">{icon}</div>
                    <p className='group-hover:font-bold text-xs '>{label}</p>
                </Link>  
    
    )
}

export default BottomBar

