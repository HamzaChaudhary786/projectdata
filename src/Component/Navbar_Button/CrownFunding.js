import React from 'react'
import { Link } from 'react-router-dom'
import { Funding_Items } from './Crowd_Funding_items/Funding_Items'

const CrownFunding = () => {
    return (
        <>
            <div className='grid justify-items-center items-center '>

                <div className='mt-4'>
                    <strong>Whats Your Crowdfunding for?</strong>

                </div>
                <div className='  sm:grid sm:grid-cols-1  md:gap-x-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 '>
                    {

                        Funding_Items.map((item) => {
                            return (
                                <>
                                    <div className='grid justify-items-center items-center  '>

                                        <Link to={item.path}>
                                            <div className='h-16 w-96 border border-orange-600 rounded  items-center text-2xl font-semibold mt-4  hover:scale-x-105 ease-in ' >
                                                <div className='flex m-4 justify-between'>
                                                    <div className=''>
                                                        {item.name}
                                                    </div>
                                                    <div className=' text-orange-600 '>
                                                        <ion-icon name="chevron-forward-outline"></ion-icon>
                                                    </div>

                                                </div>

                                            </div>

                                        </Link>


                                    </div>
                                </>
                            )
                        })

                    }
                </div>

            </div>
            <div className='grid justify-items-center items-center sm:grid sm:grid-cols-1  md:grid md:grid-cols-2 md:justify-items-center md:items-center lg:grid lg:grid-cols-3'>

                <div className=' grid justify-items-center items-center text-center border border-orange-500 h-82 w-96 mt-4'>
                    <h1 className=' text-indigo-600 font-semibold text-xl'>Prize Draws</h1>
                    <p>A great way of raising funds if you have something amazing to raffle.</p>
                    <Link className='hover:text-indigo-600'>Learn More...</Link>
                </div>
                <div className=' grid justify-items-center items-center text-center border border-orange-500 h-82 w-96 mt-4'>
                    <h1 className=' text-indigo-600 font-semibold text-xl'>Big Impact</h1>
                    <p>Could your idea raise more than £50,000 to make a big social impact?</p>
                    <Link className='hover:text-indigo-600'>Learn More...</Link>
                </div>
                <div className=' grid justify-items-center items-center text-center border border-orange-500 h-82 w-96 mt-4'>
                    <h1 className=' text-indigo-600 font-semibold text-xl'>Community Shares</h1>
                    <p>Communities are stronger when they own the things that matter most to them.</p>
                    <Link className='hover:text-indigo-600'>Learn More...</Link>
                </div>
            </div>
            <div className=' h-auto w-96 text-center ml-12 md:h-auto md:w-screen mt-2 md:text-center'>
                <p className='  '>Or don’t fit into any of the above categories, don't worry you can
                    <span>
                        <Link className='text-indigo-600 ml-2'>crowedfund for pretty much anything</Link>
                    </span>
                </p>

            </div>
            <div className='border border-orange-500 w-full mt-2'></div>

            <div className='  grid grid-cols-2 justify-items-center text-center w-screen bg-slate-400  sm:grid-cols-3 mt-2 lg:grid lg:grid-cols-3  lg:bg-slate-400 lg:w-screen    '>
                <div className='grid text-start lg:grid lg:text-start'>
                    <Link className='hover:text-indigo-600'>About Us</Link><br></br>
                    <Link className='hover:text-indigo-600'>Knowledge Hub</Link><br></br>
                    <Link className='hover:text-indigo-600'>+Extra Funding</Link><br></br>
                    <Link className='hover:text-indigo-600'>For Partners</Link><br></br>
                    <Link className='hover:text-indigo-600'>Accessibility</Link><br></br>
                </div>
                <div className='grid text-start lg:grid lg:text-start'>
                    <Link className='hover:text-indigo-600'>Help Centre</Link><br></br>
                    <Link className='hover:text-indigo-600'>Project & Reward Guidelines</Link><br></br>
                    <Link className='hover:text-indigo-600'>Fees</Link><br></br>
                    <Link className='hover:text-indigo-600'>Contact Us</Link><br></br>
                    <Link className='hover:text-indigo-600'>Jobs</Link><br></br>
                </div>
                <div>
                    <div>
                        Follow US:
                        <span className='text-indigo-400 m-1 border'><a href='#'><ion-icon name="logo-facebook"></ion-icon></a></span>
                        <span className='text-indigo-400 m-1 border'><a href='#'><ion-icon name="logo-twitter"></ion-icon></a></span>
                        <span className='text-indigo-400 m-1 border'><a href='#'><ion-icon name="logo-linkedin"></ion-icon></a></span>
                        <span className='text-indigo-400 m-1 border'><a href='#'><ion-icon name="logo-instagram"></ion-icon></a></span>


                    </div>
                </div>

            </div>


        </>
    )
}

export default CrownFunding