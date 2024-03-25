'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
type Props = {}

export default function LoginForm({}: Props) {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const handelSubmit = async (e:any) => {
    e.preventDefault()

    try{
    const res =  await signIn('credentials', {
          email, password , redirect:false
                                             })
    if(res?.error){
    setError("  פרטים אינם נכונים נסה שוב")
    return 
 }
 router.replace('/')
}catch( err ){
  console.log('had a problom...');
  
}
}

const handelGoogleRegistion = async () => {

  const res = await signIn('google')

  }
  return (
    <main className='signup-container flex-col flex-jc-ac gc2 gap1'>
         <form onSubmit={handelSubmit} className='signup-form flex-col flex-jc gap1'>

          <h2>התחברות</h2>

            <input onChange={(e) => setEmail(e.target.value)} className='form-input' type='text' placeholder='מייל בבקשה' ></input>

            <input onChange={(e) => setPassword(e.target.value)} className='form-input' type='password' placeholder='סיסמא' ></input>

            <Link href={'/signup'}>לא רשום עדיין? לחץ כאן</Link>
            <button type='submit'> התחבר </button>
            {error&& (
              <section className='error-box'> {error}</section>
            )}
         </form>
            <button type='submit' onClick={ handelGoogleRegistion} className='google-btn'><Image src={'/google_img.jpg'} alt={'G'} width={20} height={20}></Image> התחבר עם גוגל  </button>

    </main>
  )
}