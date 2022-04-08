import axios from "axios";
import { useEffect, useState } from "react";

const useLatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => setLatestMovies(res.data.results));
  }, []);

  return [latestMovies, setLatestMovies];
};

export default useLatestMovies;
