import ProductItemComponent from "./ProductIteam";
import { Provider, useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { fetchProducts, setSearchTerm } from '../store/productslice';


const ProductListComponent = ({ setRoute }) => {
    const dispatch = useDispatch();
    const { items: products, status, error, searchTerm } = useSelector(state => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);
    
    const handleSearchChange = (e) => dispatch(setSearchTerm(e.target.value));

    const filteredProducts = products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

    if (status === 'loading') return <div className="text-center py-10">Loading products...</div>;
    if (status === 'failed') return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto px-6 py-8">
            <div className="mb-8"><input type="text" placeholder="Search for products..." value={searchTerm} onChange={handleSearchChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => <ProductItemComponent key={product.id} product={product} setRoute={setRoute} />)}
            </div>
        </div>
    );
};

export default ProductListComponent;