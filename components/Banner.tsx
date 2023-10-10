"use client";

import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

const Banner = () => {
  const images = [
    "https://wisteria.vn/wp-content/uploads/2022/07/slide-1.webp",
    "https://wisteria.vn/wp-content/uploads/2023/08/slide-2.webp",
  ];
  return (
    <div>
      <div className='relative z-0'>
        <Fade>
          <div className="each-slide">
            <div>
              <Image fill objectFit='cover' src={images[0]} alt={''} />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img className="w-[100%]" src={images[1]} alt={""} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
export default Banner;
