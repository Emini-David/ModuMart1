import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/ModuMart.png';
import { Search, ShoppingCart } from 'lucide-react';
import { useStore } from '../providers/StoreContext';

const Navbar = () => {
  const { cartCount } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="announcement"><div className="page-width">Computers, components, and accessories for every setup <span>·</span> Shop ModuMart</div></div>
      <nav className="nav-wrap page-width" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="ModuMart home" onClick={closeMenu}><img src={logo} alt="ModuMart" /></Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <div className={`nav-content${menuOpen ? ' open' : ''}`}>
          <div className="nav-links"><NavLink to="/" onClick={closeMenu}>Home</NavLink><NavLink to="/products" onClick={closeMenu}>Shop</NavLink><Link to="/products" onClick={closeMenu}>Categories</Link><Link to="/products?deals=1" onClick={closeMenu}>Deals</Link><NavLink to="/about" onClick={closeMenu}>About</NavLink></div>
          <div className="nav-actions">
            <Link className="search-link" to="/products" aria-label="Search products" onClick={closeMenu}>
              <Search size={21} strokeWidth={1.8} aria-hidden="true" />
            </Link>
            <Link className="cart-link" to="/cart" onClick={closeMenu}>
              <span className="cart-symbol" aria-hidden="true"><ShoppingCart size={21} strokeWidth={1.8} /></span>
              <span>Cart</span><span className="cart-count">{cartCount}</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
