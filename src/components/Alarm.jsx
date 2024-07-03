import React,{useState} from 'react'
import FAB from './FAB'

const Alarm = () => {
  return (
    <>
    <div className='flex-1 overflow-auto pt-4 px-4'>
        <Card 
        time={"5:40"}
        am={true}
        date={"Mon"}
        enabled={true}
        />
        <Card 
        time={"5:00"}
        am={true}
        date={"Mon, Tue"}
        enabled={true}
        />
        <Card 
        time={"5:00"}
        am={true}
        date={"Mon, Tue"}
        enabled={true}
        />
        <Card 
        time={"5:00"}
        am={true}
        date={"Mon, Tue"}
        enabled={true}
        />  
        
    </div>
    <FAB 
        icon={"add"}
    />
    </>
    
  )
}

export default Alarm

const Card = ({time, am, date, enabled}) => {
    const [user,setUser] = useState(enabled)
    return (
    <div className='pt-2 px-4 border mb-2 bg-brown-100 rounded-xl flex justify-between'>
        <div className='mb-2'>
            {user && <div className='text-xs'>Next in 5h</div>} 
            <div className=' flex flex-auto gap-1 align-bottom'>
                <div className=' text-4xl'>{time}</div>
                <div className=' pb-1 flex items-end '>{am ? "am" : "pm"}</div>
            </div>
            <div className='text-xs'>{user ? date : "Not Scheduled"}</div>
        </div>
        <div className='flex flex-col justify-between'>
            <div className=' self-end'>
                <button type="button" class="text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full bg-gray-700 border-black text-sm item-centre inline-flex   dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                    <div className='material-icons h-5 w-5 content-center text-sm text-white'>arrow_drop_down</div>
                </button>
            </div>
            <div className=''>
                <label class="inline-flex items-cente cursor-pointer">
                    <input type="checkbox" onChange={
                        () => { setUser(!user)}
                    } value="" class="sr-only peer" checked={user} ></input>
                    <div class="relative w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>
    </div>)
}