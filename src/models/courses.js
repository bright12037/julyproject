import mongoose from "mongoose"

const courseSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    courseCode:{
        type:String
    },
    lecturer:{
        type:String,
        required:true
    }

})

const courseModel=mongoose.models.course || mongoose.model('course',courseSchema)

export default courseModel