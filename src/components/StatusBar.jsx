import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'


const StatusBar = () => {
  const [time, setTime] = useState("loading")
  const setDates = () => setTime( moment().format(' h:mm'))

  useEffect(() => {
    setDates()
    setInterval(() => setDates, 60000)
  }, [])
  
  return (
    <div className="flex items-center justify-between px-4 pt-2 bg-gray-200">
      <span className="text-[0.6rem] font-bold">{time}</span>
      <div className="flex space-x-1">
        <i className="material-icons text-sm ">signal_cellular_4_bar</i>
        <i className="material-icons text-sm">battery_3_bar</i>
      </div>
    </div>
  )
}

export default StatusBar