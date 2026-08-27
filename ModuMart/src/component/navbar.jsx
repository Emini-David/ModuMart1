import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/ModuMart.png'
import { useAuth } from '../providers/AuthContext'


export default function Navbar(){

  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className='container'>

        <div className="logo"><img src={logo} alt=""/></div>

        <ul className="nav-links">

            <li><Link to="/"><span>Home</span></Link></li>

            <li><Link to="/products">Products</Link></li>
            {isAuthenticated && (
              <>
                <li><Link to="/order">Order</Link></li>
              </>
            )}
            <li><Link to="/about">About</Link></li>

        </ul>
        <ul className='nav-links logsign'>
            {!isAuthenticated && <li><Link to="/login">Sign Up</Link></li>}
            {!isAuthenticated && <li><Link to="/signin">Sign In</Link></li>}
            {isAuthenticated && <li><button type="button" className="nav-button" onClick={logout}>Sign Out</button></li>}
        </ul>

        

    </nav>



  )
}
