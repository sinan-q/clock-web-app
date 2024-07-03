import React from 'react'

const StatusBar = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-gray-200">
      <span className="text-sm">9:30</span>
      <div className="flex space-x-1">
        <i className="material-icons text-base ">signal_cellular_4_bar</i>
        <i className="material-icons text-base">battery_3_bar</i>
      </div>
    </div>
  )
}

export default StatusBar