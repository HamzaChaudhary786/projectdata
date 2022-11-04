
import React from 'react'
import { Link } from 'react-router-dom'
import Bussiness_Div_Box from './Bussiness_Div_Box'
const Bussiness_page = () => {
    return (
        <>
            <div className='mt-6 p-4 text-xl  text-center border'>

                <div className=' grid   justify-items-center items-center'>
                    <div className='h-auto w-96 '>
                        <h1 className=' font-semibold text-3xl '>
                            Crowd Fund Your Bussiness
                        </h1>
                    </div>
                </div>

                <div className='mt-6 '>

                    Raise funds for your startup or existing business here.
                    <div className=' mt-6 text-lg '>
                        Whether you’re just starting out or need a little extra support, this is the place to come to raise money for your business. If you’re raising funds for your not-for-profit business* then your crowdfunder will have <strong>zero platform fees*</strong>. We may also have
                        <Link><span className=' text-indigo-400 text-lg  hover:text-indigo-600 '> +Extra funding </span></Link>
                        Plus there might be +Extra Funding available to help you raise even more.
                    </div>
                    <div className='  mt-6 text-xs  '>
                        <p>*this applies to not-for-profits, social enterprises, and community organisations only. For businesses, please go to this page.</p>
                    </div>
                </div>

            </div>

            <div className=' bg-blue-100 grid items-center justify-center h-full  '>

                <div className='w-[450px]  text-lg bg-white mt-4 h-[430px]  border-orange-600 border '>

                    <div className='mt-4 ml-8'>Crowdfund for a</div>
                    <div className='ml-8'><strong>Not-for-profit</strong><span>, business or organisation organisation</span></div>
                    <div className=' flex  ml-8 '>
                        <div className='  font-bold text-indigo-500 rounded-full p-1 border border-indigo-600 h-7'><ion-icon name="checkmark-outline"></ion-icon></div>
                        <div className='ml-2'>5% (+VAT) fees + transaction fees</div>
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


                <div className='w-[450px] h-56  text-lg bg-white  mt-4   border-orange-600 border '>
                    <h1 className='mt-4 ml-8 font-bold'>Community Shares</h1>
                    <div className='mt-4 ml-8'>Communities are stronger when they own the things that matter to them, discover more about Community Shares</div>
                    <Link><div className='grid justify-center items-center'><button className=' bg-indigo-500 hover:bg-indigo-900 w-[400px] h-10 p-1 text-white mt-4 rounded  '>Learn More </button></div></Link>


                </div>
                <Bussiness_Div_Box/>
            </div>
        </>
    )
}

export default Bussiness_page