import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'


const StatusBar = () => {
  const [time, setTime] = useState("loading")
    

  useEffect(() => {
    (function clock() {
      setTime( moment().format(' h:mm'))
      setTimeout(clock, 60000);
    })();
  }, [])
  
  return (
    <div className="flex items-center justify-between px-4 pt-2 bg-slate-200">
      <span className="text-[0.6rem] font-bold">{time}</span>
      <div className="flex space-x-1">
        <i className="material-icons text-sm ">signal_cellular_4_bar</i>
        <i className="material-icons text-sm">battery_3_bar</i>
      </div>
    </div>
  )
}

export default StatusBar