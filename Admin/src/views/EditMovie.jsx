import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const EditMovie = () => {
  const [movie,setMovie] = useState({
     title:"",
    description:"",
    image:[],
    category:"",
    director:"",
    year:0,
    rating:0,
  })
  const { id } = useParams();
  const loadMovie = async () => {
    const response = await axios.get(`${import.meta.env.VITE_URL}/movies/${id}`);
    setMovie(response.data.data);
    console.log(response.data.data);
    
  };
  //load the existing movie
  useEffect(() => {
    loadMovie();
  },[]);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Back to Home */}
      <Link
        to="/"
        className="border px-4 py-2 rounded-lg shadow-sm bg-white hover:bg-gray-200 fixed top-6 left-6 transition">
        ⬅ Home
      </Link>

      {/* Movie Card */}
      <div className="max-w-3xl mx-auto mt-24 border p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 bg-white">
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
    </div>
  );
};
export default EditMovie;
