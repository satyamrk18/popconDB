import Movie from "./../models/movies.js";

//to save all the data
 const saveAllMovies =  async (req, res) => {
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
}


//To get all the movies
const getAppMovies = async(req,res)=>
{
  const movies = await Movie.find();

  res.json({
    success:true,
    data:movies,
    message:"movies loaded successfully !"
  })
}

//search by ID api 
 const searchById =  async(req,res)=>
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
}

const health = (req, res) => {
  res.json({
    success: true,
    message: "server is healthy",
  });
}

export {getAppMovies,searchById,health,saveAllMovies}