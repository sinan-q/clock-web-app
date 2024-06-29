import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/alarm": "Alarm",
  "/clock": "Clock",
  "/timer": "Timer",
  "/stopwatch": "Stopwatch",
  "/bedtime" :"Bedtime"
};

const TopAppBar = () => {
  const location = useLocation();
  const [title, setTitle] = useState(titles["/"]);

  useEffect(() => {
    setTitle(titles[location.pathname]);
  }, [location.pathname]);

  return (
    <div className='flex justify-between p-4'>
        <div className=' text-xl'>{title}</div>
        <div className='material-icons'>more_vert</div>
    </div>
  )
}

export default TopAppBar