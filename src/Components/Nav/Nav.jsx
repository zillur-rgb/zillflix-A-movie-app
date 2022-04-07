import React from "react";
import "./Nav.css";
import { MdLocalMovies, MdMovie, MdWeb, MdBookmark } from "react-icons/md";
import { CgMenuBoxed } from "react-icons/cg";
import { Link } from "react-router-dom";

const Nav = () => {
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
              <CgMenuBoxed className="text-gray-700 text-3xl hover:text-gray-500" />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <MdLocalMovies className="text-gray-700 hover:text-gray-500 text-3xl" />
            </Link>
          </li>
          <li>
            <Link to="/series">
              <MdWeb className="text-gray-700 hover:text-gray-500 text-3xl" />
            </Link>
          </li>
          <li>
            <Link to="/bookmark">
              <MdBookmark className="text-gray-700 hover:text-gray-500 text-3xl " />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
