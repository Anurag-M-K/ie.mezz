import React from 'react';

function Carousel() {
  const slides = [
    'abc.jpg', 'abc1.jpg', 'abc3.jpg', 'abcd.jpg', 'abcde.jpg', 'abcdef.jpg', 'amk.jpg', 'aaa.jpg', 'bbb.jpg', 'ccc.jpg'
    // Add more images as needed
  ];

  return (
    <div className='slider '>
      <div className='slide-track' >
        {slides.map((slide, index) => (
          <div key={index} className='slide'>
            <img className='img-carousal' src={`images/${slide}`} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
