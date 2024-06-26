import React from 'react'

const StatusBar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      <span className="text-lg font-semibold">9:30</span>
      <div className="flex space-x-2">
        <i className="material-icons fas fa-heart ">signal_cellular_4_bar</i>
        <i className="material-icons">battery_3_bar</i>
      </div>
    </div>
  )
}

export default StatusBar