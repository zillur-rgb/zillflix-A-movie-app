import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  // const [type, setType] = useState("Select");

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch("");
    navigate(`/searched/keyword=${search}`);
  };

  return (
    <div>
      <form
        className="flex items-center justify-center"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          value={search}
          placeholder="Search Here..."
          className="input text-lg bg-gray-800 mt-3 focus:bg-gray-700 text-gray-200 w-3/5"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
