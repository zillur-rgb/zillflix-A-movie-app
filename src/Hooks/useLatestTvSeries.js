import axios from "axios";
import { useEffect, useState } from "react";

const useLatestTvSeries = () => {
  const [latestTv, setLatestTv] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => setLatestTv(res.data));
  }, []);

  return [latestTv, setLatestTv];
};

export default useLatestTvSeries;
