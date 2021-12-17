import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./sharedComponents/Navbar.js";
import Search from "./pages/Search/index.js";
import Profile from "./pages/Profile/index.js";
import Home from "./pages/Home/index.js";
import Footer from "./sharedComponents/Footer.js";
import RecipePage from './pages/Recipe'
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx"
import axios from 'axios';
import NavbarLoggedIn from "./sharedComponents/NavBarLoggedIn.jsx";
import AddRecipe from './pages/AddRecipe'


const App = () => {
  const [username, setUsername] = useState(undefined);

  useEffect(() => {
    axios.get(`/user/session/${getSession()}`)
      .then(user => {
        if (!user.data.username) {
          setUsername('');
        } else {
          setUsername(user.data.username);
        }
      })
      .catch(err => {
        setUsername('');
      })
  }, [username]);

  return (username === undefined)?
    (<div></div>):
    (<div className="app">
      <Router>
        <>
          {
            (username === '')? <Navbar/> : <NavbarLoggedIn name={username}/>
          }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/recipe' element={<RecipePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addRecipe" element={<AddRecipe/>}/>
          </Routes>

          <Footer />
        </>
      </Router>
    </div>
  );
};

function getSession() {
  var session = document.cookie.split(';').filter(item => {
    return item.includes('boid');
  })[0];

  if (session === undefined) return '';
  return session.split('=')[1];
}
export default hot(App);
