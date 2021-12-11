import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
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
      </nav>
    </div>
  );
};

export default Navbar;

