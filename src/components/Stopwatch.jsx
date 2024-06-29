import React from 'react'
import FAB from './FAB'

const Stopwatch = () => { 
  return (

    <>
    <div className='flex-1 m-4 flex flex-col items-center justify-center '>
        <div className="border-8 border-gray-600 w-64 h-64 content-center rounded-full  ">
            <div className=" text-center text-6xl">00</div>
            <div className=" text-center leading-3 pl-8 text-3xl  ">00</div>
        </div>
    </div>
    <FAB 
    icon={"play_arrow"}
    />
    </>
  )
}

export default Stopwatch