import React from 'react'
import FAB from './FAB'

const Clock = () => {
  return (
    <div className='flex-1 m-4 pt-8 w-sreen'>
            <div className='flex items-center flex-col'>
                <div className='flex items-end'>
                    <div className=' text-5xl'>12:00</div>
                    <div className=' align-text-bottom'>am</div>
                </div>
                <div className='mt-3'>
                    Tue, 25 Jun
                </div>
            </div>
            <div>
                
            </div>
            <FAB 
                icon={"add"}
            />
    </div>
  )
}

export default Clock