import Movie from "./../models/movies.js";

//to save all the data
const saveAllMovies = async (req, res) => {
  const { title, description, image, category, director, year, rating } =
    req.body;

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
};

//To get all the movies
const getAppMovies = async (req, res) => {
  const movies = await Movie.find();

  res.json({
    success: true,
    data: movies,
    message: "movies loaded successfully !",
  });
};

//search movie api
const getSearchMovie = async (req, res) => {
  const { q } = req.query;
  const movies = await Movie.find({
    $or: [
      { title: { $regex: q, $options: "i" } }, //regex is a type of query parameter in TOC
      { description: { $regex: q, $options: "i" } },
      { category: { $regex: q, $options: "i" } },
      { director: { $regex: q, $options: "i" } },
    ],
  });
  if (movies.length === 0) {
    return res.status(404).json({
      success: false,
      data: [],
      message: "movie not fount",
    });
  } else {
    return res.status(200).json({
      success: true,
      data: movies,
      message: "movie search successfully",
    });
  }
};

//search by ID api
const searchById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.json({
      success: true,
      data: movie,
      message: "pericular movie data is found",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const health = (req, res) => {
  res.json({
    success: true,
    message: "server is healthy",
  });
};

export { getAppMovies, searchById, health, saveAllMovies, getSearchMovie };
