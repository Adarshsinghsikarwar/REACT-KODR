import React from 'react'

const Card = () => {
  return (
    <div className='px-10 py-10 flex flex-wrap gap-5'>
        <div className='flex flex-col gap-2  items-center justify-center border w-[18%] py-5 rounded-xl'>
            <h1 className='text-3xl font-bold'>0</h1>
            <p className='text-xl font-medium'>Total Tasks</p>
        </div>
        <div className='flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl'>
            <h1 className='text-3xl font-bold'>0</h1>
            <p className='text-xl font-medium'>Active</p>
        </div>
        <div className='flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl'>
            <h1 className='text-3xl font-bold'>0</h1>
            <p className='text-xl font-medium'>Completed</p>
        </div>
        <div className='flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl'>
            <h1 className='text-3xl font-bold'>0:00</h1>
            <p className='text-xl font-medium'>Total Time</p>
        </div>
        <div className='flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl'>
            <h1 className='text-3xl font-bold'>0s</h1>
            <p className='text-xl font-medium'>Avg/Task</p>
        </div>
        <div className='flex flex-col gap-2  items-center justify-center border w-[18%] py-5  rounded-xl'>
            <h1 className='text-3xl font-bold'>0%</h1>
            <p className='text-xl font-medium'>Completion</p>
        </div>
       
    </div>
  )
}

export default Card