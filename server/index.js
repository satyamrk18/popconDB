//all imports
import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors"

//all configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//Database connection
const connectDB = async()=>
{
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    if(connect)
    {
        console.log("Database connect successfully 🗃");
    }
}


//API  requests
app.get("/health",(req,res)=>
{
    res.json({
        success:true,
        message:"server is healthy"
    })
})


//server runnig
const PORT =process.env.PORT || 8000;
app.listen(PORT,()=>
{
    console.log(`server is running successfuly in port ${PORT} 🗄 `);
    connectDB();
})