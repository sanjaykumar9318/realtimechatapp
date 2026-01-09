import mongoose from 'mongoose';

export const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDb connected: ${mongoose.connection.host}`);
    }
    catch(err){
        console.log(err);
    }
}