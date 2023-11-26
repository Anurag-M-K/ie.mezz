'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

// const breakFast = [
//     'images/breakfast1.jpg',
//     'images/breakfast2.jpg',
//     'images/breakfast3.jpg',
//     'images/breakfast4.jpg',
//     'images/breakfast5.jpg',
//     'images/breakfast6.jpg',
// ]

let count:any = 0;
function Slider({title,breakFast}:any) {
  const [currentIndex,setCurrentIndex] = useState(0)

  const slideRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
startsSlilder()
  },[])

  const startsSlilder = ()=>{
    setInterval(()=>{
      handleOnNextClick()
    },3000)
  }


  const handleOnNextClick = () => {
count = (count + 1) % breakFast.length;
setCurrentIndex(count)  }
slideRef?.current?.classList.add('fade-anim')


  const handleOnPrevClick = () => {
  count = (currentIndex + breakFast.length - 1) % breakFast.length
  setCurrentIndex(count) 

  
  }

  return (
    <div ref={slideRef} className=' select-none relative  '>
      <h1></h1>
      <div className="aspect-w-16 aspect-h-9">

        <img width={200} height={200}  src={breakFast[currentIndex]} className='rounded-md hover:scale-95 duration-300 transition cursor-pointer' alt="" />
      </div>
<div className='absolute transform translate-y-1/2  w-full flex justify-between '>
{/* <button onClick={handleOnPrevClick}>👈</button>
<button onClick={handleOnNextClick}>👉 </button> */}
</div>
<h1 className='text-center font-serif font-bold mt-2'>{title}</h1>
    </div>
  )
}

export default Slider