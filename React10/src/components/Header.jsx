import React from 'react'

const Header = () => {
  return (
    <div className='px-10 py-10 flex justify-between items-center'>
        <h1 className='text-3xl font-bold' >Task Manager</h1>
        <div className='flex items-center gap-5'>
            <button className='text-2xl'>
                🌙<b className='hidden'>🌞</b>
            </button>
            <h1 className='text-xl font-medium'>Render : 0</h1>
        </div>
    </div>
  )
}

export default Header