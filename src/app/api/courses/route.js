import courseModel from "@/models/courses"
import { dbConnect } from "@/utils/db"
import { NextResponse } from "next/server"

export const POST=async (req)=>{
    try {
        
    } catch (error) {
        console.log(error.message)
        return new NextResponse(JSON.stringify({msg:"serverr Error"}), {status:500})

    }
    // desrtucture incoming data
    const {name,code,lecturer}=await req.json()
    // call databae connection
   await  dbConnect()
//    Insert courses into datbase
    const courses=new courseModel({lecturer,name,code});
    await courses.save()
    if(!courses){
        return new NextResponse(JSON.stringify({msg:"courses not registered"}), {status:400})
    }

    return new NextResponse(JSON.stringify({msg:"courses registered"}), {status:200})

}

export const GET=async (req)=>{
    // call datbase conn
    await dbConnect();
    const courses=await courseModel.find();
    if(!courses){
        return new NextResponse(JSON.stringify({msg:"no coureses available"}), {status:404})

    }

    return new NextResponse(JSON.stringify(courses), {status:200})

}