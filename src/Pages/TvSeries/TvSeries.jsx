import axios from "axios";
import React, { useEffect, useState } from "react";
import Single from "../../Components/Single/Single";

const TvSeries = () => {
  const [tv, setTv] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc`
      )
      .then((res) => setTv(res.data.results));
  }, []);
  return (
    <div className="my-10">
      <div className="header flex items-center gap-4">
        <h1 className="text-white text-2xl font-bold">Latest Movies</h1>
        <button className="text-purple-200 underline hover:no-underline">
          View All
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-2">
        {tv.map((latest) => {
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

export default TvSeries;
