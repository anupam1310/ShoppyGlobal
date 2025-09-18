import './App.css'

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header';

import { store } from './store'; // import the store  

    
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));


    // --- Main App Component with Routing ---
    const App = () => {
        const [route, setRoute] = useState({ name: 'home' });

        useEffect(() => {
            const handleHashChange = () => {
                const hash = window.location.hash.slice(2);
                const [path, id] = hash.split('/');
                
                if (path === 'product' && id) setRoute({ name: 'product', id: parseInt(id, 10) });
                else if (path === 'cart') setRoute({ name: 'cart' });
                else if (path === 'checkout') setRoute({ name: 'checkout' });
                else if (path === '') setRoute({ name: 'home' });
                else setRoute({ name: 'notfound' });
            };

            window.addEventListener('hashchange', handleHashChange);
            handleHashChange();
            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        const renderPage = () => {
            switch (route.name) {
                case 'home': return <ProductList setRoute={setRoute} />;
                case 'product': return <ProductDetail productId={route.id} setRoute={setRoute} />;
                case 'cart': return <Cart setRoute={setRoute} />;
                case 'checkout': return <Checkout setRoute={setRoute} />;
                default: return <NotFound setRoute={setRoute} />;
            }
        };
        
        return (
            <Provider store={store}>
                <div className="bg-gray-50 min-h-screen font-sans">
                    <HeaderComponent setRoute={(newRoute) => window.location.hash = `#/${newRoute.name === 'home' ? '' : newRoute.name}`} />
                    <main>
                        <Suspense fallback={<div className="text-center py-10">Loading page...</div>}>
                            {renderPage()}
                        </Suspense>
                    </main>
                    <footer className="bg-white mt-12 py-6">
                        <div className="container mx-auto px-6 text-center text-gray-600">
                            <p>&copy; 2024 ShoppyGlobe. All Rights Reserved.</p>
                        </div>
                    </footer>
                </div>
            </Provider>
        );
    }

    export default App;

