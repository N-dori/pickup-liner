"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
type PickupLinesDisplayerProps={
    _id:string
    line:string
}

export default function PickupLinesDisplayer({pickupLines , imgs}:any ) {

    const [isShown, setIsShown] = useState(true)
    const [index, setIndex] = useState(0)
    const [url, setUrl] = useState(imgs[index]?.urls.small)

    useEffect(() => {
        console.log('PickupLinesDisplayer pickupLines',pickupLines);
        setTimeout(() => {
          console.log('PickupLinesDisplayer images',imgs);
          
        }, 1500);
        
      }, [imgs])
    const handelClick = () => {
      if(index === pickupLines.pickupLine.length-1){
        setIndex(0)
        
      } 
      else {
        setIndex(index + 1)
        setUrl(imgs[index]?.urls.small)

      }
    }

    
    
  return (
    isShown ? <p className={'pick-up-line1'} onClick={()=> setIsShown(false) }>{ 'לחץ עליי להתחלה '}</p> 
    :
    <>
     <img src= {url} style={{width:"200px", height:'200px'}} />
    <p className={'pick-up-line1'} onClick={handelClick}> {pickupLines.pickupLine[index].line}</p>
{/* <Image src={imgs[index].urls.raw} width={200} height={200} alt={'lala'}/> */}
    
    </>
  )
}
