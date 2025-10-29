import React from 'react'
import Login from '../assets/signUp_image.jpg'
import google from '../assets/google-logo.png'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <section className='login container'>
        <div className="login-flex">
          <div className="login-image">
            <img src={Login} />
          </div>
          <div className="login-text">
            <h2>Create an account with ModuMart</h2>
            <p>Start your journey for free quality trail!</p>

            <form action="" method="post">
              <button className="button-mage"><img src={google} /><p>Login with google</p></button>
              {/* <p style={}>Or</p> */}
              <p className='tag'>Or</p>
              <input type="text" placeholder='Full Name' required />
              <input type="email" placeholder='Email Address' required />
              <input type="password" placeholder='Password' required />
              <button type='submit' className='btn-login'>Create Account</button>
              <p className='tags'>Already have an account? <Link><span> Login here</span></Link></p>
            </form>
          </div>
        </div>
    </section>
  )
}

export default login
