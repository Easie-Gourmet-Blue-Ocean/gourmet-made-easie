import React, { useState } from "react";
import img from "../../assets/images/bg.jpeg";
import Searchbar from "../../sharedComponents/Searchbar.js";
const Home = () => {
  const [searchInput, setSearchInput] = "";
  console.log(setSearchInput);
  var onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="header-container">
        <div className="home-search-container">
          <div className="search-title">What do you want to eat?</div>
          <Searchbar />
          <div className="random-recipe-button">
            <button>Random recipe</button>
          </div>
        </div>
      <div className="image">
        <img src={img}></img>
      </div>
    </div>
  );
};

export default Home;
