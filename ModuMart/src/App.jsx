import React from 'react'
import Navbar from './component/navbar'
import Footer from './component/footer'
import Home from './pages/home.jsx'
import Products from './pages/products.jsx'
import Order from './pages/order.jsx'
import Contact from './pages/contact.jsx'
import Login from './pages/SignUp.jsx'
import SignIn from './pages/signin.jsx'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/order' element={<Order />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
          <Footer />
       </div>
    </Router>
   
  )
}

export default App
