import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Single from "../../Components/Single/Single";

const Details = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [recommendations, setRecommendation] = useState([]);
  console.log(recommendations);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setDetails(res.data);
      });
  }, [params.id, params.type]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${params.type}/${params.id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setRecommendation(res.data.results);
      });
  }, [params.id, params.type]);
  return (
    <div className="h-screen mt-16">
      <div className="flex ">
        <img
          src={`${process.env.REACT_APP_IMAGE_BASE}${details.poster_path}`}
          className="w-80 mr-28"
          alt="moviePic"
        />
        <div className="mt-8">
          <div className="name text-3xl text-gray-400 ">{details.title}</div>

          <div className="genres flex my-5">
            {details.genres?.map((genre) => {
              return (
                <p
                  key={genre.id}
                  className="text-gray-500 border rounded-full border-gray-500 mr-3 py-1 px-3"
                >
                  {genre.name}
                </p>
              );
            })}
          </div>

          <div className="releaseDate text-gray-500 text-xl mb-4">
            <b>Released on: </b>
            {details.release_date}
          </div>

          <div className="text-gray-500 text-xl mb-4">
            <b>Rating: </b>
            {details.vote_average} ({details.vote_count} vote counted)
          </div>

          <div className="plot">
            <p className="text-gray-400 w-2/3">
              <b>Plot:</b> {details.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="recommendations mt-5">
        <h1 className="text-gray-500 text-3xl">Recommendations for you</h1>
        <div className="grid grid-cols-4 gap-3 mt-2">
          {recommendations.slice(0, 4).map((latest) => {
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
    </div>
  );
};

export default Details;
