import React, { useState } from 'react'
import { orders } from '../data/orders'
import { useAuth } from '../providers/AuthContext'

const categories = ['All Items', 'Keyboards & Mice', 'Headsets & Audio', 'Storage Devices', 'Power & Chargers']

const Order = () => {
    const [category, setCategory] = useState('All Items');
    const { cart, addToCart, removeFromCart } = useAuth();
    const visibleOrders = orders.filter((item) => {
        if (category === 'All Items') return true;
        const name = item.name.toLowerCase();
        if (category === 'Keyboards & Mice') return name.includes('keyboard') || name.includes('mouse');
        if (category === 'Headsets & Audio') return name.includes('headset') || name.includes('speaker');
        if (category === 'Storage Devices') return name.includes('ssd') || name.includes('drive');
        return name.includes('charger') || name.includes('power') || name.includes('usb-c');
    });
    const cartTotal = cart.reduce((total, item) => total + Number.parseFloat(item.price.replace('$', '')) * item.quantity, 0);

  return (
    <section className='order'>
        <div className='abt-container'>
            <h1>Upgrade Your Gear Now</h1>
            <p>Browse our massive selection of the latest tech and have your essential accessories shipped fast.</p>
       </div>
    <div className='order-container'>
        <div className="all">
            <div className="buttons container" >
                {categories.map((itemCategory) => (
                    <button key={itemCategory} className={category === itemCategory ? 'btn' : 'btn1'} onClick={() => setCategory(itemCategory)}>{itemCategory}</button>
                ))}
            </div>
            <div className="cards container">
                    <div className="card-flex">
                            {visibleOrders.map(o => {
                                return (
                                    <div key={o.id} className='card'>
                                        <img src={o.image} className='card-image' alt={o.name} />
                                        <div className='order-text'>
                                            <h4 className='order-name'>{o.name}</h4>
                                            <p className='order-des'>{o.description}</p>
                                            <h5 className='order-price'>{o.price}</h5>
                                            <button className='btn' onClick={() => addToCart(o)}>Add to cart</button>
                                        </div>
                                    </div>
                                )
                            })}      
                    </div>
                </div>
            </div>
            <div className="cart">
                <div className="cart-text">
                    <h3>Your Order</h3>
                    <p>{cart.reduce((total, item) => total + item.quantity, 0)} item(s)</p>
                    {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <span>{item.name} x {item.quantity}</span>
                            <button className="btn1" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <strong>Total: ${cartTotal.toFixed(2)}</strong>
                </div>
        </div>
    </div>
                
</section>
    
  )
}

export default Order
