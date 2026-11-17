import mingooose from "mongoose";
const connectDB = async () => {
    try {
   const connection = await mingooose.connect
   ('${process.env.MONGODB_URI}') 
   console.log(`\n MongoDB connected: 
    ${connection.connection.host}`);


    }catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
    }
}

export default connectDB;