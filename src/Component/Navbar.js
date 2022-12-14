import React, { useState } from 'react'
import Button from './Button';
import SignButton from './SignButton'


let Links = [
    {
        name: "Explore",
        path: "/"
    },
    {
        name: "+Extra Funding",
        path: "/"
    },
    {
        name: "Stories",
        path: "/"
    },
    {
        name: "About",
        path: "/"
    },
   

]













const Navbar = () => {
    let [Open, setOpen] = useState(false);
    return (
        <>
            <div className={` shadow-md w-full   top-0 left-0 `}>
                <div className={`md:flex justify-between items-center   bg-white py-4 md:px-10 px-7   ${Open ? 'mb-[23rem]' : 'h-auto  '}`}>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 '>
                        <span className='text-3xl text-indigo-600 mr-1 pt-2 '>
                            <ion-icon name="logo-ionic"></ion-icon>
                        </span>
                        CROWED FUNDER
                        <div className='text-3xl absolute right-8 cursor-pointer md:hidden' onClick={() => setOpen(!Open)}>
                            <ion-icon name={Open ? 'close' : 'menu'}></ion-icon>
                        </div>
                    </div>
                    <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] md:w-auto md:pl-0 pl-9 bg-white  w-full md:h-10 h-60 left-0 ${Open ? 'top-20' : 'top-[-490px] '} `}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 md:my-0 my-6 text-xl cursor-pointer sm:cursor-pointer '>
                                    <a href={link.link} className=' text-gray-800 hover:text-gray-400 duration-500' >{link.name}</a>
                                </li>

                            ))
                        }

                        <Button>Start CrowdFunding</Button>
                        <br></br>
                        <br></br>
                        <SignButton>Sign In</SignButton>



                    </ul>

                </div>
            </div>
        </>
    )
}

export default Navbar