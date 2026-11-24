import { useEffect, useState } from 'react';
import { products } from '../data/products';
import { StoreContext } from './StoreContext';

const getSavedCart = () => {
  try {
    const savedCart = localStorage.getItem('modumart-cart-v2');
    if (!savedCart) return [];
    const cartItems = JSON.parse(savedCart);
    if (!Array.isArray(cartItems)) return [];

    return cartItems.map((item) => {
      const product = products.find((savedProduct) => savedProduct.id === item.id);
      return product ? { ...product, quantity: Math.max(1, Number(item.quantity) || 1) } : null;
    }).filter(Boolean);
  } catch {
    return [];
  }
};

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(getSavedCart);

  useEffect(() => {
    localStorage.setItem('modumart-cart-v2', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) => item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item);
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      setCart((items) => items.filter((item) => item.id !== productId));
      return;
    }
    setCart((items) => items.map((item) => item.id === productId
      ? { ...item, quantity }
      : item));
  };

  const removeFromCart = (productId) => {
    setCart((items) => items.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <StoreContext.Provider value={{ cart, cartCount, cartTotal, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </StoreContext.Provider>
  );
};
