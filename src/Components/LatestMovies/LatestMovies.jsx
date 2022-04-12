import React from "react";
import { Link } from "react-router-dom";
import useLatestMovies from "../../Hooks/useLatestMovies";
import Single from "../Single/Single";

const LatestMovies = () => {
  const [latestMovies] = useLatestMovies();
  console.log(latestMovies);
  return (
    <div className="my-10">
      <div className="header flex items-center gap-4">
        <h1 className="text-white text-2xl font-bold">Latest Movies</h1>
        <Link to="/movies">
          <button className="text-purple-200 underline hover:no-underline">
            View All
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-2">
        {latestMovies.slice(0, 4).map((latest) => {
          return (
            <div key={latest.id}>
              <Single
                trend={latest}
                type={latest.media_type ? latest.media_type : "movie"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestMovies;
