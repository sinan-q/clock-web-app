import { useEffect, useState } from 'react'
import FAB from './FAB'
import moment from 'moment/moment'

const Clock = () => {
    const [time, setTime] = useState("loading")
    const [timeam, setTimeam] = useState("")
    const [date, setDate] = useState("loading")


    useEffect(() => {

        setInterval(() => {
    
            const dateObject = moment()  
            setTimeam(dateObject.format('a'))
            setTime( dateObject.format(' h:mm'))
            setDate(dateObject.format('ddd, d MMM'))
        }, 1000)
    
      }, [])
  return (
    <>
    <div className='flex-1 m-4 pt-8'>
        <div className='flex items-center flex-col'>
            <div className='flex items-end'>
                <div className=' text-5xl'>{time}</div>
                <div className='ml-2 align-text-bottom'>{timeam}</div>
            </div>
            <div className='text-xs'>
                {date}
            </div>
        </div>
        <div>
            
        </div>
            
    </div>
    <FAB 
        icon={"add"}
    />
    </>
  )
}

export default Clock