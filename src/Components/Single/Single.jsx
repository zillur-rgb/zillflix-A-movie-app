import React from "react";
import { MdLocalMovies, MdWeb } from "react-icons/md";

const Single = ({ trend }) => {
  return (
    <div
      style={{
        height: "300px",
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, .5)), url(
            ${process.env.REACT_APP_IMAGE_BASE}${trend.poster_path}
        )`,
      }}
      className="object-cover bg-center bg-cover rounded-xl my-2 relative"
    >
      <div className="absolute bottom-0 left-0 text-white mb-5 ml-5">
        <div className="flex items-center">
          <p>
            {trend.release_date ? trend.release_date.slice(0, 4) + " - " : " "}
          </p>

          <div>
            {trend.media_type === "movie" ? (
              <div className="flex items-center">
                <MdLocalMovies className="text-2xl mr-1 pt-1" /> Movie
              </div>
            ) : (
              <div className="flex items-center">
                <MdWeb className="mr-1 text-2xl pt-1" />
                <p>TV Series</p>
              </div>
            )}
          </div>
        </div>
        <h1 className="text-xl font-bold">
          {trend.original_title ? trend.original_title : trend.original_name}
        </h1>
      </div>
    </div>
  );
};

export default Single;