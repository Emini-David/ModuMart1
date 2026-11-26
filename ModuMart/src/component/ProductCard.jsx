import { useEffect, useRef, useState } from 'react';
import { useStore } from '../providers/StoreContext';
import { formatPrice } from '../data/products';
import { Check, Plus } from 'lucide-react';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
  const { addToCart } = useStore();
  const [added, setAdded] = useState(false);
  const feedbackTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(feedbackTimer.current), []);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    window.clearTimeout(feedbackTimer.current);
    feedbackTimer.current = window.setTimeout(() => setAdded(false), 1400);
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
    });
  };

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} className="product-image" />
        {product.wasPrice && <span className="sale-badge">Sale</span>}
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <div className="product-heading">
          <h3>{product.name}</h3>
          <span className="product-price">{formatPrice(product.price)}</span>
        </div>
        {product.wasPrice && <p className="old-price">{formatPrice(product.wasPrice)}</p>}
        <p className="product-description">{product.description}</p>
        <button className={`button button-dark button-add${added ? ' is-added' : ''}`} type="button" onClick={handleAddToCart}>
          {added ? <Check className="button-icon" aria-hidden="true" /> : <Plus className="button-icon" aria-hidden="true" />}
          {added ? 'Added' : 'Add to cart'}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
