import React from 'react'
import './navbar.css'
import logo from '../../assets/ModuMart.png'

const navbar = () => {
  return (
    <nav>
        <div className="logo"><img src={logo} alt="" /></div>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    </nav>
  )
}

export default navbar
