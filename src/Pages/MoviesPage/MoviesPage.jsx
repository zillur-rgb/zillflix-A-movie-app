import axios from "axios";
import React, { useEffect, useState } from "react";
import Single from "../../Components/Single/Single";
import Search from "../../Components/Search/Search";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc`
      )
      .then((res) => setMovies(res.data.results));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-white text-2xl font-bold">Latest Movies</h1>

      <div className="grid grid-cols-4 gap-3 mt-2">
        {movies.map((latest) => {
          return (
            <div key={latest.id}>
              <Single trend={latest} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesPage;
