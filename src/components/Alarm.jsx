import React from 'react'

const Alarm = () => {
  return (
    <div className='flex-1 m-4 '>
        <Card/>
    </div>
  )
}

export default Alarm

const Card = () => {
    return (
    <div className='p-4 border border-red-600 rounded-xl flex justify-between'>
        <div>
            <div>next in 5h</div>
            <div className=' flex flex-auto gap-1 align-bottom'>
                <div className=' text-6xl'>5:00</div>
                <div className=' pb-1 flex items-end '>am</div>
            </div>
            <div>Mon,Tue</div>
        </div>
        <div className='flex flex-col'>
            <div className=' flex-1'>
                <button type="button" class="text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl border-2 border-black text-sm text-center inline-flex   dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                    <div className='material-icons'>arrow_drop_down</div>
                </button>
            </div>
            <div>
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked></input>
                    <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>
    </div>)
}