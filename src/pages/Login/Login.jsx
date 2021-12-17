import React, { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let onEmailInputChange = (e) => {
    setEmail(e.target.value);
  }

  let onPasswordInputChange = (e) => {
    setPassword(e.target.value);
  }

  let onSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/login', {email, password})
      .then(response => {
        if (response.status === 200) {
          navigate('/');
        }
      })
      .catch(err => {
        if (err.message === 'Request failed with status code 401') {
          document.getElementById('crediential-err-login').innerHTML = 'Invalid Credential';
          navigate('/login');
        }
      });
  }

  return (
    <>
      <h1>Login</h1>
      <div id='crediential-err-login'></div>
      <div style={{height: "500px"}}>
        <form onSubmit={onSubmit}>
          <input 
            onChange={onEmailInputChange}
            required 
            type="email" 
            placeholder="Email" 
            autoComplete='username'
          />
          <input
            onChange={onPasswordInputChange}
            required
            type="password"
            placeholder="password"
            autoComplete="password"
          />
          <button >Log In</button>

          <Link to='/signup'>Don't have an account? Sign Up</Link>
        </form>
      </div>
    </>
  )
}

export default Login;