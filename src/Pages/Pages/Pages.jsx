import React from "react";
import { Route, Routes } from "react-router-dom";
import Bookmark from "../Bookmark/Bookmark";
import Homepage from "../Homepage/Homepage";
import MoviesPage from "../MoviesPage/MoviesPage";
import TvSeries from "../TvSeries/TvSeries";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<TvSeries />} />
        <Route />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route />
      </Routes>
    </div>
  );
};

export default Pages;
