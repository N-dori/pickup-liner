
import { NextResponse } from 'next/server'
import User from '../../models/user'
export async function POST (request) {

 try {

     const { name , email , password  } = await request.json()
 
    await connectMongoDB ()
    await User.create({ name , email , password  })
 
  return NextResponse.json({message: "User creacted" }, {status: 201 } )
 }catch ( err ) {
    console.log('had a problem creating new user', err);
 }
}