import CartItemComponent from "./CartIteam";
import { useSelector } from 'react-redux';
import React from 'react';

const CartComponent = ({ setRoute }) => {
    const { items: cartItems } = useSelector(state => state.cart);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.length === 0) return (
        <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-text-primary">Your Cart is Empty</h2>
            <p className="text-text-secondary mb-8">Looks like you haven't added anything to your cart yet.</p>
            <button onClick={() => setRoute({ name: 'home' })} className="bg-teal-600 text-white py-3 px-8 rounded-lg hover:bg-teal-700 transition-transform transform hover:scale-105 font-semibold">
                Continue Shopping
            </button>
        </div>
    );

    return (
        <div className="container mx-auto px-6 py-8">
            <h2 className="text-4xl font-extrabold mb-8 text-text-primary">Your Shopping Cart</h2>
            <div className="bg-secondary rounded-xl shadow-lg">
                {cartItems.map(item => <CartItemComponent key={item.id} item={item} />)}
                <div className="p-6 flex justify-between items-center bg-accent rounded-b-xl">
                    <div>
                        <span className="text-xl font-bold text-text-primary">Total:</span>
                        <span className="text-2xl font-extrabold text-white ml-2">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button onClick={() => setRoute({ name: 'checkout' })} className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 font-semibold shadow-md">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartComponent;