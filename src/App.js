import React, { useEffect, useState, useMemo } from "react";
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
import UserContext from './UserContext';


const App = () => {
  const [username, setUsername] = useState(null); // user can be '', null or 'some name'
  const providerValue = useMemo(() => ({ username, setUsername}), [username, setUsername]);

  useEffect(() => {
    axios.get(`/user/session/${getSession()}`)
      .then(userResponse => {
        if (userResponse.data.username) {
          setUsername(userResponse.data.username);
        } else {
          throw err;
        }
      })
      .catch(err => { // catch when the session does not have an user
        setUsername('');
      })
  });

  return (username === null)?
    (<div></div>):
    (<div className="app">
      <Router>
        <UserContext.Provider value={providerValue}>
          {
            (username === '')? <Navbar/> : <NavbarLoggedIn/>
          }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/recipe' element={<RecipePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>

        </UserContext.Provider>
        <Footer />
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
