import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext from '../../UserContext';


const Signup = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useContext(UserContext);


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
          setUser({email: ''})
          navigate('/');
        }
      })
      .catch(err => {
        document.getElementById('crediential-err-signup').innerHTML = 'Email already exist';
      })
  }

  return (
    <div className="form-container">
      <div className='form-prompt'>Create your account</div>
      <div id='crediential-err-signup'></div>
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <input 
            className="form-input-text"
            onChange={onNameChange} 
            type="text" 
            placeholder="Name" 
            autoComplete="off" 
          />
          <input 
            className="form-input-text"
            onChange={onEmailChange} 
            type="email" 
            placeholder="email" 
            autoComplete='username'/>
          <input
            className="form-input-text"
            onChange={onPasswordChange} 
            type="password"
            placeholder="password"
            autoComplete="new-password"
          />
          <button className='form-btn'>Sign Up</button>

          <Link to='/login' className='form-redirect-link'>Have an account? Log in</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;