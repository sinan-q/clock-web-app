import React from 'react'

const Timer = () => {
  return (
    <div className='flex-1 m-4'>
        <div className='m-4'>
            <div className="timer mb-4 flex items-end w-full justify-center">
                <div className="text-5xl">00</div>
                <div className="">h</div>
                <div className=" text-5xl">00</div>
                <div className="">m</div>
                <div className=" text-5xl">00</div>
                <div className="">s</div>
            </div>
            <div className=" grid grid-cols-3 place-items-center">
                <TimerButton 
                    text= {1}
                />
                <TimerButton 
                    text= {2}
                />
                <TimerButton 
                    text= {3}
                />
                <TimerButton 
                    text= {4}
                />
                <TimerButton 
                    text= {5}
                />
                <TimerButton 
                    text= {6}
                />
                <TimerButton 
                    text= {7}
                />
                <TimerButton 
                    text= {8}
                />
                <TimerButton 
                    text= {9}
                />
                <TimerButton 
                    text= {"00"}
                />
                <TimerButton 
                    text= {0}
                />
                <TimerButton 
                    text= {"<-"}
                />
            </div>
        </div>
    </div>
  )
}

export default Timer


const TimerButton = ({text}) => {
  return (
    <div className='border rounded-full text-center content-center h-16 w-16 text-white  bg-brown-600 '>{text}</div>
  )
}