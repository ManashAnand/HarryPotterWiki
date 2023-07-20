"use client";
import React, {useState, useEffect } from 'react'
import axios from 'axios';
import CharCard from './CharCard';
import { useFilterContext } from '@/context/Filters';


const AllCharacter = () => {
    const [allChar,setAllChar] = useState([]);
    const {house,role} = useFilterContext();


    function shuffleArray(arr) {
        const shuffledArray = [...arr];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      }

    const getAllChar = async() => {
        const {data} = await axios.get(`https://hp-api.onrender.com/api/characters`);
        
        const arr = shuffleArray(data.slice(0,28));
        setAllChar(arr);
    }

    useEffect(() => {
        getAllChar();
    },[])

    useEffect(() => {
      getDatabyRole();
    },[role])

    const getDatabyRole = async () => {
        try {
            if(role=='Student'){
                const {data} = await axios.get(`https://hp-api.onrender.com/api/characters/students`);
                const arr = shuffleArray(data.slice(0,25));
                   setAllChar(arr);
            }
            else{
                const {data} = await axios.get(`https://hp-api.onrender.com/api/characters/staff`);
                setAllChar(data);    
            }
        } catch (error) {
         console.log(error);   
        }
    }
    useEffect(  () => {
        getCharFomHouse();
        
    },[house])

    const getCharFomHouse = async () => {
        if(house=="All Houses") {
            getAllChar();
        }
        else
        {
            const {data} = await axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`);
            
            // const arr = shuffleArray(data.slice(0,28));
            // console.log(arr);
            setAllChar(data?.slice(0,28));

        }
    }

  return (
        <div className='w-full  sm:grid grid-cols-4 gap-2'>
            {
                allChar && allChar?.map((character)=> {
                    return(
                        <>
                            <CharCard character={character}/>
                        </>
                    )
                })
            }
        </div>
  )
}

export default AllCharacter
