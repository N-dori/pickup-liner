import SignInForm from "../cmps/SignInForm"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

type Props = {}
export default async function page({ }: Props) {
  
  const session = await  getServerSession(authOptions as any )
console.log('session session',session);

  if(session){
    redirect('/')
  }
  return (
     <SignInForm></SignInForm>
  )
}