import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (

    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/search'>
          <li>Search</li>
        </Link>
        <Link to='/profile'>
          <li>Profile</li>
        </Link>
      </ul>
    </nav>

  )

}

export default Navbar;

