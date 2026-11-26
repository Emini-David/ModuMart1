import { Link } from 'react-router-dom';
import macbookStack from '../assets/MacBook-stack.png';
import heroWoman from '../assets/hero-woman.jpg';
import { categories, products } from '../data/products';
import ProductCard from '../component/ProductCard';
import { ArrowRight, BriefcaseBusiness, Cable, Check, Cpu, HardDrive, Headphones, Keyboard, Laptop, Monitor, Network, Power, Printer, ShoppingCart, Tag, Boxes } from 'lucide-react';

const categoryIcons = {
  Systems: Laptop,
  'Monitors & Display': Monitor,
  Components: Cpu,
  'Keyboards & Mice': Keyboard,
  'Audio & Video': Headphones,
  Storage: HardDrive,
  'Power Protection': Power,
  Networking: Network,
  'Cables & Adapters': Cable,
  'Desk Setup': BriefcaseBusiness,
  Printing: Printer,
};

const Home = () => {
  const popularProducts = products.filter((product) => [10, 11, 14, 18].includes(product.id));
  const dealProducts = products.filter((product) => product.wasPrice).slice(0, 4);
  const shopCategories = categories.filter((category) => category !== 'All products');
  const brands = ['HP', 'Dell', 'MacBook', 'Lenovo', 'Intel', 'UGREEN'];

  return (
    <main>
      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow">Your setup, sorted</p>
          <h1>Everything your system needs.</h1>
          <p className="hero-description">Shop computers, components, and the accessories that bring your workspace together. Find the right gear for work, study, and play.</p>
          <div className="hero-actions"><Link className="button button-blue" to="/products">Shop all products <ArrowRight className="button-icon" aria-hidden="true" /></Link>
          <Link className="hero-secondary" to="/products?category=Systems">Explore computer systems</Link></div>
          <div className="hero-proof"><span className="proof-dot" /> New gear for every setup</div>
        </div>
        <div className="hero-art"><img src={heroWoman} alt="Professional woman working at her laptop in a bright office" /></div>
      </section>

      <section className="benefits page-width" aria-label="Store benefits">
        <div><span className="benefit-icon"><Boxes size={19} aria-hidden="true" /></span><div><h2>Wide product range</h2><p>Systems, parts, and accessories</p></div></div>
        <div><span className="benefit-icon"><Tag size={19} aria-hidden="true" /></span><div><h2>Clear pricing</h2><p>Know your total before checkout</p></div></div>
        <div><span className="benefit-icon"><ShoppingCart size={19} aria-hidden="true" /></span><div><h2>Local cart</h2><p>Your basket stays on this device</p></div></div>
        <div><span className="benefit-icon"><Check size={19} aria-hidden="true" /></span><div><h2>Easy to browse</h2><p>Search, sort, and shop by category</p></div></div>
      </section>

      <section className="category-section page-width">
        <div className="section-heading"><div><p className="eyebrow">Find what you need</p><h2>Shop by category</h2></div><Link className="text-link" to="/products">All categories <ArrowRight className="inline-icon" aria-hidden="true" /></Link></div>
        <div className="category-grid">{shopCategories.map((category) => { const CategoryIcon = categoryIcons[category]; return <Link className="category-card" key={category} to={`/products?category=${encodeURIComponent(category)}`}><span><CategoryIcon size={20} aria-hidden="true" /></span><strong>{category}</strong><small>Browse selection <ArrowRight className="inline-icon" aria-hidden="true" /></small></Link>; })}</div>
      </section>

      <section className="featured-section"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">Customer favourites</p><h2>Popular accessories</h2></div><Link className="text-link" to="/products">View all products <ArrowRight className="inline-icon" aria-hidden="true" /></Link></div>
        <div className="product-grid">{popularProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </div></section>

      <section className="promo-banner page-width"><div><p className="eyebrow">Build a better desk</p><h2>The right accessories make all the difference.</h2><p>Start with the essentials and make your setup your own.</p><Link className="button button-white" to="/products?category=Desk%20Setup">Shop desk accessories <ArrowRight className="button-icon" aria-hidden="true" /></Link></div><img src={macbookStack} alt="An open MacBook Pro positioned above two stacked MacBook systems" /></section>

      <section className="brand-section page-width"><div className="section-heading"><div><p className="eyebrow">Trusted names</p><h2>Shop by brand</h2></div></div><div className="brand-list">{brands.map((brand) => <Link key={brand} to={`/products?brand=${encodeURIComponent(brand)}`}>{brand}</Link>)}</div></section>

      <section className="deal-section"><div className="page-width"><div className="section-heading"><div><p className="eyebrow">Good finds, good prices</p><h2>Current deals</h2></div><Link className="text-link" to="/products?deals=1">View all deals <ArrowRight className="inline-icon" aria-hidden="true" /></Link></div><div className="product-grid">{dealProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></div></section>

      <section className="newsletter page-width"><div><p className="eyebrow">Plan your next upgrade</p><h2>Find the right parts for your setup.</h2></div><Link className="button button-white" to="/products">Explore the full store <ArrowRight className="button-icon" aria-hidden="true" /></Link></section>
    </main>
  );
};

export default Home;
