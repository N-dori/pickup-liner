import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Login({}: Props) {
  return (
    <main className='signup-container flex-col flex-jc-ac gc2 gap1'>
         <form className='signup-form flex-col flex-jc gap1'>
          <h2>התחברות</h2>
            <input className='form-input' type='text' placeholder='שמך?' ></input>
            
            <input className='form-input' type='text' placeholder='מייל בבקשה' ></input>
            <Link href={'/signup'}>לא רשום עדיין? לחץ כאן</Link>
            <button type='submit'> התחבר </button>
         </form>
            <button type='submit' className='google-btn'> התחבר עם גוגל  </button>

    </main>
  )
}