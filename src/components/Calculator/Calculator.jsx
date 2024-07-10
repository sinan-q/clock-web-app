import React from 'react'

const Calculator = () => {
  return (
    <div className=' flex-1 m-2'>
        <div className=" display"></div>
        <div className=" grid grid-cols-4 place-items-center mt-6">
            <TimerButton text={"AC"} />
            <TimerButton text={"( )"} />
            <TimerButton text={"%"} />
            <TimerButton text={"/"} />
            <TimerButton text={"7"} />
            <TimerButton text={"8"} />
            <TimerButton text={"9"} />
            <TimerButton text={"X"} />
            <TimerButton text={"4"} />
            <TimerButton text={"5"} />
            <TimerButton text={"6"} />
            <TimerButton text={"-"} />
            <TimerButton text={"1"} />
            <TimerButton text={"2"} />
            <TimerButton text={"3"} />
            <TimerButton text={"+"} />
            <TimerButton text={"0"} />
            <TimerButton text={"."} />
            <TimerButton text={">"} />
            <TimerButton text={"="} />

        </div>
    </div>
  )
}

export default Calculator

const TimerButton = ({ text, onClick, bgcolor = "bg-slate"}) => {
    return (
      <button onClick={onClick} className={`border text-3xl justify-centet font-normal rounded-full text-center content-center h-[4.5rem] w-[4.5rem] text-white ${bgcolor}-400 hover:${bgcolor}-600 active:text-2xl `}>{text}</button>
    )
  }