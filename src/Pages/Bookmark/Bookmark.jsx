import React, { useContext } from "react";
import {
  MdBookmarkBorder,
  MdBookmark,
  MdLocalMovies,
  MdWeb,
} from "react-icons/md";
import { Link } from "react-router-dom";
import BookmarkContext from "../../Components/BookmarkContext/BookmarkContext";

const Bookmark = () => {
  const { movieArr } = useContext(BookmarkContext);
  return (
    <div className="grid grid-cols-2 gap-3 mt-2">
      {movieArr.map(({ info }) => {
        return (
          <div
            key={info.id}
            style={{
              height: "300px",
              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url(
            ${process.env.REACT_APP_IMAGE_BASE}${info.poster_path}
        )`,
            }}
            className="object-cover bg-center bg-cover rounded-xl my-2 relative"
          >
            <div>
              <MdBookmarkBorder className="text-white text-4xl rounded-full p-2 absolute top-2 right-2 cursor-pointer bg-gray-800 bg-opacity-80" />
            </div>
            <Link
              to={`/details/${info.id}`}
              className="absolute bottom-0 left-0 text-white mb-5 ml-5"
            >
              <div className="flex items-center">
                <p>
                  {info.release_date
                    ? info.release_date.slice(0, 4) + " - "
                    : " "}
                </p>

                <div>
                  {info.media_type === "movie" ? (
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

                <p> - Rating: {info.vote_average}</p>
              </div>
              <h1 className="text-xl font-bold">
                {info.original_title ? info.original_title : info.original_name}
              </h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Bookmark;
