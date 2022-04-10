import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const signIn = (e) =>{
    e.preventDefault();

  }
  const register = (e) => {
    e.preventDefault();
  }
  return (
    <div className='login'>
      <Link to='/' >
          <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt='' />
        </Link>
        <div className='login__container'>
          <h1> Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit' onClick={signIn}  className='login__sinInButton'>Sign In</button>
          </form>
          <p>By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and Privacy Notice.</p>
          <button type='submit' onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
