import { model, Schema } from "mongoose";

//schema  = means structure
//model  = document

const moviesSchema = new Schema(
  {
    title: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    image: { type: [String], require: true },
    category: { type: String, require: true },
    director: { type: String, require: true },
    year: { type: Number, require: true },
    rating: { type: Number, require: true },
  },
  { timestamps: true }
); //timestamps automatically handle the creation date, updation date of the data or document

const Movie = model("Movie", moviesSchema);
export default Movie;
