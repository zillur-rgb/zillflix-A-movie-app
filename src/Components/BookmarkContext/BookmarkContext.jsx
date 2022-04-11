import { createContext, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [movieArr, setMovieArr] = useState([]);

  const addToBookmark = (info) => {
    const existed = movieArr.find((movie) => movie.info.id === info.id);
    if (!existed) {
      setMovieArr([...movieArr, { info }]);
    }
    return;
  };

  const removeFromBookmark = (info) => {
    setMovieArr(
      movieArr.filter((movie) => {
        return movie.info.id !== info.id;
      })
    );
  };
  return (
    <BookmarkContext.Provider
      value={{ movieArr, addToBookmark, removeFromBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkContext;
