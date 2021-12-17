import React, { useState, useContext} from 'react';
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import UserContext from '../../UserContext';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useContext(UserContext);

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
          setUser({email: ''})
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
    <div className="form-container">
      <div className='form-prompt'>Log in to your account</div>
      <div id='crediential-err-login'></div>
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <input 
            className="form-input-text"
            onChange={onEmailInputChange}
            required 
            type="email" 
            placeholder="Email" 
            autoComplete="off" 
          />
          <input
            className="form-input-text"
            onChange={onPasswordInputChange}
            required
            type="password"
            placeholder="password"
            autoComplete="new-password"
          />
          <button className='form-btn' >Log In</button>

          <Link to='/signup' className='form-redirect-link'>Don't have an account? Sign Up</Link>
        </form>
      </div>
    </div>
  )
}

export default Login;