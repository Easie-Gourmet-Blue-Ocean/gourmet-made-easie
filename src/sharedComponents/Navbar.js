import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlinks">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/search">
            <li>Search</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
      </div>
      <div className="logo">
        <Link to="/">
          <h1>Gourmet Made Easy</h1>
        </Link>
      </div>
      <div className="search">
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/search">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
