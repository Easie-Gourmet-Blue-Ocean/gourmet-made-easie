import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  

  return (
    <>
      <h1>Login</h1>
      <div style={{height: "500px"}}>
        <form>
          <input required type="email" placeholder="Email" autoComplete='username'/>
          <input
            required
            type="password"
            placeholder="password"
            autoComplete="password"
          />
          <button>Log In</button>

          <Link to='/signup'>Don't have an account? Sign Up</Link>
        </form>
      </div>
    </>
  )
}

export default Login;