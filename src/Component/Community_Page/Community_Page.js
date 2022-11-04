import React from 'react'
import { Link } from 'react-router-dom'
import Community_Div_Box from './Community_Div_Box'
const Community_Page = () => {
  return (
    <>
      <div className=' mt-6 text-xl  text-center border'>
        <div >

          <div className=' grid   justify-items-center items-center'>
            <div className='h-auto w-72 '>
              <h1 className=' font-semibold text-3xl text-center'>
                Crowdfunding your community project
              </h1>
            </div>
          </div>


          <div className='mt-6 '>

            Have a great idea for a project that could help your community? This is the place to raise money for it.

            <div className=' mt-6 text-lg '>
              We support communities of all shapes and sizes with <strong>no platform fees*</strong>. We may also have
              <Link><span className=' text-indigo-400 text-lg  hover:text-indigo-600 '> +Extra funding </span></Link>
              available to help you raise even more.
            </div>
            <div className='  mt-6 text-xs  '>
              <p>*this applies to not-for-profits, social enterprises, and community organisations only. For businesses, please go to this page.</p>
            </div>
          </div>

        </div>

        <div className=' bg-blue-100 grid items-center justify-center h-full md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-2    '>

          <div className='w-[450px]  text-lg bg-white mt-4 h-[430px]  border-orange-600 border '>

            <div className='mt-4 ml-8'>Crowdfund for a</div>
            <div className='ml-8'><strong>Not-for-profit</strong><span>, social enterprise or community organisation</span></div>
            <div className=' flex  ml-8 '>
              <div className='  font-bold text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Zero platform fees</div>
            </div><br></br>
            <div className=' flex ml-8 '>
              <div className='  font-bold text-indigo-500 rounded-full p-1 border  border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Access to relevant +Extra funding</div>
            </div><br></br>
            <div className=' flex ml-8 '>
              <div className='  font-bold text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Ability to offer rewards</div>
            </div><br></br>
            <div className=' flex ml-8 '>
              <div className='  font-bold text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Access to free coaching and support</div>
            </div><br></br>
            <div className=' flex ml-8 '>
              <div className=' text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Collect Regular Donations</div>
            </div>
            <Link><div className='grid justify-center items-center'><button className=' bg-orange-500 w-[400px] h-10 p-1 text-white mt-4 rounded  '>Start CrowdFunding </button></div></Link>
          </div>




          <div className='w-[450px]  text-lg bg-white mt-4 h-[430px] border-orange-600 border '>

            <div className='ml-8'>Start a <strong> prize draw</strong><span> for your social enterprise or community organisation</span></div>
            <div className=' flex  ml-8 '>
              <div className='  font-bold text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Zero platform fees</div>
            </div><br></br>
            <div className=' flex ml-8 '>
              <div className='  font-bold text-indigo-500 rounded-full p-1 border  border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Offer one amazing prize</div>
            </div><br></br>
            <div className=' flex ml-8 '>
              <div className='  font-bold text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Simple and fast to set up</div>
            </div><br></br>
            <div className=' flex ml-8 '>
              <div className='  font-bold text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Raise funds in a fun way</div>
            </div><br></br>
            <div className=' flex ml-8 '>
              <div className=' text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
              <div className='ml-2'>Anyone can start a prize draw</div>
            </div>
            <Link><div className='grid justify-center items-center'><button className=' bg-orange-500 w-[400px] h-10 p-1 text-white mt-4 rounded  '>Start Prize Draw </button></div></Link>
          </div>
        </div>
        <div className='w-[450px] h-56  text-lg bg-white  mt-4   border-orange-600 border m-4 '>
          <h1 className='mt-4 ml-8 font-bold'>Community Shares</h1>
          <div className='mt-4 ml-8'>Communities are stronger when they own the things that matter to them, discover more about Community Shares</div>
          <Link><div className='grid justify-center items-center'><button className=' bg-indigo-500 hover:bg-indigo-900 w-[400px] h-10 p-1 text-white mt-4 rounded  '>Learn More </button></div></Link>
        </div>
      </div>
      <Community_Div_Box />
    </>
  )
}

export default Community_Page