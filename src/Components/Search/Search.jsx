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
          placeholder="Search Movie Here"
          className="input bg-gray-800 mt-3 focus:bg-gray-700 text-white w-3/5"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {/* <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="py-3 px-3 rounded-md bg-gray-800 text-white mt-3 ml-3 flex items-center justify-center"
        >
          <option name="select">Select</option>
          <option name="male">movie</option>
          <option name="female">tv</option>
        </select> */}
      </form>
    </div>
  );
};

export default Search;
