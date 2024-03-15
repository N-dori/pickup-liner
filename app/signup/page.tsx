"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

export default function Signup({}: Props) {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
const router = useRouter()
  const handelSubmit = async (e:any) => {
         e.preventDefault()
         if(!name || !password || !email){
          alert('בבקשה למלא את כל השדות')
          return 
         }
       
          try {
            const res = await fetch('http://localhost:3000/api/signin/',{
      
              method:'POST',
              headers:{"Content-type":"appliction/json"},
              body: JSON.stringify({ name , email , password })
      
            },
            )
            if(res.ok){
              
              router.push('/')
              router.refresh()
            }else{
              throw new Error ('faild to creat new user')
            }
      
          }
         catch(err){
          console.log(err,' could not ...');
         }
      
        }

        

  return (
    <main className='signup-container flex-col flex-jc-ac gc2 gap1'>
         <form onSubmit={handelSubmit} className='signup-form flex-col flex-jc gap1'>
          <h2 className='tac'>הרשמה</h2>
            <input onChange={(e) => setName(e.target.value)} className='form-input' type='text' placeholder='שמך?' ></input>
            <input onChange={(e)=> setPassword(e.target.value)} className='form-input' type='text' placeholder='סיסמא' ></input>
            <input onChange={(e)=> setEmail(e.target.value)} className='form-input' type='text' placeholder='מייל בבקשה' ></input>
          <h3>333</h3>
            <button type='submit'> התחבר </button>
         </form>
            <button type='submit' className='google-btn'> התחבר עם גוגל  </button>

    </main>
  )
}