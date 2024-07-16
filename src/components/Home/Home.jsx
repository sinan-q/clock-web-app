import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex-1 bg-[url('assets\boliviainteligente-VbAk6ZP_Wt8-unsplash.jpg')] ">
        <div className=' absolute  bottom-0 justify-end m-2    '>
        <div className="bottomAppBar flex gap-4 bottom-0 m-2">
            <AppIcon
             src={"./src/assets/google-calculator.svg"}
             name={"Calculator"}
             route={"/calculator"}
             />
             <AppIcon
             src={"./src/assets/timer-5861.svg"}
             name={"Clock"}
             route={"/clock"}
             />
        </div>
    </div>
    </div>
    
  )
}

export default Home

const AppIcon = ({src, name, route}) => {

    return (
      <Link to={route} className=" items-center flex flex-col ">
        <div className="bg-slate-400 rounded-lg">
            <img className="h-12 w-12" src={src} />
        </div>
        <div className=" text-white  text-xs">{name}</div>
      </Link>
    )
  }