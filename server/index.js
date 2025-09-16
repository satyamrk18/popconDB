//all imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import {getAppMovies,searchById,health,saveAllMovies} from "./controller/Movies.js"
//all configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
//Database connection
const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGODB_URL);
  if (connect) {
    console.log("Database connect successfully 🗃");
  }
};
//API  requests

//1] POST to add the movies in database

app.post("/movies",saveAllMovies);

//To get all the movies
app.get("/movies", getAppMovies);

//search by ID api 
app.get("/movies/:id",searchById)


app.get("/health",health);

//server runnig
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running successfuly in port ${PORT} 🗄 `);
  connectDB();
});
