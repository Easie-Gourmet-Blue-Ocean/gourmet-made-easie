import React, { useState } from "react";
import img from "../../../assets/images/bg.jpeg";
import Searchbar from "../../../sharedComponents/Searchbar.js";
import {Link} from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="header-container">
      <div className="home-search-container">
        <div className="search-title">What do you want to eat?</div>
        <Searchbar />
        <div className="bottom-buttons">
          <div className="advanced-search-button">
          {/* <button>Advanced search</button> */}
          </div>
          <Link
            to='/recipe'
            state={{recipeId: 'random'}}
            >
            <div className="random-recipe-button">
              <button>Random recipe</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Header;
