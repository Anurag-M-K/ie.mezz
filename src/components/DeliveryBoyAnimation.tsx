'use client'
import React from 'react'
import Image from 'next/image';
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

function DeliveryBoyAnimation() {
	const handleWhatsAppClick = () => {
		// Replace '1234567890' with the actual phone number you want to open in WhatsApp
		const phoneNumber = '9535363102';
		
		// Create the WhatsApp URL
		const whatsappUrl = `https://wa.me/${phoneNumber}`;
		
		// Open the WhatsApp URL in a new tab
		window.open(whatsappUrl, '_blank');
	  };
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 bg-red-300 ">
			<div className="flex flex-col  px-5 sm:p-28">
				<p className="text-sm text-blue-900">Easy way to make an order</p><br />
				<h1 className="text-red-700 font-bold font-mono uppercase text-4xl sm:text-6xl my-2  ">Hungry? <span className="text-2xl sm:text-5xl  text-blue-950 font-medium">Just Wait</span></h1>

				<h2 className="text-2xl sm:text-5xl text-blue-950 font-medium my-2">Food At <span className="text-red-700  font-bold font-mono uppercase text-4xl sm:text-6xl">Your door</span></h2>
				{/* <p className='text-xl text-blue-900 my-3'>  At ie.mezz, we are dedicated to delivering an unparalleled dining experience. Our commitment revolves around three core principles: exceptional food quality, prompt delivery speed, and the added delight of free delivery.
</p> */}
<h1 className='text-yellow-50 sm:text-3xl'>Homely Food</h1>
				<div className="my-2 flex flex-col sm:flex-row ">
					<button onClick={handleWhatsAppClick} className="w-full md:p-2 md:text-xl bg-red-700 my-2 sm:my-0 hover:scale-90 ease-in-out  transition duration-300  text-white rounded p-1 text-sm px-2 py-1">order now</button>
					<button className=" md:p-2 md:text-xl w-full border hover:scale-90 transition  duration-300 sm:ms-10  text-red-700 border-red-700 rounded p-1 text-sm px-2 py-1">see all foods</button>
				</div>
				<div className='flex'>

				<div className='flex my-2'> <FaShippingFast /><small className='ms-2 text-blue-900'>No shipping charge</small></div>
				<div className='flex my-2 ms-4'><RiSecurePaymentFill /><small className='ms-2 text-blue-900'>No shipping charge</small>
</div>
				</div>
			</div>
			<div className="flex justify-center items-center p-10">
				<img src="images/hero.png"  alt="img" />
			</div>
		</div>
	)
}

export default DeliveryBoyAnimation