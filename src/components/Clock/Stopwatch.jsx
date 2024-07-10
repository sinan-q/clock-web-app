import React, {useEffect, useState} from 'react'
import FAB from '../FAB'

const Stopwatch = () => { 
    const [timer, setTimer] = useState(0)
    const [startTimer, setStartTimer] = useState(false)
    useEffect(()=> {
        let interval = null        
        if (startTimer) {
            interval = setInterval(() => {
                setTimer(prevTime => prevTime + 57)
            }, 57);
        } 

        return () => clearInterval(interval)
    }, [startTimer])

    return (

        <>
        <div className='flex-1 m-4 flex flex-col items-center mt-20 '>
            <div className="border-8 border-gray-400 w-64 h-64 content-center rounded-full  ">
                <div className=" text-center text-6xl">{timer/1000|0}</div>
                <div className=" text-center leading-3 pl-8 text-3xl  ">{timer%1000 /10 |0}</div>
            </div>
        </div>
        <FAB 
        icon={startTimer ? "pause" : "play_arrow"}
        onClic = {() => {
            setStartTimer((prevStart) => !prevStart)}}
        />
        </>
    )
    }

export default Stopwatch