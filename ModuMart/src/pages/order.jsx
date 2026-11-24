import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';
import { useStore } from '../providers/StoreContext';
import { ArrowLeft, ArrowRight, Check, Minus, Plus, ShoppingCart } from 'lucide-react';
import Swal from 'sweetalert2';

const Order = () => {
  const { cart, cartCount, cartTotal, updateQuantity, removeFromCart, clearCart } = useStore();
  const [step, setStep] = useState('cart');
  const [customer, setCustomer] = useState({ name: '', email: '', address: '' });
  const [paymentMethod, setPaymentMethod] = useState('delivery');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const delivery = cartTotal >= 100000 || cart.length === 0 ? 0 : 2500;
  const total = cartTotal + delivery;

  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    const result = await Swal.fire({
      title: 'Place this demo order?',
      text: 'This is a frontend preview. No payment will be taken.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Place demo order',
      cancelButtonText: 'Go back',
      confirmButtonColor: '#075bd8',
      cancelButtonColor: '#6f7b8f',
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    setOrderPlaced(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Demo order placed',
      showConfirmButton: false,
      timer: 2400,
      timerProgressBar: true,
    });
  };

  const handleRemoveItem = async (item) => {
    const result = await Swal.fire({
      title: 'Remove this item?',
      text: item.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Remove item',
      cancelButtonText: 'Keep item',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6f7b8f',
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    removeFromCart(item.id);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Item removed from cart',
      showConfirmButton: false,
      timer: 1800,
    });
  };

  if (orderPlaced) {
    return <main className="page-width checkout-page"><section className="order-success"><span className="success-mark"><Check size={25} strokeWidth={2.2} aria-hidden="true" /></span><p className="eyebrow">Thanks, {customer.name.split(' ')[0]}</p><h1>Your demo order is ready.</h1><p>This is a frontend preview. Your order and delivery details were not sent or saved, and no payment was taken.</p><Link className="button button-blue" to="/products">Continue shopping <ArrowRight className="button-icon" aria-hidden="true" /></Link></section></main>;
  }

  return (
    <main className="page-width checkout-page">
      <div className="checkout-heading"><p className="eyebrow">Your selection</p><h1>{step === 'cart' ? 'Your cart' : 'Checkout'} <span>({cartCount} items)</span></h1><Link className="text-link" to="/products"><ArrowLeft className="inline-icon" aria-hidden="true" /> Continue shopping</Link></div>
      {!cart.length ? <section className="empty-cart"><div className="empty-cart-icon"><ShoppingCart size={28} strokeWidth={1.8} aria-hidden="true" /></div><h2>Your cart is empty.</h2><p>Browse the store to find what you need for your setup.</p><Link className="button button-blue" to="/products">Browse products <ArrowRight className="button-icon" aria-hidden="true" /></Link></section> : (
        <>
          <div className="checkout-steps"><span className={step === 'cart' ? 'current' : 'complete'}>1 <b>Cart</b></span><i /><span className={step === 'checkout' ? 'current' : ''}>2 <b>Delivery & payment</b></span><i /><span>3 <b>Confirmation</b></span></div>
          {step === 'cart' ? (
            <div className="checkout-layout">
              <section className="cart-panel" aria-label="Cart items">
                {cart.map((item) => (
                  <article className="cart-row" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-info"><p className="product-category">{item.category}</p><h2>{item.name}</h2><button className="remove-item" type="button" onClick={() => handleRemoveItem(item)}>Remove</button></div>
                    <div className="quantity-control" aria-label={`Quantity for ${item.name}`}><button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} aria-hidden="true" /></button><span>{item.quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} aria-hidden="true" /></button></div>
                    <strong className="cart-row-price">{formatPrice(item.price * item.quantity)}</strong>
                  </article>
                ))}
              </section>
              <aside className="summary-panel"><OrderSummary cartCount={cartCount} cartTotal={cartTotal} delivery={delivery} total={total} /><p className="demo-note">Frontend demo only. No orders or payments are processed.</p><button className="button button-blue checkout-button" type="button" onClick={() => { setStep('checkout'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Continue to checkout <ArrowRight className="button-icon" aria-hidden="true" /></button></aside>
            </div>
          ) : (
            <div className="checkout-layout">
              <form className="delivery-panel" onSubmit={handlePlaceOrder}>
                <section className="checkout-form"><h2>Delivery details</h2><label>Full name<input required autoComplete="name" value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} placeholder="Your name" /></label><label>Email address<input required type="email" autoComplete="email" value={customer.email} onChange={(event) => setCustomer({ ...customer, email: event.target.value })} placeholder="you@example.com" /></label><label>Delivery address<textarea required autoComplete="street-address" rows="2" value={customer.address} onChange={(event) => setCustomer({ ...customer, address: event.target.value })} placeholder="Street, city, state" /></label></section>
                <section className="payment-options"><h2>Payment method</h2><label><input type="radio" name="payment" value="delivery" checked={paymentMethod === 'delivery'} onChange={(event) => setPaymentMethod(event.target.value)} /><span><strong>Pay on delivery</strong><small>Pay when your order arrives</small></span></label><label><input type="radio" name="payment" value="transfer" checked={paymentMethod === 'transfer'} onChange={(event) => setPaymentMethod(event.target.value)} /><span><strong>Bank transfer</strong><small>Shown as a demo option; no transfer details are collected</small></span></label><p className="demo-note">Checkout is a demonstration. Do not enter real payment information.</p><div className="checkout-actions"><button className="back-button" type="button" onClick={() => setStep('cart')}><ArrowLeft className="inline-icon" aria-hidden="true" /> Back to cart</button><button className="button button-blue" type="submit">Place demo order <ArrowRight className="button-icon" aria-hidden="true" /></button></div></section>
              </form>
              <aside className="summary-panel"><h2>Order summary</h2>{cart.map((item) => <div className="summary-product" key={item.id}><img src={item.image} alt="" /><span>{item.name}<small>Qty {item.quantity}</small></span><strong>{formatPrice(item.price * item.quantity)}</strong></div>)}<OrderSummary cartCount={cartCount} cartTotal={cartTotal} delivery={delivery} total={total} /></aside>
            </div>
          )}
        </>
      )}
    </main>
  );
};

const OrderSummary = ({ cartCount, cartTotal, delivery, total }) => (
  <>
    <h2>Order summary</h2>
    <div className="summary-line"><span>Subtotal · {cartCount} items</span><span>{formatPrice(cartTotal)}</span></div>
    <div className="summary-line"><span>Delivery</span><span>{delivery ? formatPrice(delivery) : 'Free'}</span></div>
    {cartTotal < 100000 && <p className="delivery-note">Add {formatPrice(100000 - cartTotal)} more to unlock free delivery.</p>}
    <div className="summary-total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
  </>
);

export default Order;
