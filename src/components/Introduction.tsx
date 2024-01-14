import React from 'react';
import Image from 'next/image';


function Introduction() {
  return (
    <div id='about' className="my-20 border-t  p-8 grid sm:grid-cols-2 grid-cols-1 rounded-md shadow-md text-center">
      <div className='flex justify-center items-center flex-col  p-2 '>
      <h1 className=" text-center text-3xl font-bold my-3">What is ie.mezz?</h1>
      <p className='text-black font-medium'>"We are  providing whole day packages Breakfast, Lunch, Dinner for monthly base"</p>
      <p className="text-lg text-gray-700 ">
        Welcome to Ie Mezz, where the art of home-cooked meals meets a delightful chaos of flavors! At Mezz, we take pride in being a culinary mess that promises a homely dining experience. Our kitchen is a symphony of diverse ingredients, crafting a menu that boasts a variety of mouthwatering dishes.
         {/* From comforting classics to innovative creations, each item on our menu is a testament to our passion for delivering delicious, homemade goodness. Join us at Mezz and embark on a gastronomic journey that celebrates the beauty of messy, yet heartwarming, home-style cooking. */}
      </p>
      </div>
      <div>
        <img src="/images/introduction2.png" className='w-full' alt="img" />
      </div>
    
    </div>
  );
}

export default Introduction;
