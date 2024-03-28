import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

type CardProps = {
    url:string,
    i:number
}

export default function Card({url,i}: CardProps) {

  
  return (
    <article  className={`card card${i+1}`} >
    <Image src= {url} width={200} height={300} alt={'girls'} ></Image>

   </article>
  )
}