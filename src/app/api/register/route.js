import studentModel from "@/models/student"
import { dbConnect } from "@/utils/db"
import bcrypt, { genSaltSync } from 'bcryptjs'
import { NextResponse } from "next/server"
import { generateRandomNumber, sendOTPByEmail } from "../helpers/helpers"

export const POST = async (req) => {
    try {


        // take incoming data
        const { password, firstname, lastname, phone, email } = await req.json()

        // call database connectiom
        await dbConnect()

        // check if email exists in the databse
        const studentExists =await  studentModel.findOne({ email });
        if (studentExists) {
            console.log(studentExists)
            return new NextResponse(JSON.stringify({ msg: "Student Already Exists" }), { status: 401 })

        }
<<<<<<< HEAD

        // if user is registered, send user mail

        const otp=generateRandomNumber()
        sendOTPByEmail(email,otp);
        return new NextResponse(JSON.stringify({msg:"user registered successfully"}, {status:201}))
        
=======
        else {
            // remember, we dont't need to store our passwrd 
            const salt = genSaltSync(16)
            const hashedPassword = bcrypt.hashSync(password, salt)
            const otpExpired = Date.now() + 100000

            // store n the databse
            const student = new studentModel({ firstname, lastname, phone, email, password: hashedPassword, otpExpired });
            await student.save()

            // if user is not registered successfully 
            if (!student) {
                return new NextResponse(JSON.stringify({ msg: "Student not registered" }), { status: 400 })

            }
            // if user is registered, send user mail

            const otp = generateRandomNumber()
            sendOTPByEmail(email, otp);
            return new NextResponse(JSON.stringify({ msg: "user registered successfully" }), { status: 201 })
        }

>>>>>>> a0931fcb1cc5e895d51f3446ae3f6505bddc33f0
    }
    
    catch (err) {
        console.log("this is the error ", err.message)
        return new NextResponse(JSON.stringify({ msg: "Server Error" }), { status: 500 })
    }


}