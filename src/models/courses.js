import mongoose from "mongoose"

const courseSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    courseCode:{
        required:true,
        type:Number
    },
    lecturer:{
        type:String,
        required:true
    }

})

const courseModel=mongoose.models.courses || mongoose.model('course',courseSchema)

export default courseModel