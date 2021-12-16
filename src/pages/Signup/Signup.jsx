import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h1>Signup</h1>
      <div style={{height: "500px"}}>
        <form>
          <input type="text" placeholder="Name" autoComplete='name'/>
          <input type="email" placeholder="email" autoComplete='username'/>
          <input
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