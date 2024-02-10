'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';


let count: any = 0;
function Slider({ title, breakFast }: {title:any,breakFast:any}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    startsSlilder()
  }, [])

  const startsSlilder = () => {
    setInterval(() => {
      handleOnNextClick()
    }, 3000)
  }


  const handleOnNextClick = () => {
    count = (count + 1) % breakFast.length;
    setCurrentIndex(count)
  }
  slideRef?.current?.classList.add('fade-anim')


  const handleOnPrevClick = () => {
    count = (currentIndex + breakFast.length - 1) % breakFast.length
    setCurrentIndex(count)


  }

  return (
    <div ref={slideRef} className=' select-none relative  '>
      <h1></h1>
      <div className=" aspect-h-9">

        <img height={200} src={breakFast[currentIndex]} className='rounded-md hover:scale-95 duration-300 transition cursor-pointer' alt="" />
      </div>
      <div className='absolute transform translate-y-1/2  w-full flex justify-between '>

      </div>
      <h1 className='text-center font-serif font-bold mt-2'>{title}</h1>
    </div>
  )
}

export default Slider