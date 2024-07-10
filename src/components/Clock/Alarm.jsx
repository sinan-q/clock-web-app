import React,{useState , useEffect} from 'react'
import FAB from '../FAB'

const Alarm = () => {
    const [dialogState, setDialogState] = useState(false);
    const [list, setList] = useState([<Card 
        time={"5:40"}
        am={true}
        date={"Mon"}
        enabled={true}
        />, <Card 
        time={"5:40"}
        am={true}
        date={"Mon"}
        enabled={true}
        />]);


    
  return (
    <>
    <div className='flex-1 overflow-auto pt-4 px-4'>
        {list} 
    </div>
    {dialogState && <TimePicker
        onCancel = {() => {setDialogState(false)}}
        onClick = {(hour,minute,isAm) => {
            setDialogState(false)
            setList([...list, <Card
                time={`${hour}:${minute}`}
                am={isAm}
                date={"Mon, Tue"}
                enabled={true}
            />])
        }}
    />}
    <FAB 
        icon={"add"}
        onClic={() => {
            setDialogState(true)
        }}
    />
    </>
    
  )
}

export default Alarm

const Card = ({time, am, date, enabled}) => {
    const [user,setUser] = useState(enabled)
    
    return (
    <div className='pt-2 px-4 border mb-2 border-gray-400 rounded-xl flex justify-between'>
        <div className='mb-2'>
            {user && <div className='text-xs'>Next in 5h</div>} 
            <div className='my-2 flex flex-auto gap-1 align-bottom'>
                <div className=' text-4xl'>{time}</div>
                <div className=' pb-1 flex items-end '>{am ? "am" : "pm"}</div>
            </div>
            <div className='text-xs'>{user ? date : "Not Scheduled"}</div>
        </div>
        <div className='flex flex-col justify-between'>
            <div className=' self-end'>
                <button type="button" class= "justify-center h-5 w-5 text-black border-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 rounded-full text-sm item-centre inline-flex   dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                    <div className='material-icons align-middle mt-1  relative bottom-0.5 text-sm'>arrow_drop_down</div>
                </button>
            </div>
            <div className=''>
                <label class="inline-flex items-cente cursor-pointer">
                    <input type="checkbox" onChange={
                        () => { setUser(!user)}
                    } value="" class="sr-only peer" checked={user} ></input>
                    <div class="relative w-9 h-5 bg-slate-500 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full  peer-checked:after:border-white after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
                </label>
            </div>
        </div>
    </div>)
}

const TimePicker = ({onCancel, onClick}) => {
    const [isHour, setIsHour] = useState(true)
    const [hour, sethour] = useState(12)
    const [minute, setminute] = useState(30)
    const [isAm, setIsAm] = useState(true)
    const radius = 72
    const ahd = 30 * Math.PI / 180

    return (
        <div className=" absolute top-1/2 left-1/2 z-20 bg-white -translate-x-1/2 -translate-y-1/2 px-4 border rounded-2xl shadow-black shadow-2xl">
            <div className="text-xs ms-4 my-2">Select time</div>
            <div className=" inline-flex">
                <button onClick={() => {setIsHour(true)}} className={`text-4xl ms-2 px-3 py-2 border w-fit rounded-xl ${ isHour &&'bg-gray-700'}`} >{hour < 10 && "0"}{hour}</button>
                <div className="text-4xl py-2 w-fit" >:</div>
                <button onClick={() => {setIsHour(false)}} className={`text-4xl me-2 px-3 py-2 border w-fit rounded-xl ${ !isHour &&'bg-gray-700'}`}  >{minute < 10 && "0"}{minute}</button>
                <div className="flex flex-col">
                    <button onClick={() => {setIsAm(true)}} className={`border rounded-t-md text-xs border-black p-1.5 ${isAm && 'bg-green-400 text-white'} `}>a.m.</button>
                    <button onClick={() => {setIsAm(false)}} className={`border rounded-b-md text-xs border-black p-1.5 ${!isAm && 'bg-green-400 text-white'}`}>p.m.</button>

                </div>
            </div>
            <div class="box border relative rounded-full border-orange-100 my-4 w-48 h-48" id="clock">
                <div class="origin w-2 h-2 bg-slate-500 rounded-lg absolute top-1/2 left-1/2 -mt-1 -ml-1"></div>
                <div class="dot_box">
                     {isHour ? [6,5,4,3,2,1,12,11,10,9,8,7].map((num, index) => (
                        <button onClick={() => sethour(num)} class="dot w-5 h-5 absolute text-sm leading-none rounded-3xl" style={{backgroundColor:  hour === num  ? 'brown' : "transparent", top: 90 + Math.cos((ahd * index)) * radius+"px", left: 90 + Math.sin((ahd * index)) * radius + "px" }} key={num}>{num}</button>
                     )) :
                     [30,25,20,15,10,5,0,55,50,45,40,35].map((num, index) => (
                        <button onClick={() => setminute(num)} class="dot w-5 h-5 absolute text-sm leading-none rounded-3xl" style={{backgroundColor: minute === num  ? 'brown' : "transparent", top: 90 + Math.cos((ahd * index)) * radius+"px", left: 90 + Math.sin((ahd * index)) * radius + "px"}} key={num}>{num}</button>
                     )) }
                        
                     
                   
                </div>
                <div class="hour_line transition-all absolute z-20 w-16 h-1 top-1/2 left-1/2 bg-black rounded-sm origin-left -mt-0.5" style={{transform: `rotate(${isHour ? (hour - 3)*30 : (minute-15)*6}deg)`}} id="hour_line"></div>

            </div>
            <div className="flex justify-end gap-2 m-4">
                <button onClick={onCancel} className="text-sm">Cancel</button>
                <button onClick={() => { onClick(hour, minute, isAm) }} className="text-sm">OK</button>
            </div>
        </div>
    )
}