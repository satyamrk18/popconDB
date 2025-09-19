import axios from "axios";
import { useEffect, useInsertionEffect, useState } from "react";
import { useParams, Link, RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import MovieCard from "./../components/MovieCard.jsx";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setsearch] = useState("");
  const [error, setError] = useState("");
  const loadAllMovies = async () => {
    const response = await axios.get(`${import.meta.env.VITE_URL}/movies`);
    console.log(response.data.data);
    setMovies(response.data.data);
  };
  useEffect(() => {
    loadAllMovies();
  }, []);
  //search movie
  useEffect(() => {
    seachMovie();
  }, [search]);

  const seachMovie = async () => {
    try {
      toast.loading("searching...", { id: "searching" });
      const response = await axios.get(
        `${import.meta.env.VITE_URL}/movies/search?q=${search}`
      );
      setMovies(response.data.data);
      toast.dismiss("searching");
      toast.dismiss("error")
      setError("");

    } catch (error) {
      toast.dismiss("searching");
      toast.error(error.response?.data?.message,{id:"error"});
      setMovies([]);
      setError(error.response?.data?.message);
    }
  };
  return (
    <div className="overflow-x-auto scrollbar-hide w-full">
     <div className="flex flex-col items-center">
       <p className="text-2xl mt-10">Admin Log In</p>
      <input
        type="text"
        placeholder="enter a movie name"
        className="border-2 border-solid rounded-lg p-2 m-10"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
     </div>
      {/* if movie not found */}
      {error ? <div>{error}</div> : null}
    
    {/* rendering movies */}
      
      <div className="flex justify-evenly g-6 p-6 flex-wrap">
        {movies.map((movieOBJ, index) => {
          const { _id, title, image, category, year, rating } = movieOBJ;
          return (
            <MovieCard
              key={_id}
              title={title}
              image={image}
              category={category}
              year={year}
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
