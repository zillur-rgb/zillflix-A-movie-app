import { createContext, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [movieArr, setMovieArr] = useState([]);
  console.log(movieArr);

  const addToBookmark = (info) => {
    setMovieArr((prevState) => [...prevState, { info }]);
  };
  return (
    <BookmarkContext.Provider value={{ movieArr, addToBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkContext;
