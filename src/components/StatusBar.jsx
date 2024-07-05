import React from 'react'

const StatusBar = () => {
  return (
    <div className="flex items-center justify-between px-4 pt-2 bg-gray-200">
      <span className="text-[0.6rem] font-bold">9:30</span>
      <div className="flex space-x-1">
        <i className="material-icons text-sm ">signal_cellular_4_bar</i>
        <i className="material-icons text-sm">battery_3_bar</i>
      </div>
    </div>
  )
}

export default StatusBar