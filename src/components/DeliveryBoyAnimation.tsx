'use client'
import React from 'react'
import Image from 'next/image';
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

function DeliveryBoyAnimation() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2  ">
			<div className="flex flex-col  px-5 sm:p-28">
				<p className="text-sm text-">Easy way to make an order</p><br />
				<h1 className="text-red-700 font-bold font-mono uppercase text-4xl my-2">Hungry? <span className="text-3xl text-blue-950 font-medium">Just Wait</span></h1>

				<h2 className="text-3xl text-blue-950 font-medium my-2">Food At <span className="text-red-700  font-bold font-mono uppercase text-4xl">Your door</span></h2>
				<p>text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
				<div className="my-2">
					<button className="bg-red-700 hover:scale-90 transition duration-300  text-white rounded p-1 text-sm px-2 py-1">order now</button>
					<button className="border hover:scale-90 transition duration-300 ms-10  text-red-700 border-red-700 rounded p-1 text-sm px-2 py-1">see all foods</button>
				</div>
				<div className='flex'>

				<div className='flex my-2'> <FaShippingFast /><small className='ms-2'>No shipping charge</small></div>
				<div className='flex my-2 ms-4'><RiSecurePaymentFill /><small className='ms-2'>No shipping charge</small>
</div>
				</div>
			</div>
			<div className="flex justify-center items-center p-10">
				<img src="images/hero.png" className='' alt="img" />
			</div>
		</div>
	)
}

export default DeliveryBoyAnimation