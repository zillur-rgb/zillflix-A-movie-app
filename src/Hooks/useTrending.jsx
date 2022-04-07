import axios from "axios";
import { useEffect, useState } from "react";

const useTrending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setTrending(res.data.results));
  }, []);

  return [trending, setTrending];
};

export default useTrending;
