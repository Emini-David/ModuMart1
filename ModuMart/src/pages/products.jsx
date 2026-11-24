import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { categories, products } from '../data/products';
import { Search } from 'lucide-react';

const Products = () => {
  const [searchParams] = useSearchParams();
  const requestedCategory = searchParams.get('category');
  const categoryFromLink = categories.includes(requestedCategory) ? requestedCategory : 'All products';
  const [category, setCategory] = useState(categoryFromLink);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');
  const brand = searchParams.get('brand');
  const dealsOnly = searchParams.get('deals') === '1';

  useEffect(() => {
    setCategory(categoryFromLink);
  }, [categoryFromLink]);

  const visibleProducts = useMemo(() => {
    const matchingProducts = products.filter((product) => {
      const matchesCategory = category === 'All products' || product.category === category;
      const searchText = `${product.name} ${product.category} ${product.description} ${product.brand}`.toLowerCase();
      return matchesCategory && searchText.includes(search.toLowerCase().trim()) && (!brand || product.brand === brand) && (!dealsOnly || product.wasPrice);
    });
    if (sort === 'price-low') return matchingProducts.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') return matchingProducts.sort((a, b) => b.price - a.price);
    return matchingProducts;
  }, [category, search, sort, brand, dealsOnly]);

  const heading = dealsOnly ? 'Deals on everyday gear.' : brand ? `${brand} products.` : 'Computers, parts & accessories.';

  return (
    <main className="page-width shop-page">
      <header className="shop-heading"><p className="eyebrow">The ModuMart collection</p><h1>{heading}</h1><p>Shop systems, components, and all the gear to connect, power, protect, and complete your setup.</p></header>
      <section className="shop-controls" aria-label="Product filters">
        <div className="category-list" role="group" aria-label="Filter by category">{categories.map((item) => <button key={item} className={`category-button${category === item ? ' active' : ''}`} type="button" onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="shop-tools">
          <label className="search-box"><span aria-hidden="true"><Search size={17} strokeWidth={1.8} /></span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" aria-label="Search products" /></label>
          <label className="sort-control"><span>Sort:</span><select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
        </div>
      </section>
      <div className="results-line"><span>{visibleProducts.length} products</span>{(search || brand || dealsOnly) && <span className="active-filter">{brand || (dealsOnly ? 'Deals' : '')}{search && ` · “${search}”`}</span>}</div>
      {visibleProducts.length ? <div className="product-grid shop-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><span aria-hidden="true"><Search size={35} strokeWidth={1.6} /></span><h2>No products found</h2><p>Try another search or choose a different category.</p><button className="button button-blue" type="button" onClick={() => { setSearch(''); setCategory('All products'); }}>See all products</button></div>}
    </main>
  );
};

export default Products;
