import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const EditMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    image: [],
    category: "",
    director: "",
    year: 0,
    rating: 0,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const loadMovie = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_URL}/movies/${id}`
    );
    setMovie(response.data.data);
    console.log(response.data.data);
  };
  //load the existing movie
  useEffect(() => {
    loadMovie();
  }, []);

  //save the updated movie
  const saveMovie = async () => {
    try{
      const response = await axios.put(
      `${import.meta.env.VITE_URL}/movies/${id}/update`,
      movie
    );
    alert(response.data.message);
    navigate(`/movie/${id}`);
    }
    catch(error)
    {
      console.log(error.response?.data?.message)
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-row items-center justify-evenly flex-wrap gap-10">
      {/* Back to Home */}
      <Link
        to="/"
        className="border px-4 py-2 rounded-lg shadow-sm bg-white hover:bg-gray-200 fixed top-6 left-6 transition"
      >
        ⬅ Home
      </Link>

      {/* Movie Card */}
      <div className="max-w-3xl border p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 bg-white">
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
      {/* update form */}
      <div>
        <form className="bg-white shadow-xl rounded-2xl p-8 w-fit flex flex-col gap-6">
          <input
            type="text"
            required
            placeholder="Enter Movie Title"
            value={movie.title}
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovie({ ...movie, title: e.target.value });
            }}
          />
          <input
            type="text"
            required
            value={movie.description}
            placeholder="Enter Movie Description"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovie({ ...movie, description: e.target.value });
            }}
          />

          <select
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovie({ ...movie, category: e.target.value });
            }}
            value={movie.category}
          >
            <option value="">Select Category</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Animation">Animation</option>
            <option value="Documentary">Documentary</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="Crime">Crime</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
            <option value="Historical">Historical</option>
            <option value="Biopic">Biographical</option>
            <option value="Family">Family</option>
            <option value="Kids">Kids</option>
            <option value="Sports">Sports</option>
            <option value="Experimental">Experimental</option>
          </select>

          <input
            type="text"
            required
            value={movie.image[0] || ""}
            placeholder="Enter Movie Image Link"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovie({ ...movie, image: [e.target.value] });
            }}
          />
          <input
            type="text"
            required
            value={movie.director}
            placeholder="Director Name"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovie({ ...movie, director: e.target.value });
            }}
          />
          <input
            type="number"
            value={movie.year}
            placeholder="enter year of launch"
            required
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovie({ ...movie, year: e.target.value });
            }}
          />
          <div className="flex flex-col">
            <input
              type="range"
              required
              value={movie.rating}
              min={0}
              max={5}
              className="w-full accent-blue-500"
              onChange={(e) => {
                setMovie({ ...movie, rating: Number(e.target.value) });
              }}
            />
            <p>{movie.rating}</p>
          </div>

          <button
            type="button"
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
            onClick={() => {
              saveMovie();
            }}
          >
            Update Movie
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditMovie;
