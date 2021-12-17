import React, { useState } from "react";
import img from "../../../assets/images/bg.jpeg";
import Searchbar from "../../../sharedComponents/Searchbar.js";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="header-container">
      <div className="home-search-container">
        <div className="search-title">What do you want to eat?</div>
        <Searchbar />
        <div className="bottom-buttons">
          <div className="advanced-search-button">
          <button className="button-class">Advanced search</button>
          </div>
          <div className="random-recipe-button">
            <button className="button-class">Random recipe</button>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Header;
