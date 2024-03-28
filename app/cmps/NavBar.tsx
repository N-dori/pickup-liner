'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'

type Props = {}
export default function NavBar({}: Props) {

  const {data:session} = useSession()
 
  console.log('session : ', session);



  return (
    <nav className='nav-bar flex-sb  full'>
          <Link href={'/'} className='logo'>Kinder</Link>
           <Image
            className='hero'
            src={'/theChild.jpg'}
            width={100}
            height={100}
            alt='pic'
            priority
          />
          <div className='flex-col'>
         
          {session?.user?.email? 
          <>
          <span className='cp' onClick={() => signOut()}> התנתק</span>
          <span> {session?.user?.email}</span>
          </>
           :<Link href={'/login'} className='signup-btn clean no-under-line'>התחברות</Link>}

          </div>
    </nav>
  )
}