import React from "react";
import { Link } from "react-router-dom";
import useLatestTvSeries from "../../Hooks/useLatestTvSeries";
import Single from "../Single/Single";

const LatestTv = () => {
  const [latestTv] = useLatestTvSeries();

  return (
    <div className="my-10">
      <div className="header flex items-center gap-4">
        <h1 className="text-white text-2xl font-bold">Latest TV Series</h1>
        <Link to="/series">
          <button className="text-purple-200 underline hover:no-underline">
            View All
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-2">
        {latestTv.slice(0, 4).map((latest) => {
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

export default LatestTv;
