import { Provider, useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartslice';
import React from 'react';

const CartItemComponent = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} className="px-3 py-1 text-gray-700">-</button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} className="px-3 py-1 text-gray-700">+</button>
                </div>
                <p className="font-semibold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => dispatch(removeFromCart(item))} className="text-red-500 hover:text-red-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default CartItemComponent;

