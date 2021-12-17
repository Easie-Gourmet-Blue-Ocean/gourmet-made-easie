import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import UserContext from '../UserContext';


const NavbarLoggedIn = () => {

  const {user, setUser} = useContext(UserContext);

  let navigate = useNavigate();

  let onLogout = (e) => {
    axios.post('/auth/logout')
      .then(response => {
        setUser({});
        navigate('/');
      })
  }

  return (
    <div className="navbar">
      <div className="navlinks">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link
            to='/search'
            state={{searchTerm2: ''}}
            >
            <li>Search</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
        </ul>
      </div>
      <div className="logo">
        <Link to="/">
          <h1>Gourmet Made Easie</h1>
        </Link>
      </div>
      <div className="search">
          <li>Hello, {user.username}</li>
          <li><a onClick={onLogout}>Logout</a></li>
          <Link
          to="/search"
          state={{searchTerm2: ''}}
        >
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default NavbarLoggedIn;
