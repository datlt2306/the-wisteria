"use client"

import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from "next/image"

const Banner = () => {
  const images = [
    "https://wisteria.vn/wp-content/uploads/2022/07/slide-1.webp",
    "https://wisteria.vn/wp-content/uploads/2023/08/slide-2.webp",
  
  ];
  return (
    <div >
      {/* <Image className='object-fill bg-center' src="https://wisteria.vn/wp-content/uploads/2022/07/Banner-1.webp" fill objectFit="cover" alt="" /> */}
      <div className=''>
        <Fade>
            <div className="each-slide">
            <div>
                <img className='w-[100%]'  src={images[0]} alt={''} />
            </div>
            </div>
            <div className="each-slide">
            <div>
                <img className='w-[100%]' src={images[1]} alt={''} />
            </div>
            </div>
        </Fade>
    </div>
    </div>
  )
}

export default Banner