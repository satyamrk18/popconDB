//all imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import {
  getAppMovies,
  searchById,
  health,
  saveAllMovies,
  getSearchMovie,
  updateMovieRating,
  updateMovie,
  deletMovie,
} from "./controller/Movies.js";

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

app.post("/movies", saveAllMovies);

//To get all the movies
app.get("/movies", getAppMovies);

//Search the movie api by it's title or category or description or director
app.get("/movies/search", getSearchMovie);

//to update the entire data of the movie
app.put("/movies/:id/update", updateMovie);

//update the rating
app.patch("/movies/:id/rating", updateMovieRating);

//search by ID api
app.get("/movies/:id", searchById);

//delet the movie
app.delete("/movies/:id",deletMovie);

//heath api
app.get("/health", health);

//server runnig
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running successfuly in port ${PORT} 🗄 `);
  connectDB();
});
