import mongoose from "mongoose"

export const dbConnect=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGODB_URI);
        if(connect){
            console.log("DB connected")
        }
        return connect;

    }
    catch(err){
        console.log("mongo db Erro " , err)
    }
}
