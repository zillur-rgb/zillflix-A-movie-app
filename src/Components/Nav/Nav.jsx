import React from "react";
import "./Nav.css";
import { MdLocalMovies, MdMovie, MdWeb, MdBookmark } from "react-icons/md";
import { CgMenuBoxed } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const matchPathRoute = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };

  return (
    <div className="navbar menu-vertical bg-gray-800 rounded-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case">
          <MdMovie className="text-red-500 text-4xl" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">
              <CgMenuBoxed
                className={
                  matchPathRoute("/")
                    ? "text-gray-300 hover:text-gray-300 text-3xl"
                    : "text-gray-700 hover:text-gray-300 text-3xl"
                }
              />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <MdLocalMovies
                className={
                  matchPathRoute("/movies")
                    ? "text-gray-300 hover:text-gray-300 text-3xl"
                    : "text-gray-700 hover:text-gray-300 text-3xl"
                }
              />
            </Link>
          </li>
          <li>
            <Link to="/series">
              <MdWeb
                className={
                  matchPathRoute("/series")
                    ? "text-gray-300 hover:text-gray-300 text-3xl"
                    : "text-gray-700 hover:text-gray-300 text-3xl"
                }
              />
            </Link>
          </li>
          <li>
            <Link to="/bookmark">
              <MdBookmark
                className={
                  matchPathRoute("/bookmark")
                    ? "text-gray-300 hover:text-gray-300 text-3xl"
                    : "text-gray-700 hover:text-gray-300 text-3xl"
                }
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
