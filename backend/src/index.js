import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({
    path: './.env'
}); // Load environment variables from .env file

const startServer = async () => {
    try {
         await connectDB(); // Connect to the database

         app.on("error", (err) => {
            console.error("Error occurred in the server:", err);
            throw err;


         });

         app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port :
                 ${process.env.PORT || 8000}`);

                 });           
    } catch (error) {
       console.log("MongoDB connection error:", error);
    }
}
    startServer(); 