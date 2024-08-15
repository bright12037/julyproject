import studentModel from "@/models/student";
import { dbConnect } from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export const POST=async(req)=>{
    // handle incoming data
    const {password,email}=await req.json();
    try {
        // call database connection
        await dbConnect()
        const student=await studentModel.findOne({email})
        // the student passes a wrong email
        if(!student){
        return new NextResponse(JSON.stringify({msg:"Invalid credentials"}), {status:401})

        }
        // compare user password
        // remember we hashed the user password before storing in the database
        const passwordTrue=bcrypt.compareSync(password,student.password)
        if(!passwordTrue){
        return new NextResponse(JSON.stringify({msg:"Invalid credentials"}), {status:401})

        }


        return new NextResponse(JSON.stringify({msg:"login successful"}), {status:200})
    } catch (error) {
        console.log(error.message)
        return new NextResponse({msg:"server Error"}, {status:500})
    }
    // 
}