import React, {useState} from 'react'

const Calculator = () => {
  const [number1, setNumber1] = useState("")
  let number = ""
  const [result, setResult] = useState(null)

  const sum = () => {
    let x = number1.split("")
    isOperator(x.at(-1)) && x.pop()
    x = pi(x)
    x = x.map((num) => {switch (num) {
      case "x":
        return "*"
      case "^":
        return "**"
      
      default:
        return num;
    }})
    function factorialize(num) {
      if (num === 0 || num === 1)
        return 1;
      for (var i = num - 1; i >= 1; i--) {
        num *= i;
      }
      return num;
    }
    console.log(pi(x))
    setResult(eval(x.join("")))
  }

  const pi = (string) => {
    for (let i = 0; i < string.length; i++) {
      let element = string[i];
      if (element == "π") {
        let add = `${i!==0? !isOperator(string[i-1])?"*":"":""}Math.PI${!isOperator(string[i+1]) && i+1<string.length ?"*":""}`
        string.splice(i,1,add)
      }
      
    }
    return string
  }

  const isOperator = (element) => {
    console.log(element)
    return ["/", "x" , "+" ,"^" , "-" , "!"].includes(element)
  }

  return (
    <div className=' flex-1'>
        <div className=" h-44 w-34 text-end bg-slate-200 rounded-ee-xl rounded-es-xl">
          <div className="text-end material-icons pt-4 p-2">:</div>
          <div className="font-medium text-6xl mx-2 overflow-x-auto text-end">{number1}</div>
          <div className="py-2 w-18 ps-3 overflow-clip   font-medium text-4xl mx-2 text-end">{result}</div>
        </div>
        <div className="flex justify-between mt-4 mx-6">
            <button>√</button>
            <button onClick={() => setNumber1(pre => {
              if( !pre.endsWith("π")) return pre.concat("π"); 
              else return pre.concat("xπ")
              })}>π</button>
            <button onClick={() => setNumber1(pre => {
               if(pre && !isOperator(pre.at(-1))) return pre + "^"; else return pre})}>^</button>
            <button  onClick={() => setNumber1(pre => {
              if(pre && !pre.endsWith("!")) return pre.concat("!"); 
              else return pre
              })}>!</button>
            <button className='material-icons bg-slate-300 rounded-full'>keyboard_arrow_down</button>
            
        </div>
        <div className=" grid grid-cols-4 place-items-center mt-6 mx-2">
            <TimerButton text={"AC"} onClick={() => {setNumber1(""); setResult(null)}} />
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
            <TimerButton text={"-"} onClick={() => setNumber1(pre => !pre.endsWith("-") && pre + "-")} />
            <TimerButton text={"1"} onClick={() => setNumber1(pre => pre + "1")} />
            <TimerButton text={"2"} onClick={() => setNumber1(pre => pre + "2")} />
            <TimerButton text={"3"} onClick={() => setNumber1(pre => pre + "3")} />
            <TimerButton text={"+"} onClick={() => setNumber1(pre => !pre.endsWith("+") && pre + "+")} />
            <TimerButton text={"0"} onClick={() => setNumber1(pre => pre + "0")} />
            <TimerButton text={"."} onClick={() => setNumber1(pre => !pre.endsWith(".") && pre + ".")} />
            <TimerButton text={"<"} onClick={() => setNumber1(prev => prev.substring(0, prev.length -1))} />
            <TimerButton text={"="} onClick={sum} />

        </div>
    </div>
  )
}

export default Calculator

const TimerButton = ({ text, onClick, bgcolor = "bg-slate"}) => {
    return (
      <button onClick={onClick} className={` text-3xl font-normal rounded-full text-center content-center h-[4.25rem] w-[4.25rem] text-white ${bgcolor}-400 hover:${bgcolor}-600 active:text-2xl `}>{text}</button>
    )
  }