import mongoose from "mongoose";

const connectDb= async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS={
            dbName:"ChatDb"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("Mongoose connected")
    
    }
    catch(e){
        console.log(e)
    }


}
export default connectDb