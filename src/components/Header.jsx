import { useSelector } from 'react-redux';

const HeaderComponent = ({ setRoute }) => {
    const cartItems = useSelector(state => state.cart.items);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-20">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#/" onClick={() => setRoute({ name: 'home' })} className="text-2xl font-bold text-gray-800">
                    <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-400">ShoppyGlobe</span>
                </a>
                <div className="flex items-center space-x-6">
                    <a href="#/" onClick={() => setRoute({ name: 'home' })} className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#/cart" onClick={() => setRoute({ name: 'cart' })} className="relative text-gray-600 hover:text-blue-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">{cartItemCount}</span>
                        )}
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;
