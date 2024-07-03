import React from 'react'

const FAB = ({icon , onClic = ()=> {}}) => {
  return (
    <div class="flex fixed fab bottom-28 justify-end">
            <button onClick={onClic} className="material-icons bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-2xl shadow-lg">
                {icon}
            </button>
    </div>
  )
}

export default FAB