import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='signup'>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='Your Name' /><br />
          <input type="email" placeholder='Email Address' /><br />
          <input type="password" placeholder='Password' /><br />
        </div>
        <button>Continue</button>
        <p className="login">Already have an account? <Link to='/login' style={{textDecoration:"none"}}><span>Login Here</span></Link></p>
        <div className="agree">
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check"> By continuing, i agree to the terms of use & privacy policy.
        </label></div>
      </div>
      
    </div>
  )
}

export default Signup
