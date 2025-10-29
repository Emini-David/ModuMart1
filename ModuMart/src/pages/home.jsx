import React from 'react'
import lap from '../assets/Lap.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import keyboard from '../assets/keyboard.png'
import mouse from '../assets/mouse.png'
import headset from '../assets/headset.png'  


const home = () => {
  return (
<section className='home'> 
        <div className='hero container' >
            <div className="hero-text container">
                <h1>Welcome to ModuMart</h1>
                <p>Your one-stop store for quality computer accessories, electronics, and more. Delivered with convenience and trust.</p>
                <div className="order">
                    <button className='btn'>Browse Store</button>
                    <button className='btn1'>Order Now</button>
                </div>
            </div>
            <div className="hero-mage">
                <img src={lap} alt="" />
            </div>
        </div>
        
        {/* why */}
        <section className='why-section'>
            <div className='why'>
               <h3>Why choose ModuMart?</h3>
            </div>
        <div className="cards container">
            <div className="card">
                 <i className="fas fa-desktop fa-3x text-primary"></i>
                <h4>Wide Range of Accessories</h4>
                <p>Find everything you need in one place — from keyboards and mice to headsets, storage devices, and cables, all carefully selected for quality and durability.</p>
            </div>
            <div className="card">
                <i className="fas fa-tags fa-3x text-success"></i>
                <h4>Affordable & Reliable</h4>
                <p>Enjoy competitive prices without compromising on performance. Every accessory is tested for reliability to give you the best value for your money.</p>
            </div>
            <div className="card">
                <i className="fas fa-headset fa-3x text-info"></i>
                <h4>Trusted Service & Support</h4>          
                <p>Our dedicated team ensures fast delivery, easy returns, and customer support that helps you get the most out of your tech.</p>
            </div>
        </div>
        </section>
        

    <section className='popular-section'>
        <div className='popular'>
            <h3>Popular Products</h3>
        </div>
        <div className="cards container">
            <div className="card">
                <img src={keyboard} alt="" />  
                <h4>Mechanical Keyboard</h4>
                <p>A durable, backlit mechanical keyboard designed for speed and comfort. Perfect for gaming and professional typing.</p>
                <h5>$59.99</h5>
            </div>
            <div className="card">
                <img src={mouse} alt="" />
                <h4>Wireless Mouse</h4>
                <p>Ergonomic wireless mouse with adjustable DPI, long battery life, and smooth precision tracking.</p>
                <h5>$24.99</h5>
            </div>
            <div className="card">
            <img src={headset} alt="" />
                <h4>Noise-Cancelling Headset</h4>          
                <p>Crystal-clear audio with a noise-cancelling microphone, ideal for work, gaming, or online meetings.</p>
                <h5>$89.99</h5>
            </div>
        </div>
        <div className="ready container">
            <div className="ready-text">
                <h2>Ready to Upgrade Your Setup?</h2>
                <p>Join thousands of satisfied customers who have made ModuMart their favorite destination for high-quality computer accessories and expert advice.</p>
                <button className='btn'>Shop Our Catalog</button>
            </div>
        </div>
    </section>

</section> 
  )
}

export default home
