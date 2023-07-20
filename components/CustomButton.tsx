"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const CustomButton = ({ title, containerStyles, handleClick, btnType,value}: CustomButtonProps) => {
  return (
    <>
    
     <button
     disabled={false}
     type={btnType}
     className={`custom-btn ${containerStyles}`}
     onClick={handleClick}
     value={value}
     >
        <span className={`flex-1 `}>{title}</span>
     </button> 
    </>
  )
}

export default CustomButton
