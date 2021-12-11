import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Search from "./components/pages/Search.js";
import Profile from "./components/pages/Profile.js";
import Home from "./components/pages/Home.js";

const App = () => {
  return (
    <div className="app">
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      </Router>
    </div>
  );
};

export default hot(App);
