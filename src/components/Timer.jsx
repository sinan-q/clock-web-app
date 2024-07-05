import React, {useEffect, useState} from 'react'
import FAB from './FAB'

const Timer = () => {
    const [timer, setTimer] = useState([0,0,0,0,0,0])
    const setTime = (text) => {
        setTimer((prev) => {
            let t = prev.slice()
            switch (text) {
                case "del":
                    t.pop()
                    t.unshift(0)
                    break;
                case '00':
                    t.shift()
                    t.shift()
                    t.push(0,0)
                    break;
            
                default:
                    t.shift()
                    t.push(text)
                    break;
            }
            return t
        })
    }
  return (
    <div className='flex-1 m-4'>
        <div className='m-4'>
            <div className="timer mb-4 flex items-end w-full justify-center">
                <div className="text-5xl">{timer[0]}{timer[1]}</div>
                <div className="">h</div>
                <div className=" text-5xl">{timer[2]}{timer[3]}</div>
                <div className="">m</div>
                <div className=" text-5xl">{timer[4]}{timer[5]}</div>
                <div className="">s</div>
            </div>
            <div className=" grid grid-cols-3 place-items-center mx-6">
                <TimerButton 
                    text= {1}
                    onClick = {()=>{setTime(1)}}
                />
                <TimerButton 
                    text= {2}
                    onClick = {()=>{setTime(2)}}

                />
                <TimerButton 
                    text= {3}
                    onClick = {()=>{setTime(3)}}

                />
                <TimerButton 
                    text= {4}
                    onClick = {()=>{setTime(4)}}

                />
                <TimerButton 
                    text= {5}
                    onClick = {()=>{setTime(5)}}

                />
                <TimerButton 
                    text= {6}
                    onClick = {()=>{setTime(6)}}

                />
                <TimerButton 
                    text= {7}
                    onClick = {()=>{setTime(7)}}

                />
                <TimerButton 
                    text= {8}
                    onClick = {()=>{setTime(8)}}

                />
                <TimerButton 
                    text= {9}
                    onClick = {()=>{setTime(9)}}

                />
                <TimerButton 
                    text= {"00"}
                    onClick = {()=>{setTime("00")}}

                />
                <TimerButton 
                    text= {0}
                    onClick = {()=>{setTime(0)}}

                />
                <TimerButton 
                    text= {"<"}
                    onClick = {()=>{setTime("del")}}

                />
            </div>
        </div>
        {timer.some((num) => num!=0) && <FAB
            icon={"play_arrow"}
        />}
    </div>
  )
}

export default Timer


const TimerButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='border rounded-full text-center content-center h-16 w-16 text-white  bg-brown-600 hover:bg-brown-400 active:text-xl '>{text}</button>
  )
}