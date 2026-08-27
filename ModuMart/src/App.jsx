import React from 'react'
import Navbar from './component/navbar'
import Footer from './component/footer'
import Home from './pages/home.jsx'
import Products from './pages/products.jsx'
import Order from './pages/order.jsx'
import About from './pages/about.jsx'
import Login from './pages/SignUp.jsx'
import SignIn from './pages/signin.jsx'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './providers/AuthProvider.jsx'
import { LoggedInRoute, PrivateRoute } from './routes/AuthRoutes.jsx'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
            <Navbar />
            <Routes>
              <Route element={ <PrivateRoute /> }>
                <Route path='/order' element={<Order />} />
              </Route>


                <Route element={ <LoggedInRoute /> }>
                  <Route path='/login' element={<Login />} />
                  <Route path='/signin' element={<SignIn />} />
                </Route>

                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </div>
      </Router>
    </AuthProvider>
   
  )
}

export default App
