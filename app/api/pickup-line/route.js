import connectMongoDB from '../../libs/mongoDB'
import { NextResponse } from "next/server"
import PickupLine from '../../models/pickupLine'


export async function POST (request) {

    const { line } = await request.json()

   await connectMongoDB ()
   await PickupLine.create({ line })

 return NextResponse.json({message: "PicupLine creacted" }, {status: 201 } )
}

export async function GET () {
    await connectMongoDB ()
   const pickupLine =  await PickupLine.find()

  return  NextResponse.json({pickupLine})
}

export async function DELETE (request) {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB ()
    await PickupLine.findByIdAndDelete(id)
    return NextResponse.json({message: "PicupLine deleted" }, {status: 200 } )

}