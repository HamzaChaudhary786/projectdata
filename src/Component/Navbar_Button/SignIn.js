import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
      <div className='grid justify-center items-center sm:grid sm:justify-center sm:items-center '>
        <form className=' border border-orange-500 h-96 w-96 text-center mt-8 sm:w-[600px] sm:rounded sm:text-lg '>
          <strong>
            Sign In
          </strong>
          <div>Dont have account ? <Link to="/" className=' text-blue-600  cursor-pointer'>signup</Link></div>
          <div>
            <Link to="/">
              <div className=" inline-flex bg-indigo-700 p-4 rounded text-white w-80 mt-2 sm:w-[500px] ">
                <span className=' text-blue-300 text-2xl'><ion-icon name="logo-facebook"></ion-icon></span>
                <span className='ml-8'> Continue With Facebook</span>

              </div>
            </Link>
            <br></br>
            <strong>Or sign in with email</strong>
            <br></br>
            <input type="text" className='border w-80 h-12 mt-2 rounded  sm:w-[500px] ' placeholder=" Email ..." />
            <input type="text" className='border w-80 h-12 mt-2 rounded  sm:w-[500px] ' placeholder=" Password ..." />
            <br></br>
            <div className='inline-flex mt-2  '>

              <span className='mr-6 '>
                <input type="checkbox" className='  mr-2 cursor-pointer h-5 w-5' />
                <span >Remember Me?</span>
              </span>
              <span >
                <Link to="/" className=' text-indigo-600   '>Forget Password</Link>
              </span>
            </div>
            <br></br>
            <button className=' bg-indigo-600 w-80 p-3 rounded mt-2 text-white sm:w-[500px]'>Sign In</button>


          </div>


        </form>

      </div>

      <div className='w-auto border mt-8'></div>
      <div>
        <div className='grid justify-center mt-6'>
          <div className=' inline-flex '>
            <span className='mr-4'>Need Help?</span>
            <span className='mr-4 text-indigo-400 hover:text-indigo-600'><Link>Contact Crowedfunder</Link></span>
          </div>

        </div>
        <div className='grid grid-cols-3 sm:grid sm:grid-cols-3 sm:justify-items-center sm:items-center '>
          <span className='   justify-center m-6 hover:text-indigo-600 '><Link>Term Of Use</Link></span>
          <span className='   justify-center m-6 hover:text-indigo-600 '><Link>Privacy Policy</Link></span>
          <span className='   justify-center m-6 hover:text-indigo-600 '><Link>Cookies Policy</Link></span>
        </div>
        <div className='text-center m-6'>
          <span>© 2011-2022 Crowdfunder LTD is registered in England and Wales no. 07831511</span>
        </div>
      </div>

    </>
  )
}

export default SignIn