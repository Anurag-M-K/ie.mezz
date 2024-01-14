import React from 'react'
import Image from 'next/image';
import { MdHealthAndSafety } from "react-icons/md";
import { RiEBike2Fill } from "react-icons/ri";
import { FaPersonCircleCheck } from "react-icons/fa6";

function WhyChoseUs() {
  return (
    <div className='text-center bg-yellow-100 p-3 sm:p-8'>
      <h1 className=' font-bold  text-3xl mt-11 '><span className='text-red-500'>Why</span> Choose Us ? </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>

      <div className='flex m-14 sm:m-28  justify-center items-center flex-col'>
      <FaPersonCircleCheck className="text-red-500  w-[100px] h-[100px]" />
        {/* <img src="images/whychoseus1.jpg" className='w-[150] h-[100px]' alt="img" /> */}
        <h3 className='font-bold text-xl mb-3 '>Personalised plans</h3>
        <p className='text-gray-800 text-sm'>With our wide Menu and Affordable prices, you can personalize your order.</p>
      </div>
      <div className='flex m-14 sm:m-28 justify-center items-center flex-col'>
      <RiEBike2Fill  className="text-red-500  w-[100px] h-[100px]" />
        {/* <img src="images/whychoseus2.webp" className='w-[150] h-[100px]' alt="img2" /> */}
        <h3 className='font-bold text-xl mb-3'>Free and on time delivery</h3>
        <p className='text-gray-800  text-sm'>Delivery services right to your door, free of charge. Pick the time and location for your food delivery.</p>

      </div>
      <div className='flex m-14 sm:m-28 items-center flex-col'>
        {/* <img src="images/whychoseus3.jpg"  className='w-[150] h-[100px]' alt="" /> */}
        <MdHealthAndSafety  className="text-red-500  w-[100px] h-[100px]" />
        <h3 className='font-bold text-xl mb-3'>Safe and hygienic packaging</h3>
        <p className='text-gray-800 text-sm'>
Every food item comes with careful packaging to preserve its deliciousness.</p>

      </div>
      </div>
    </div>
  )
}

export default WhyChoseUs