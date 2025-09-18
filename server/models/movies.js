import {model, Schema} from "mongoose"

//schema  = means structure
//model  = document

const moviesSchema  = new Schema({
    title:{type:String, require:true, unique: true},
    description:{type:String, require:true},
    image:{type:[String], require: true},
    category:{type:String, require:true},
    director:{type:String, require:true},
    year:{type:Number, require:true},
    rating:{type:Number, require:true},
});

const Movie = model('Movie',moviesSchema)
export default Movie;



