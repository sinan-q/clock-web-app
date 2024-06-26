import React from 'react'

const FAB = ({icon}) => {
  return (
    <div class="fixed bottom-16 right-6">
            <button class="material-icons bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-2xl shadow-lg">
                {icon}
            </button>
    </div>
  )
}

export default FAB