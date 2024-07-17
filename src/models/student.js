import mongoose from "mongoose"


const studentSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },

    lastname:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true

    },
    phone:{
        type:Number,
        required:true,
    

    },

    password:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        
    },
    otpVerified:{
        type:Boolean,
        default:false
    },
    otpExpired:{
        type:Number
    }
    // courses:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"courses"
    //     }
})

const studentModel=mongoose.models.student || mongoose.model('student',studentSchema)
export default studentModel

