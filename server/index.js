//all imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import Movie from "./models/movies.js";
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

app.post("/movies", async (req, res) => {
  const { title, description, image, category, director, year, rating } = req.body;

  const newMovies = new Movie({
    title,
    description,
    image,
    category,
    director,
    year,
    rating,
  });

  //saving the movie
  const saveMovie = await newMovies.save();
  res.json({
    success: true,
    sata: saveMovie,
    message: "movie save successfully !",
  });
});

//To get all the movies
app.get("/movies", async(req,res)=>
{
  const movies = await Movie.find();

  res.json({
    success:true,
    data:movies,
    message:"movies loaded successfully !"
  })
})

//search by ID api 

app.get("/movies/:id", async(req,res)=>
{
  const {id} = req.params;
  try{
    const movie = await Movie.findById(id);
    res.json({
      success:true,
      data:movie,
      message:"pericular movie data is found"
    })
  }
catch(error)
{
 res.json({
  success:false,
  message:error.message
 })
}
})


app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "server is healthy",
  });
});

//server runnig
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running successfuly in port ${PORT} 🗄 `);
  connectDB();
});
