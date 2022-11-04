
import React from 'react'
import { Bussiness_Box_Items } from './Bussiness_Box_Items'
import { Link } from 'react-router-dom'


const Bussiness_Div_Box = () => {
    return (
        <>
            <div className='grid grid-cols-2 items-center justify-center mt-6 gap-2 h-auto'>
                {
                    Bussiness_Box_Items.map((item) => {
                        const { id, image, text, description } = item;
                        return (
                            <>
                                <Link>
                                    <div key={id} className="h-fit w-56 border  border-black  bg-white hover:scale-105 ease-in    ">
                                        <img src={image} alt='image' className=' h-32 w-52 m-2' />
                                        <p className='m-2 font-bold'>{item.text}</p>
                                        <p className='m-2'>{item.description}</p>
                                        <div className=' border-4 border-blue-400 w-48 m-2 '></div>
                                    </div>
                                </Link>

                            </>
                        )
                    })

                }

            </div>
            <div className=' bg-slate-600 mt-6'>
                <div className='grid grid-cols-2 justify-items-center text-center  w-96 md:grid sm:grid-cols-3 mt-2   '>
                    <div className='grid justify-items-center items-center'>
                        <Link className='hover:text-indigo-600'>About Us</Link><br></br>
                        <Link className='hover:text-indigo-600'>Knowledge Hub</Link><br></br>
                        <Link className='hover:text-indigo-600'>+Extra Funding</Link><br></br>
                        <Link className='hover:text-indigo-600'>For Partners</Link><br></br>
                        <Link className='hover:text-indigo-600'>Accessibility</Link><br></br>
                    </div>
                    <div className='grid justify-items-center items-center'>
                        <Link className='hover:text-indigo-600'>Help Centre</Link><br></br>
                        <Link className='hover:text-indigo-600'>Project & Reward Guidelines</Link><br></br>
                        <Link className='hover:text-indigo-600'>Fees</Link><br></br>
                        <Link className='hover:text-indigo-600'>Contact Us</Link><br></br>
                        <Link className='hover:text-indigo-600'>Jobs</Link><br></br>
                    </div>
                    <div>
                        <div>
                            Follow US:
                            <span className='text-indigo-400 m-1'><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></span>
                            <span className='text-indigo-400 m-1'><a href='#'><ion-icon name="logo-twitter"></ion-icon></a></span>
                            <span className='text-indigo-400 m-1'><a href='#'><ion-icon name="logo-linkedin"></ion-icon></a></span>
                            <span className='text-indigo-400 m-1'><a href='#'><ion-icon name="logo-instagram"></ion-icon></a></span>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bussiness_Div_Box