import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [tv, setTv] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        console.log(res.status);
      });
  }, [params.id]);
  return (
    <div>
      <h1 className="text-white">{details.title ? details.title : tv.title}</h1>
    </div>
  );
};

export default Details;
