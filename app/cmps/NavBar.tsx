import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <nav className='nav-bar flex-sb full'>
          <Link href={'/'} className='logo'> THEchild</Link>
           <Image
            className='hero'
            src={'/theChild.jpg'}
            width={100}
            height={100}
            alt='pic'
            priority
          />
          <Link href={'/login'} className='signup-btn clean no-under-line'>התחברות</Link>
    </nav>
  )
}