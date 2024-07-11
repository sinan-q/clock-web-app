import React, {useState} from 'react'

const Calculator = () => {
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState(null)
  const [result, setResult] = useState(null)

  return (
    <div className=' flex-1'>
        <div className=" h-44 bg-slate-200 rounded-ee-xl rounded-es-xl">
          <div className="text-8xl pt-4 mx-2 overflow-auto text-end">{number1}</div>
          <div className=" text-end">{result}</div>
        </div>
        <div className="flex justify-between mt-4 mx-6">
            <button>√</button>
            <button>π</button>
            <button>^</button>
            <button>!</button>
            <button className='material-icons bg-slate-300 rounded-full'>keyboard_arrow_down</button>
            
        </div>
        <div className=" grid grid-cols-4 place-items-center mt-6 mx-2">
            <TimerButton text={"AC"} onClick={() => setNumber1("")} />
            <TimerButton text={"( )"} onClick={() => setNumber1(pre => pre + "9")} />
            <TimerButton text={"%"} onClick={() => setNumber1(pre => pre + "%")} />
            <TimerButton text={"/"} onClick={() => setNumber1(pre => pre + "/")} />
            <TimerButton text={"7"} onClick={() => setNumber1(pre => pre + "7")} />
            <TimerButton text={"8"} onClick={() => setNumber1(pre => pre + "8")} />
            <TimerButton text={"9"} onClick={() => setNumber1(pre => pre + "9")} />
            <TimerButton text={"X"} onClick={() => setNumber1(pre => {
              if(pre && !pre.endsWith("x")) return pre.concat("x"); 
              else return pre
              })} />
            <TimerButton text={"4"} onClick={() => setNumber1(pre => pre + "4")} />
            <TimerButton text={"5"} onClick={() => setNumber1(pre => pre + "5")} />
            <TimerButton text={"6"} onClick={() => setNumber1(pre => pre + "6")} />
            <TimerButton text={"-"} onClick={() => setNumber1(pre => !pre.endsWith("x") && pre + "-")} />
            <TimerButton text={"1"} onClick={() => setNumber1(pre => pre + "1")} />
            <TimerButton text={"2"} onClick={() => setNumber1(pre => pre + "2")} />
            <TimerButton text={"3"} onClick={() => setNumber1(pre => pre + "3")} />
            <TimerButton text={"+"} onClick={() => setNumber1(pre => !pre.endsWith("x") && pre + "+")} />
            <TimerButton text={"0"} onClick={() => setNumber1(pre => pre + "0")} />
            <TimerButton text={"."} onClick={() => setNumber1(pre => !pre.endsWith("x") && pre + ".")} />
            <TimerButton text={"<"} onClick={() => setNumber1(prev => prev.substring(0, prev.length -1))} />
            <TimerButton text={"="} />

        </div>
    </div>
  )
}

export default Calculator

const TimerButton = ({ text, onClick, bgcolor = "bg-slate"}) => {
    return (
      <button onClick={onClick} className={`border text-3xl font-normal rounded-full text-center content-center h-[4.5rem] w-[4.5rem] text-white ${bgcolor}-400 hover:${bgcolor}-600 active:text-2xl `}>{text}</button>
    )
  }