import React, {useEffect, useState} from 'react'
import FAB from './FAB'

const Timer = () => {
    const [timer, setTimer] = useState([0,0,0,0,0,0])
    const setTime = (text) => {
        setTimer((prev) => {
            let t = prev.slice()
            switch (text) {
                case "<":
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
        <div className=''>
            <div className="timer my-8 flex items-end w-full justify-center">
                <div className="text-5xl">{timer[0]}{timer[1]}</div>
                <div className="text-sm me-2 pb-1">h</div>
                <div className=" text-5xl">{timer[2]}{timer[3]}</div>
                <div className="text-sm me-2 pb-1">m</div>
                <div className=" text-5xl">{timer[4]}{timer[5]}</div>
                <div className="text-sm pb-1">s</div>
            </div>
            <div className=" grid grid-cols-3 place-items-center mt-6 mx-6">
                {[1,2,3,4,5,6,7,8,9,"00",0,"<"].map((item) => <TimerButton 
                    text= {item}
                    onClick = {()=>{setTime(item)}}
                />)}
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
    <button onClick={onClick} className='border text-lg font-normal rounded-full text-center content-center h-20 w-20 text-white bg-slate-400 hover:bg-slate-600 active:text-2xl '>{text}</button>
  )
}