import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex-1 w-9/12 mx-auto">
      <input
        type="text"
        placeholder="Type here"
        className="input bg-gray-800 mt-3 focus:bg-gray-700 text-white"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
