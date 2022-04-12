import React, { useContext } from "react";
import { MdLocalMovies, MdWeb, MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import BookmarkContext from "../BookmarkContext/BookmarkContext";

const Single = ({ trend, type }) => {
  const { addToBookmark } = useContext(BookmarkContext);
  return (
    <div
      style={{
        height: "300px",
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url(
            ${process.env.REACT_APP_IMAGE_BASE}${trend.poster_path}
        )`,
      }}
      className="object-cover bg-center bg-cover rounded-xl my-2 relative"
    >
      <div>
        <MdBookmarkBorder
          onClick={() => {
            addToBookmark(trend);
          }}
          className="text-white text-4xl rounded-full p-2 absolute top-2 right-2 cursor-pointer bg-gray-800 bg-opacity-80"
        />
      </div>
      <Link
        to={`/details/${type}/${trend.id}`}
        className="absolute bottom-0 left-0 text-white mb-5 ml-5"
      >
        <div className="flex items-center">
          <p>
            {trend.release_date ? trend.release_date.slice(0, 4) + " - " : " "}
          </p>

          <div>
            {type === "movie" ? (
              <div className="flex items-center">
                <MdLocalMovies className="text-2xl mr-1 pt-1" /> Movie
              </div>
            ) : (
              <div className="flex items-center">
                <MdWeb className="mr-1 text-2xl pt-1" />
                <p>TV Series </p>
              </div>
            )}
          </div>

          <p> - Rating: {trend.vote_average}</p>
        </div>
        <h1 className="text-xl font-bold">
          {trend.original_title ? trend.original_title : trend.original_name}
        </h1>
      </Link>
    </div>
  );
};

export default Single;
