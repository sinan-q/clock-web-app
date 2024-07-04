import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


const titles = {
  "/alarm": "Alarm",
  "/clock": "Clock",
  "/timer": "Timer",
  "/stopwatch": "Stopwatch",
  "/bedtime" :"Bedtime",
  '/settings' : "Settings",
  "/about" : "About"
};

const TopAppBar = () => {
  const location = useLocation();
  const [title, setTitle] = useState(titles["/"]);

  useEffect(() => {
    setTitle(titles[location.pathname]);
  }, [location.pathname]);

  return (
    <div className='flex justify-between pt-4 pb-1 px-4'>
        <div className=' text-xl'>{title}</div>
        <div className="dropdown relative">
        <div className='material-icons'>more_vert</div>
          <div className="dropdown-content border bg-white border-black rounded-2xl hidden absolute z-10 right-0">
            <Link to="/settings" className=" p-2 text-sm" >Settings</Link>
            <Link to='/about' className=" p-2 text-sm" >About</Link>
          </div>
        </div>
        
    </div>
  )
}

export default TopAppBar