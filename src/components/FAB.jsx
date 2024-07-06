import React from 'react'

const FAB = ({icon , onClic = ()=> {}}) => {
  return (
    <div class="flex fixed fab bottom-32 justify-end ">
            <button onClick={onClic} className="material-icons shadow-brown-200 shadow-md  bg-purple-50 hover:bg-brown-200 text-black p-5 rounded-2xl">
                {icon} 
            </button>
    </div>
  )
}

export default FAB