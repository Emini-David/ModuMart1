import React from 'react'
import { orders } from '../data/orders'

const order = () => {
  return (
    <section className='order'>
        <div className='abt-container'>
            <h1>Upgrade Your Gear Now</h1>
            <p>Browse our massive selection of the latest tech and have your essential accessories shipped fast.</p>
       </div>
    <div className='order-container'>
        <div className="all">
            <div className="buttons container" >
                <button className='btn'>All Items</button>
                <button className='btn1'>⌨️ Keyboards & Mice</button>
                <button className='btn1'>🎧 Headsets & Audio</button>
                <button className='btn1'>💾 Storage Devices</button>
                <button className='btn1'>🔋 Power & Chargers</button>
                <button className='btn1'>🎮 Gaming Accessories</button>
            </div>
            <div className="cards container">
                    <div className="card-flex">
                            {orders.map(o => {
                                return (
                                    <div key={o.id} className='card'>
                                        <img src={o.image} className='card-image' />
                                        <div className='order-text'>
                                            <h4 className='order-name'>{o.name}</h4>
                                            <p className='order-des'>{o.description}</p>
                                            <h5 className='order-price'>{o.price}</h5>
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
                    <p>0</p>
                </div>
        </div>
    </div>
                
</section>
    
  )
}

export default order
