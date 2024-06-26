import React from 'react'

const BottomBar = () => {
  return (
    <div className='flex gap-2 justify-center px-5 w-dvw'>
            <BottomBarElement/>
            <BottomBarElement/>
            <BottomBarElement/>
            <BottomBarElement/>
            <BottomBarElement/>

    </div>
  )
}

const BottomBarElement = () => {
    return (
                <a href='#' class=" "    >
                    <div className="material-icons content-center px-2 pt-2 w-fit">alarm</div>
                    <p className='w-fit'>Alarm</p>
                </a>  
    
    )
}

export default BottomBar

