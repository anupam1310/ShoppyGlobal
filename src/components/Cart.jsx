import CartItemComponent from "./CartIteam";
import { Provider, useSelector, useDispatch } from 'react-redux';
import React from 'react';



const CartComponent = ({ setRoute }) => {
    const { items: cartItems } = useSelector(state => state.cart);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.length === 0) return (
        <div className="container mx-auto px-6 py-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
            <button onClick={() => setRoute({ name: 'home' })} className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">Continue Shopping</button>
        </div>
    );

    return (
        <div className="container mx-auto px-6 py-8">
            <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>
            <div className="bg-white rounded-lg shadow-md">
                {cartItems.map(item => <CartItemComponent key={item.id} item={item} />)}
                <div className="p-4 flex justify-end items-center">
                    <span className="text-xl font-bold text-gray-800">Total: ${totalPrice.toFixed(2)}</span>
                    <button onClick={() => setRoute({ name: 'checkout' })} className="ml-6 bg-green-600 text-white py-2 px-8 rounded-md hover:bg-green-700">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartComponent;