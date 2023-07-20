"use client";
import { CharacterProps } from '@/types'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';

const CharCard = ({character} :
  //  CharacterProps
   any) => {
     const {name,image,ancestry,species,id} = character
      const router = useRouter();

  return (
    <Card  className='mb-2 ' key={id}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={image?image:"https://th.bing.com/th/id/OIP.ucacgV1h6gCJ6Tet5rN8XwHaJT?pid=ImgDet&rs=1"} 
        alt="Didn't find the image"
        className="sm:h-96"
        onClick={() => {
          router.push(`/Profile/${id}`)
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
                <div className="border rounded-lg p-4 bg-gray-200 flex-1  w-auto">
                    {name?name:"Peasent"}
                </div>
            
        </Typography>
        <Typography variant="body2" color="text.secondary" className='border-t border-gray-200'>
          
        
                <div className="border rounded-lg p-4 bg-gray-200 flex justify-center items-center mb-2">
                   Species: {species?species:"Unknown"}
                </div>
                
                <div className="border rounded-lg p-4 bg-gray-200 flex justify-center items-center mb-2">
                Ancestor Of: {ancestry?ancestry:"Unknown"}
                </div>
           

           
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CharCard
