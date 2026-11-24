import { Link } from 'react-router-dom';
import { Headset, Mail, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="site-footer">
    <div className="page-width footer-main">
      <div className="footer-brand">
        <Link to="/">ModuMart<span>.</span></Link>
        <p>Good gear for the way you work, play, and live.</p>
      </div>
      <nav className="footer-column" aria-label="Footer navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="footer-socials" aria-label="Contact ModuMart">
        <a href="mailto:support@modumart.com" aria-label="Email ModuMart">
          <Mail size={21} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <a href="tel:+2348153709083" aria-label="Call ModuMart">
          <Phone size={21} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <a href="mailto:support@modumart.com?subject=ModuMart%20support" aria-label="Contact customer support">
          <Headset size={21} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>
    </div>
    <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} ModuMart. All rights reserved.</span></div>
  </footer>
);

export default Footer;
