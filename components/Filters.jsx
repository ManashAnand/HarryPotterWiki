"use client";
import { useFilterContext } from '@/context/Filters';
import React from 'react'

const Filters = () => {
  const {setRole} = useFilterContext();

  return (
    <div className="flex w-36 justify-between items-center gap">
        <div className="border  bg-blue-600 rounded-md text-white p-1 cursor-pointer 
        transition ease-in-out delay-150  active:-translate-y-1  active:scale-90 duration-300" onClick={() => setRole('Student')}> Student </div>
        <div className="border  bg-blue-600 rounded-md text-white p-1 cursor-pointer 
        transition ease-in-out delay-150 active:-translate-y-1  active:scale-90 duration-300" onClick={() => setRole('Prof')}> Professor </div>
    </div>
  )
}

export default Filters
