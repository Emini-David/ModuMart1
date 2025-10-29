import React from 'react'

const products = () => {
  return (
    <section className='products'>
      <div className='products-container'>
        <h1>Our Products</h1>
        <p>Discover our wide range of high-quality computer accessories designed to boost performance, enhance productivity, and keep you connected with style.</p>
      </div>
      <div className="buttons container">
        <button className='btn'>All Items</button>
        <button className='btn1'>⌨️ Keyboards & Mice</button>
        <button className='btn1'>🎧 Headsets & Audio</button>
        <button className='btn1'>💾 Storage Devices</button>
        <button className='btn1'>🔋 Power & Chargers</button>
        <button className='btn1'>🎮 Gaming Accessories</button>
      </div>
      <div className="cards container">
        <div className="card-flex">
              <div className="card">
                <h4>Mechanical Keyboard</h4>
                <p>A durable, backlit mechanical keyboard designed for speed and comfort. Perfect for gaming and professional typing.</p>
                <h5>$59.99</h5>
            </div>
            <div className="card">
                <h4>Wireless Mouse</h4>
                <p>Ergonomic wireless mouse with adjustable DPI settings and long battery life. Ideal for both work and play.</p>
                <h5>$24.99</h5>
            </div>
        </div>
        <div className="card-flex">
          <div className="card">
            <h4>Noise-Cancelling Headset</h4>
            <p>Experience immersive sound with this comfortable, noise-cancelling headset, perfect for gaming and virtual meetings.</p>
            <h5>$89.99</h5>
        </div>
        <div className="card">
            <h4>External SSD</h4>
            <p>Fast and portable external SSD with 1TB capacity, ideal for quick file transfers and secure data storage.</p>
            <h5>$129.99</h5>
        </div>
        </div>
        <div className="card-flex">
            <div className="card">
                <h4>USB-C Hub</h4>
                <p>Expand your connectivity with this multi-port USB-C hub, featuring HDMI, USB 3.0, and SD card slots.</p>
                <h5>$49.99</h5>
            </div>
            <div className="card">
                <h4>Gaming Mouse Pad</h4>
                <p>Large, smooth gaming mouse pad with non-slip base, providing precision and comfort during extended gaming sessions.</p>
                <h5>$19.99</h5>
            </div>
        </div>
        <div className="card-flex">
            <div className="card">
                <h4>Ergonomic Laptop Stand</h4>
                <p>Adjustable height for comfort and improved airflow.</p>
                <h5>$40.00</h5>
            </div>
            <div className="card">
                <h4>Wireless Presenter Remote</h4>
                <p>Seamless presentations with precision control and built-in laser pointer.</p>
                <h5>$25.00</h5>
            </div>
        </div>
         <div className="card-flex">
            <div className="card">
                <h4>65W Fast Laptop Charger</h4>
                <p>Universal compatibility, smart voltage control, and built-in surge protection.</p>
                <h5>$35.00</h5>
            </div>
            <div className="card">
                <h4>Multi-Port USB Charging Hub</h4>
                <p>Charge up to 5 devices at once with smart power distribution.</p>
                <h5>$28.00</h5>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default products
