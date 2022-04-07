import axios from "axios";
import { useEffect, useState } from "react";

const useLatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => setLatestMovies(res.data));
  }, []);

  return [latestMovies, setLatestMovies];
};

export default useLatestMovies;
