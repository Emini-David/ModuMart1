import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('modumart-user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const [loading] = useState(false);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('modumart-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const isAuthenticated = Boolean(user);

    useEffect(() => {
        if (user) {
            localStorage.setItem('modumart-user', JSON.stringify(user));
        } else {
            localStorage.removeItem('modumart-user');
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem('modumart-cart', JSON.stringify(cart));
    }, [cart]);

    const login = ({ email, password }) => {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        setUser({ email });
    };

    const register = ({ fullname, email, password }) => {
        if (password.length < 6) {
            throw new Error('Password must contain at least 6 characters');
        }
        setUser({ fullname, email });
    };

    const logout = () => setUser(null);

    const addToCart = (product) => {
        setCart((currentCart) => {
            const existingItem = currentCart.find((item) => item.id === product.id);
            if (existingItem) {
                return currentCart.map((item) => item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item);
            }
            return [...currentCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((currentCart) => currentCart
            .map((item) => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
            .filter((item) => item.quantity > 0));
    };

    const value = {
        user, 
        setUser,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
        cart,
        addToCart,
        removeFromCart,
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};