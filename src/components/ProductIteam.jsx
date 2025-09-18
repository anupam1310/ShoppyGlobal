import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartslice';
import React from 'react';

const ProductItemComponent = ({ product, setRoute }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => dispatch(addToCart(product));

    return (
        <div className="bg-secondary rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-accent">
            <a href={`#/product/${product.id}`} onClick={(e) => { e.preventDefault(); setRoute({ name: 'product', id: product.id }); }} className="block overflow-hidden">
                <img src={product.thumbnail} alt={product.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </a>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-text-primary truncate">{product.title}</h3>
                <p className="text-text-secondary mt-1">${product.price.toFixed(2)}</p>
                <button 
                    onClick={handleAddToCart} 
                    className="mt-4 w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductItemComponent;