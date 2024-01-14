import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdGppGood } from "react-icons/md";

function HowItWorks() {
    return (
        <div id='work' className='p-10 my-20'>
            <h1 className='text-center text-3xl font-bold my-3'>How we works</h1>
            <p className='text-center mt-5 mb-10 text-md  text-gray-600'>We prioritize product excellence, ensuring unwavering commitment to quality and safety, with a dedicated focus on maintaining Halal standards, putting control firmly in your hands</p>
            <div className='grid sm:grid-cols-3'>

                <div className='flex px-10 flex-col justify-center items-center'>

                    <FaWhatsapp className="text-green-600 w-48 h-28" />
                    <h2 className='text-2xl font-sans font-bold'>Easy to order</h2>
                    <p className='text-gray-600 text-md text-center'>Ordering your favorite meal is a breeze with just a few simple steps.</p>
                </div>
                <div className='flex px-10 flex-col justify-center items-center'>

                    <img src='images/icon2.png' className="text-green-600 w-28 h-28" />
                    <h2 className='text-2xl font-sans font-bold'>Fast Delivery</h2>
                    <p className=' text-gray-600 text-md text-center'>Experience prompt and efficient delivery services, always ensuring timely arrivals.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>

                    <MdGppGood
                        className="text-green-400 w-48 h-28" />
                    <h2 className='text-2xl font-sans font-bold'>High quality</h2>
                    <p className='px-10 text-gray-600 text-md text-center'>Beyond speed, we prioritize quality, ensuring that every delivery maintains the highest standards of excellence.</p>
                </div>

            </div>
        </div>
    )
}

export default HowItWorks