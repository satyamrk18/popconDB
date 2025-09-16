import {model, Schema} from "mongoose"

//schema  = means structure
//model  = document

const moviesSchema  = new Schema({
    title:{type:String},
    description:{type:String},
    image:{type:[String]},
    category:{type:String},
    director:{type:String},
    year:{type:Number},
    rating:{type:Number}
});

const Movie = model('Movie',moviesSchema)
export default Movie;



