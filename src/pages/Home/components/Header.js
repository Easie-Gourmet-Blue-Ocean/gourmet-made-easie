import React, { useState } from "react";
import img from "../../../assets/images/bg.jpeg";
import Searchbar from "../../../sharedComponents/Searchbar.js";

const Header = () => {

  return (
    <div className="header-container">
      <div className="home-search-container">
        <div className="search-title">What do you want to eat?</div>
        <Searchbar />
        <div className="bottom-buttons">
          <div className="advanced-search-button">
          <button>Advanced search</button>
          </div>
          <div className="random-recipe-button">
            <button>Random recipe</button>
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
