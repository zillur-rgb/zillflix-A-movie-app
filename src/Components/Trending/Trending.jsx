import axios from "axios";
import React, { useEffect, useState } from "react";
import useTrending from "../../Hooks/useTrending";
import Single from "../Single/Single";

const Trending = () => {
  const [trending, setTrending] = useTrending();
  return (
    <div>
      <div className="header flex items-center justify-between">
        <h1 className="mt-10 text-white text-2xl font-bold">Trending Now</h1>
        <button className="text-white mt-8">Show More</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {trending.slice(0, 6).map((trend) => {
          return (
            <div key={trend.id}>
              <Single trend={trend} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
