import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddMovie = () => {
  const [movies, setMovies] = useState({
    title: "",
    description: "",
    image: [""],
    category: "",
    director: "",
    year: "",
    rating: 0,
  });
const navigate = useNavigate()
  const saveMovie = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/movies`,
        movies
      );
      console.log(response.data.message);
      setMovies({
        title: "",
        description: "",
        image: [""],
        category: "",
        director: "",
        year: "",
        rating: 0,
      });
      navigate("/")
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-5">
      <Navbar />
      <p className="flex items-center justify-center text-4xl font-bold text-gray-800 mt-10">
        Admin Log In
      </p>

      <div className="flex items-center justify-center mt-10">
        <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg flex flex-col gap-6">
          <input
            type="text"
            required
            placeholder="Enter Movie Title"
            value={movies.title}
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovies({ ...movies, title: e.target.value });
            }}
          />
          <input
            type="text"
            required
            value={movies.description}
            placeholder="Enter Movie Description"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovies({ ...movies, description: e.target.value });
            }}
          />

          <select
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovies({ ...movies, category: e.target.value });
            }}
            value={movies.category}
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
            value={movies.image[0] || ""}
            placeholder="Enter Movie Image Link"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovies({ ...movies, image: [e.target.value] });
            }}
          />
          <input
            type="text"
            required
            value={movies.director}
            placeholder="Director Name"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovies({ ...movies, director: e.target.value });
            }}
          />
          <input
            type="number"
            value={movies.year}
            placeholder="enter year of launch"
            required
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => {
              setMovies({ ...movies, year: e.target.value });
            }}
          />
          <div className="flex flex-col">
            <input
              type="range"
              required
              value={movies.rating}
              min={0}
              max={5}
              className="w-full accent-blue-500"
              onChange={(e) => {
                setMovies({ ...movies, rating: Number(e.target.value) });
              }}
            />
            <p>{movies.rating}</p>
          </div>

          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
            onClick={() => {
              saveMovie();
            }}
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
