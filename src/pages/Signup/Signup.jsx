import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext from '../../UserContext';


const Signup = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {username, setUsername} = useContext(UserContext);


  let onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  let onNameChange = (e) => {
    setName(e.target.value);
  }

  let onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  let onSubmit = (e) => {
    e.preventDefault();
    axios.post('auth/signup', {username: name, email, password})
      .then(response => {
        if (response.status === 200) {
          setUsername(null);
          navigate('/');
        }
      })
      .catch(err => {
        document.getElementById('crediential-err-signup').innerHTML = 'Email already exist';
      })
  }

  return (
    <>
      <h1>Signup</h1>
      <div id='crediential-err-signup'></div>
      <div style={{height: "500px"}}>

        <form onSubmit={onSubmit}>
          <input onChange={onNameChange} type="text" placeholder="Name" autoComplete='name'/>
          <input onChange={onEmailChange} type="email" placeholder="email" autoComplete='username'/>
          <input
            onChange={onPasswordChange} 
            type="password"
            placeholder="password"
            autoComplete="password"
          />
          <button>Sign Up</button>

          <Link to='/login'>Have an account? Log in</Link>
        </form>
      </div>
    </>
  )
}

export default Signup;