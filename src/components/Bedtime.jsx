import React from 'react'
import svg from '../assets/alarm_bedtime.gif'

const Bedtime = () => {
  return (
    <div className="flex-1 text-center m-2 ">
        <div className=' text-xl font-medium leading-6 my-6'>Set a consistent bedtime for better sleep</div>
        <div className=' text-sm leading-4'>Choose a regular Bedtime, disconnect from your device and listen to soothing sounds</div>
        <div className=" mt-8">
            <img className='m-auto' src={svg} alt="loading..." />
       </div>
        <div className="bg-slate-500 w-fit px-4 py-2 rounded-2xl m-auto hover:bg-slate-600 text-md mt-12 text-white ">Get Started</div>
    </div>
  
  )
}

export default Bedtime