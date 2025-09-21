import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MovieCard from "./../components/MovieCard.jsx";
import { Link } from "react-router";
import img404 from "./../ascets/images/img404.png"
import Navbar from "./../components/Navbar.jsx"
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Load all movies
  const loadAllMovies = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/movies`);
      setMovies(response.data.data);
      console.log(response.data.message);
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
  useEffect(() => {
    searchMovie();
  }, [search]);
  // Initial load
  useEffect(() => {
    loadAllMovies();
  }, []);

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <p className="text-center text-4xl font-bold m-10">Admin Log In</p>
      <Navbar />
      {/* Search box */}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-1/2"
        />
      </div>

      {/* Error message */}
      {error && <div className="flex items-center justify-center"><img src={img404} alt="movvie not found image"/></div>}

      {/* Render movies */}
      <div className="flex justify-evenly gap-6 p-6 flex-wrap">
        {movies.map((movieOBJ) => {
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

export default Home;
