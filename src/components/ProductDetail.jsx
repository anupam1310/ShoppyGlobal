import NotFoundComponent from "./NotFound";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartslice';
import React from 'react';

const ProductDetailComponent = ({ productId, setRoute }) => {
    const product = useSelector(state => state.products.items.find(p => p.id === productId));
    const dispatch = useDispatch();

    if (!product) { 
        return <NotFoundComponent setRoute={setRoute} message="Product not found or still loading." />;
    }
    
    return (
        <div className="container mx-auto px-6 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg md:flex">
                <div className="md:w-1/2"><img src={product.thumbnail} alt={product.title} className="w-full rounded-lg object-cover" /></div>
                <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                    <p className="text-gray-600 mt-2">{product.brand}</p>
                    <p className="text-2xl font-bold text-blue-600 mt-4">${product.price.toFixed(2)}</p>
                    <div className="mt-4">
                        <span className="text-yellow-500">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
                        <span className="text-gray-600 ml-2">({product.rating.toFixed(2)})</span>
                    </div>
                    <p className="text-gray-700 mt-6">{product.description}</p>
                    <button onClick={() => dispatch(addToCart(product))} className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-lg">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailComponent;