import React from 'react'

const counts = () => {
  return (
    <div>
        <div className='bg-[#EDCACD]'>
        <h1 className='text-4xl font-bold text-center p-10'>Our Achievements</h1>
        <div className='flex justify-center space-x-20 pb-10'>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold'>500+</h2>
                <p className='text-lg'>Projects Completed</p>
            </div>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold'>300+</h2>
                <p className='text-lg'>Satisfied Clients</p>
            </div>
            <div className='text-center'>
                <h2 className='text-3xl font-semibold'>50+</h2>
                <p className='text-lg'>Awards Won</p>
            </div>  
        </div>
    
        </div>
    </div>
  )
}

export default counts