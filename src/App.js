import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./sharedComponents/Navbar.js";
import Search from "./pages/Search/index.js";
import Profile from "./pages/Profile/index.js";
import Home from "./pages/Home/index.js";
import Footer from "./sharedComponents/Footer.js";
import RecipePage from "./pages/Recipe/index.js";

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
            <Footer />
        </>
      </Router>
    </div>
  );
};

export default hot(App);
