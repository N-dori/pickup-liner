import mongoose, { Schema } from "mongoose";

const userSceama = new Schema ({
    name : String ,
    lastName : String ,
    adress : String ,
    isAdmin : Boolean ,



},
{
    timestamps:true
})

const User = mongoose.models.user || mongoose.model('user', userSceama) 

export default User