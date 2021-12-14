import React from "react";
import img from "../../assets/images/bg.jpeg";
const Home = () => {
  return (
    <div className="home-container">
      <div className="image">
        <img src={img}></img>
        <div className="color-box"></div>
      </div>
    </div>
  );
};

export default Home;
