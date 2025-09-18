import NotFoundComponent from "./NotFound";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartslice';
import React from 'react';

const ProductDetailComponent = ({ productId, setRoute }) => {
    const product = useSelector(state => state.products.items.find(p => p.id === productId));
    const dispatch = useDispatch();

    if (!product) { 
        return <NotFoundComponent setRoute={setRoute} message="Product not found or still loading." />;
    }
    
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="bg-white p-8 rounded-xl shadow-2xl md:flex gap-12">
                <div className="md:w-1/2">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-auto max-h-[500px] rounded-lg object-contain" />
                </div>
                <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                    <p className="text-sm font-medium text-blue-600 uppercase">{product.brand}</p>
                    <h1 className="text-4xl font-extrabold text-gray-900 mt-2">{product.title}</h1>
                    <div className="flex items-center mt-4">
                        <span className="text-yellow-400 text-xl">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
                        <span className="text-gray-500 ml-3 text-sm">({product.rating.toFixed(2)} rating)</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mt-6">${product.price.toFixed(2)}</p>
                    <p className="text-gray-600 mt-6 leading-relaxed">{product.description}</p>
                    <button 
                        onClick={() => dispatch(addToCart(product))} 
                        className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 text-lg font-semibold"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailComponent;
