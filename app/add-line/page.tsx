"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
type Props = {}

export default  function AddLine({}: Props) {
  
  const [line, setLine] = useState('')

 const router = useRouter()

  const handelSubmit  = async (e:any) => {
    e.preventDefault()
    if(!line ){
      console.log(line);
      alert(' line is requierd')
      return 
    }
    try {
      const res = await fetch('http://localhost:3000/api/pickup-line/',{

        method:'POST',
        headers:{"Content-type":"appliction/json"},
        body: JSON.stringify({ line })

      },
      )
      if(res.ok){
        console.log('line was posted');
        
        router.push('/')
        router.refresh()
      }else{
        throw new Error ('faild to add new line')
      }

    }
   catch(err){
    console.log(err,' could not ...');
   }

  }


  return (
    <form onSubmit={handelSubmit} className='add-line-container gc2'>
        <input className='add-line-input' type='text' placeholder='Your line goes here'
        onChange={(e) => setLine(e.target.value)}></input>
        <button type='submit' className='add-btn'>Add</button>
    </form>
  )
}