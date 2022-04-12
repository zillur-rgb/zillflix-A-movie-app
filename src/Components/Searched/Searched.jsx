import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Single from "../Single/Single";

const Searched = () => {
  const [searchResult, setSearchResult] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${params.keyword}&language=en-US&page=1`
      )
      .then((res) => setSearchResult(res.data.results));
  }, [params.keyword]);

  console.log(params);
  return (
    <div className="my-10">
      <div className="header flex items-center gap-4">
        <h1 className="text-white text-2xl font-bold">Search results</h1>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-2">
        {searchResult.map((res) => {
          return (
            <div key={res.id}>
              <Single
                trend={res}
                type={res.media_type ? res.media_type : "movie"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Searched;
