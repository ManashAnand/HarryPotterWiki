"use client";
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import axios from 'axios';
import { CharacterProps } from '@/types';

const page = () => {
  const [id,setId] = useState("");
  const pathname = usePathname();
  const [charData,setCharData] = useState<CharacterProps>();
  const getDataAboutChar = async (id:String) => {
    const { data } = await axios.get(`https://hp-api.onrender.com/api/character/${id}`);
    console.log(id);
    setCharData(data[0]);
  }
  
  useEffect(() => {
    const idFromPathname = pathname.split('/')[2];
    setId(idFromPathname);
    getDataAboutChar(idFromPathname);
  }, [])
  
  // useEffect(() => {
  //   getDataAboutChar();
  // },[id])


  return (
    <>
      
      <div className=" p-16">
        
      </div>
      <div className=''>
        {/* {charData?.id} */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-slate-700">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full bg-contain md:h-full md:w-48" src={charData?.image ? charData?.image :"https://th.bing.com/th/id/OIP.ucacgV1h6gCJ6Tet5rN8XwHaJT?pid=ImgDet&rs=1" } alt="Modern building architecture"/>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{charData?.name}</div>
            <p>  Actor played the role:<span className="mt-2 text-slate-500"> {charData?.actor}</span></p>
            <span  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{charData?.dateOfBirth}</span>
            <p>  Ancestory:<span className="mt-2 text-slate-500"> {charData?.ancestry}</span></p>
           <p> Gender:<span className="mt-2 text-slate-500"> {charData?.gender ? charData?.gender : "Doesn't know" }</span></p>
          <p>  House:<span className="mt-2 text-slate-500"> {charData?.house ? charData?.house : "Doesn't have a house"}</span></p>
          <p>  Species:<span className="mt-2 text-slate-500"> {charData?.species ? charData?.species : "Doesn't have a species"}</span></p>
          <p>  Wand:<span className="mt-2 text-slate-500"> {charData?.wand?.wood ? charData?.wand?.wood : "Doesn't have a wand" }</span></p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default page
