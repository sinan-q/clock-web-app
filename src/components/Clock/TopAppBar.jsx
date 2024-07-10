import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const TopAppBar = ({title}) => {

  return (
    <div className='flex justify-between pt-4 pb-1 px-4'>
        <div className=' text-xl'>{title}</div>
        <div className="dropdown relative">
        <div className='material-icons hover:bg-slate-200 rounded-md p-0.5'>more_vert</div>
          <div className="dropdown-content border bg-white border-black rounded-2xl hidden absolute z-10 right-0">
            <Link to="/settings" className=" p-2 text-sm" >Settings</Link>
            <Link to='/about' className=" p-2 text-sm" >About</Link>
          </div>
        </div>
        
    </div>
  )
}

export default TopAppBar