import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieCard from "./../components/MovieCard.jsx"
const Home = () => {
  const [movies, setMovies] = useState([]);
  const loadAllMovies = async () => {
    const response = await axios.get(`${import.meta.env.VITE_URL}/movies`);
    console.log(response.data.data);
    setMovies(response.data.data);
  };
  useEffect(() => {
    loadAllMovies();
  }, []);

  return (
    <div className="overflow-x-auto scrollbar-hide">
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
    </div>
  );
};
export default Home;
