import React, { useState } from 'react'
import Login from '../assets/signUp_image.jpg'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthContext.js'

const SignUpPage = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ fullname, email, password });
      alert('✅ Account Successfully Created');
    } catch {
      alert('❌ Failed to create account');
    }
  }
  
  return (
    <section className='login container'>
        <div className="login-flex">
          <div className="login-image">
            <img src={Login} />
          </div>
          <div className="login-text">
            <h2>Create an account with ModuMart</h2>
            <p>Start your journey for free quality trail!</p>

            <form action="" method="post" onSubmit={handleSubmit}>
              <input type="text" placeholder='Full Name' value={fullname} onChange={(e) => setFullname(e.target.value)} required />
              <input type="email" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type='submit' className='btn-login'>Create Account</button>
              <p className='tags'>Already have an account? <Link to="/signin"><span> Sign In here</span></Link></p>
            </form>
          </div>
        </div>
    </section>
  )
}

export default SignUpPage;
