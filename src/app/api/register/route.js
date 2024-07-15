import { dbConnect } from "@/utils/db"
import bcrypt, { genSaltSync } from 'bcryptjs'

export const POST=async (req)=>{
    // take incoming data
    const {password,firstname,lastname,phone,email}=await req.json()

    // call database connectiom
    await dbConnect()
    // remember, we dont't need to store our passwrd 
    const salt=genSaltSync(16)
    const hashedPassword= bcrypt.hashSync(password,salt)

    // store n the databse
    

}