import React from 'react'

const FAB = ({icon , onClic = ()=> {}}) => {
  return (
    <div class="flex fixed fab bottom-32 justify-end ">
            <button onClick={onClic} className="material-icons shadow-slate-300 shadow-md  bg-slate-200 hover:bg-slate-200 text-black p-5 rounded-2xl">
                {icon} 
            </button>
    </div>
  )
}

export default FAB