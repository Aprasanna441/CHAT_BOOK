import mongoose, { mongo } from "mongoose";

const connectDb= async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS={
            dbName:"ChatDb"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
    
    }
    catch(e){
        console.log(e)
    }


}
export default connectDb