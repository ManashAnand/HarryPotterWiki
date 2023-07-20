"use client";
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';

const Hero = () => {

    const handleScroll = () => {

    }

  return (
    <>
     <div className="hero">
      <div className="flex-1 pt-24 padding-x ">
        <h1 className="hero__title">
          Find, See, stock a character—quick and super easy!
        </h1>
        <p className="hero__subtitle">
          Streamline your Harry potter experience with our effortless searching
          process.
        </p>

        <CustomButton
         title="Explore Character"
         containerStyles="bg-primary-blue text-white rounded-full mt-10"
         handleClick={handleScroll}
        />

     </div>
     <div className="hero__image-container">
        <div className="hero__image  ">
          <Image src="/heroImage.png" alt="hero" width={500} height={500} className="object-contain " />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
    </>
  )
}

export default Hero
