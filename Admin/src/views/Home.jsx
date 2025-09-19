import axios from "axios";
import { use, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MovieCard from "./../components/MovieCard.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Load all movies
  const loadAllMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/movies`);
      setMovies(response.data.data);
      console.log(response.data.message)
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to load movies");
      setMovies([]);
    }
  };

  // Search movies
  const searchMovie = async () => {
    if (!search.trim()) {
      loadAllMovies();
      return;
    }
    try {
      toast.loading("Searching...", { id: "searching" });
      const response = await axios.get(
        `${import.meta.env.VITE_URL}/movies/search?q=${search}`
      );
      setMovies(response.data.data);
      setError("");
      toast.dismiss("searching");
    } catch (error) {
      toast.dismiss("searching");
      const msg = error.response?.data?.message || "Search failed";
      toast.error(msg);
      setError(msg);
      setMovies([]);
    }
  };
useEffect(()=>
{
  searchMovie()
},[search])
  // Initial load
  useEffect(() => {
    loadAllMovies();
  }, []);


  return (
    <div className="overflow-x-auto scrollbar-hide">
      {/* Search box */}
      <div className="flex flex-col items-center gap-7  mt-4">
        <p className="text-4xl text-bold">Admin Log In</p>
        <Navbar />
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-1/2"
        />
      </div>

      {/* Error message */}
      {error && <div className="text-center text-red-500 mt-4">{error}</div>}

      {/* Render movies */}
      <div className="flex justify-evenly gap-6 p-6 flex-wrap">
        {movies.map((movieOBJ) => {
          const { _id, title, image, category, year, rating } = movieOBJ;
          return (
            <MovieCard 
            key={_id}
            image={image}
            title={title}
            rating={rating}
            />
          );
        })}
      </div>

      <Toaster />
    </div>
  );
};

export default Home;
