import { model, Schema } from "mongoose";

//schema  = means structure
//model  = document

const moviesSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: [String], required: true },
    category: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, required: true },
    views: {type:Number, default:0},
  },
  { timestamps: true }
); //timestamps automatically handle the creation date, updation date of the data or document

const Movie = model("Movie", moviesSchema);
export default Movie;
