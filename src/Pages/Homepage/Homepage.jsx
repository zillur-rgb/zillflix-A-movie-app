import React from "react";
import LatestMovies from "../../Components/LatestMovies/LatestMovies";
import LatestTv from "../../Components/LatestTv/LatestTv";
import Trending from "../../Components/Trending/Trending";

const Homepage = () => {
  return (
    <div>
      <Trending />
      <div className="grid grid-cols-2 gap-10">
        <LatestMovies />
        <LatestTv />
      </div>
    </div>
  );
};

export default Homepage;
