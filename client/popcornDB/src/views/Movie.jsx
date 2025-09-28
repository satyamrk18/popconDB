import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Eye } from 'lucide-react';
const Movie = () => {
  const [movie, setMovie] = useState();
  //to set other movies
  const [otherMovies, setOtherMovies] = useState([]);
  //get the movie id
  const { id } = useParams();
  console.log(id);
  //get the perticular movie
  const loadperticularMovie = async () => {
    try {
      //to load the perticular movie
      const response = await axios.get(
        `${import.meta.env.VITE_URL}/movies/${id}`
      );
      setMovie(response.data.data);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  //increment the view count
  const viewCount = async () => {
    // 2️Increment views only if not already counted
    const viewed = await sessionStorage.getItem(`viewed_${id}`);
    if (!viewed) {
      await axios.patch(`${import.meta.env.VITE_URL}/movies/${id}/views`);
      sessionStorage.setItem(`viewed_${id}`, "true");
    }
  };
  //load the movie
  useEffect(() => {
    loadperticularMovie();
    viewCount();
  }, [id]);
 //resnder the other movies
const loadmovie = async ()=>
{
const response = await axios.get(`${import.meta.env.VITE_URL}/movies`);
setOtherMovies(response.data.data);
console.log(response.data.data)
}
useEffect(()=>{loadmovie()},[])

 //loading the movies
  if (!movie) {
  return toast.loading("loading...",{id:"loading"})
  }
  return (
    <div className="w-full bg-amber-300 flex items-center justify-center flex-col">
      {toast.dismiss("loading")}
      {/* Back to Home */}
      <Link
        to="/"
        className="border px-4 py-2 rounded-lg shadow-sm bg-white hover:bg-gray-200 fixed top-6 left-6 transition"
      >
        ⬅ Home
      </Link>

      {/* Movie Card */}
      <div className="max-w-3xl mx-auto border p-6 mt-10 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 bg-white">
        {/* Movie Poster */}
        <img
          src={movie.image[0]}
          alt={movie.title}
          className="w-full md:w-[30%] rounded-lg shadow-md object-cover"
        />

        {/* Movie Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-gray-800">
            {movie.title}
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            {movie.description}
          </p>

          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Category:</span> {movie.category}
            </p>
            <p>
              <span className="font-semibold">Director:</span> {movie.director}
            </p>
            <p>
              <span className="font-semibold">Year:</span> {movie.year}
            </p>
          <p className="flex items-center gap-2">Views: {movie.views}<Eye size={15} /></p>
            <p>
              Rating: {movie.rating}{" "}
              {Array.from({ length: movie.rating }).map((_, index) => (
                <span key={index} className="text-amber-400 text-lg">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - movie.rating }).map((_, index) => (
                <span key={index} className="text-gray-500 text-lg">
                  ★
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
       {/* Render movies */}
      <div className="flex justify-evenly gap-6 p-6 flex-wrap">
        {otherMovies.map((movieOBJ) => {
          const { _id, title, image, category, year, rating } = movieOBJ;
          return (
            <div key={_id}>
              <Link to={`/movie/${_id}`}>
                <MovieCard
                  key={_id}
                  image={image}
                  title={title}
                  rating={rating}
                  year={year}
                  category={category}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Toaster />
    </div>
  );
};
export default Movie;
