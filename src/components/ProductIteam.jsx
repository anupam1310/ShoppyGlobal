
import { Provider, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartslice';
import React from 'react';


const ProductItemComponent = ({ product, setRoute }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => dispatch(addToCart(product));

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <a href={`#/product/${product.id}`} onClick={(e) => { e.preventDefault(); setRoute({ name: 'product', id: product.id }); }}>
                <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" loading="lazy" />
            </a>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 h-16">{product.title}</h3>
                <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                <button onClick={handleAddToCart} className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductItemComponent;