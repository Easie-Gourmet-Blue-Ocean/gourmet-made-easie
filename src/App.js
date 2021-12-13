import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./sharedComponents/Navbar.js";
import Search from "./pages/Search/index.js";
import Profile from "./pages/Profile/index.js";
import Home from "./pages/Home/index.js";
import Footer from "./sharedComponents/Footer.js";

const App = () => {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
            <Navbar />
            <Footer />
      </Router>
    </div>
  );
};

export default hot(App);
