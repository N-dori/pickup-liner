import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import './assets/scss/main.scss'
import NavBar from './cmps/NavBar'
import { AuthProvider } from './Providers'

const fredoka = Fredoka({ 
                         subsets: ['latin'],
                         variable: '--font-fredoka' 
                        })

export const metadata: Metadata = {
  title: 'Pick up line generator',
  description: 'Pick up line generatorrrrrrr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={`${fredoka.variable}`}>

      <body className='main-layout '>
        <AuthProvider>
        <NavBar/>
        {children}
        </AuthProvider>
     
      </body>
    </html>
  )
}
