import React from 'react'
import { Link } from 'react-router-dom'
const  SignButton = (props) => {
    return (
        <>
            <Link to="/signin">
                <button className='  border-orange-500 border md:hover:bg-orange-500 md:hover:text-white  font-[Poppins] py-2 px-8 rounded md:ml-8  duration-500 hover:bg-orange-500 hover:text-white  '>
                    {props.children}
                </button>
            </Link>
        </>
    )
}

export default SignButton