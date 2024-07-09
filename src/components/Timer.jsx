import React, {useEffect, useState} from 'react'
import FAB from './FAB'
import moment from 'moment/moment';

const Timer = () => {
    const [timers, setTimers] = useState([]);
    const [addTimer, setAddTimer] = useState(true)
    
    const toSeconds = (num1, num2, power) => (num1 * 10 + num2) * (60 ** power)
    const handleAddtimer = () => setAddTimer(!addTimer)

    const buttonClick = (t) => {
         let totalseconds =toSeconds(t[0], t[1], 2)+ toSeconds(t[2] ,t[3], 1)+ toSeconds(t[4],t[5],0)
         let hour = totalseconds/3600|0 
        let minute = (totalseconds%3600)/60|0
        let seconds = totalseconds%60
        
         setTimers([...timers, {title: (hour > 0 && hour + "h ") + (minute > 0 && minute + "m ") + seconds+"s Timer",totalseconds: totalseconds, left:totalseconds, enabled: null}])
         handleAddtimer()
    }

    return (<>
             {!addTimer ? <TimerHome
                timers={timers}
                onClick ={ handleAddtimer}
             /> : <TimerAdd
                setTimers={buttonClick}
            />  }
            </>
    )
}

const TimerAdd = ({setTimers}) => {
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
                {[1,2,3,4,5,6,7,8,9,"00",0,"<"].map((item, index) => <TimerButton 
                    key={index}
                    text= {item}
                    onClick = {()=>{setTime(item)}}
                />)}
            </div>
        </div>
        {timer.some((num) => num!=0) && <FAB
            icon={"play_arrow"}
            onClic={() => setTimers(timer)}
        />}
    </div>
  )
}

const TimerHome = ({timers , onClick}) => {
    return (
        <>
            {timers.map((timer) => 
                <Card
                    timer={timer}
                />
            )}
            <FAB
                icon={"add"}
                onClic={onClick}
            />
        </>
    )
}

export default Timer

const Card = ({timer}) => {
    const [left, setLeft] = useState(timer.left)
    const [enabled,setEnabled] = useState(timer.enabled)
    let hour = left/3600|0 
    let minute = (left%3600)/60|0
    let seconds = left%60
    timer.left = left

    const setEnable = (val) => {
        

        setEnabled(prev =>{
            !val && clearTimeout(prev);
            timer.enabled = val
            return val
        })


    }
    const timerFn = (enable = true, k=0) => {
        console.log(k)
        if(!enable && timer.left <= 0) setEnable(null)
        else if(enable && timer.left <= 0) {
            
                setLeft(timer.totalseconds + 1)
                timer.left = timer.totalseconds + 1
                timerFn(true,1)
            
        } 
        else if(!enable && timer.left > 0) setEnable(null)

        else if (enable && timer.left > 0){
            let time = timer.left -1
            if(time > 0) setEnable(setTimeout(() => timerFn(true, 2),1000))
            else setEnable(null)
            
            setLeft(time)
            
        }

        
        
        
    }
    useEffect(() => {
    let k = setTimeout(() => timerFn(k = 4),1000)
        return () => clearTimeout(k)
    }, [])
    
    return <div className='m-2 bg-slate-200 border-2 border-gray-300 p-2 rounded-lg'>
        <div  className='flex justify-between' >
            <div className='font-medium text-xl'>{timer.title}</div>
            <div className=' self-end'>
                    <button type="button" class= "justify-center h-5 w-5 text-black border-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 rounded-full text-sm item-centre inline-flex   dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                        <div className='material-icons bg-slate-500 rounded-full w-6 text-white text-sm'>close</div>
                    </button>
                </div>
            </div>
        <div className="flex text-center justify-around my-2">
            <div className="border-4 border-gray-400 w-40 h-40 content-center rounded-full  ">
                <div className=" text-center text-5xl">{hour > 0 && hour + ":"}{ minute > 0 && minute + ":"}{seconds}</div>
            </div>
            <div className="flex flex-col justify-center ml-4">
                <Button 
                    text={"+1:00"}
                />
                <Button 
                    icon={enabled ? "pause" : "play_arrow"}
                    onClick={() => timerFn(!Boolean(enabled), 5)}
                />
            </div>
        </div>
        
    </div>
}
const Button = ({ text = null, icon = null, onClick}) => {
    return (
      <button onClick={onClick} className={(icon && "material-icons") + ' border text-lg font-normal rounded-3xl text-center content-center h-16 w-20 text-white bg-slate-400 hover:bg-slate-600 '}>{text ? text : icon ? icon : "???"}</button>
    )
  }

const TimerButton = ({ text, onClick}) => {
  return (
    <button onClick={onClick} className='border text-lg font-normal rounded-full text-center content-center h-20 w-20 text-white bg-slate-400 hover:bg-slate-600 active:text-2xl '>{text}</button>
  )
}