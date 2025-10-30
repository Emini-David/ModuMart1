import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/ModuMart.png'


export default function navbar(){

  
  return (
    <nav className='container'>

        <div className="logo"><img src={logo} alt=""/></div>

        <ul className="nav-links">

            <li><Link to="/"><span>Home</span></Link></li>

            <li><Link to="/products">Products</Link></li>

            <li><Link to="/order">Order</Link></li>

            <li><Link to="/contact">Contact</Link></li>

        </ul>
        <ul className='nav-links logsign'>
            <li><Link to="/login">Sign Up</Link></li>

            <li><Link to="/signin">Sign In</Link></li>
        </ul>

        

    </nav>



  )
}
