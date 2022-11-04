import React from 'react'

const Sport = () => {
  return (
    <>
      <div>
        <div className=' bg-indigo-300 grid grid-cols-1 lg:grid lg:grid-cols-2 '>
          <div className=' border-2  border-black '>
            <div className='grid justify-items-center items-center h-[400px]  '>
              <p className='h-56 w-96 text-5xl font-semibold space-x-1 text-center text-white grid  items-center font-[poppins]'>Make a difference to your sports club with Crowdfunder</p>
            </div>
          </div>
          <div className='border-2  border-black lg:flex'>
            <img src="./Assets/Sports_Image/logo1.jpeg" className=' lg:w-[340px]  ' />
            <img src="./Assets/Sports_Image/logo.jpeg" className='  lg:w-[340px]   ' />
          </div>
        </div>
      </div>

    </>
  )
}

export default Sport