import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
  const [mail,setMail]=useState('')
  const [pass,setPass]=useState('')

  const sumbit=()=>{
    if(mail<8){
      console.log('mail is not valid')
    }
    else{
      console.log(mail)
      console.log(pass)
    }
    
  }
  return (
    <div className='signup'>
      <div className="container">
        <h1>Login</h1>
        <div className="fields">
          <input type="email" placeholder='Email Address' value={mail} onChange={(e)=>setMail(e.target.value)} /><br />
          <input type="password" placeholder='Password' value={pass} onChange={(e)=>setPass(e.target.value)} /><br />
        </div>
        <button onClick={sumbit}>Continue</button>
        <p className="login">Already have an account? <Link to='/signup' style={{textDecoration:"none"}}><span>Create Account</span></Link></p>
        <div className="agree">
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check"> By continuing, i agree to the terms of use & privacy policy.
        </label></div>
      </div>
      
    </div>
  )
}

export default Loginpage
