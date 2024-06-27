import React from 'react'

const BottomBar = () => {
  return (
    <div className='flex gap-2 justify-center px-5 w-dvw'>
            <BottomBarElement
              icon={"alarm"}
              label={"Alarm"}
            />
            <BottomBarElement
              icon={"schedule"}
              label={"Clock"}
            />
            <BottomBarElement
              icon={"hourglass_bottom"}
              label={"Timer"}
            />
            <BottomBarElement
              icon={"timer"}
              label={"StopWatch"}
            />
            <BottomBarElement
              icon={"bedtime"}
              label={"BedTime"}
            />
            

    </div>
  )
}

const BottomBarElement = ({icon, label}) => {
    return (
                <a href='#' className="flex items-center flex-col"    >
                    <div className="material-icons px-2 pt-2 w-fit">{icon}</div>
                    <p className=''>{label}</p>
                </a>  
    
    )
}

export default BottomBar

