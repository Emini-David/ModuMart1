import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './pages/home';
import Products from './pages/products';
import Order from './pages/order';
import About from './pages/about';
import { StoreProvider } from './providers/StoreProvider';
import './App.css';

const App = () => (
  <StoreProvider>
    <Router>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </StoreProvider>
);

export default App;
