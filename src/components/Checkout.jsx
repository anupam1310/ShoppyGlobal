import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartslice';
import React, { useState } from 'react';

const CheckoutComponent = ({ setRoute }) => {
    const { items: cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: '', email: '', address: '' });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(form.name && form.email && form.address && cartItems.length > 0) {
            setOrderPlaced(true);
            setTimeout(() => {
                dispatch(clearCart());
                setRoute({ name: 'home' });
            }, 3000);
        }
    };

    if (orderPlaced) return (
        <div className="container mx-auto px-6 py-20 text-center">
            <div className="bg-secondary p-12 rounded-xl shadow-2xl inline-block">
                <h2 className="text-3xl font-bold text-green-500">Order Placed Successfully!</h2>
                <p className="mt-4 text-lg text-text-secondary">Thank you for your purchase. Redirecting to home page...</p>
            </div>
        </div>
    );
    
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-extrabold text-text-primary mb-8">Checkout</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-xl shadow-lg">
                        <div className="mb-4">
                            <label className="block text-text-secondary mb-2 font-semibold">Full Name</label>
                            <input type="text" name="name" onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full p-3 bg-accent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-text-secondary mb-2 font-semibold">Email</label>
                            <input type="email" name="email" onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full p-3 bg-accent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-text-secondary mb-2 font-semibold">Address</label>
                            <textarea name="address" onChange={(e)=>setForm({...form, address: e.target.value})} className="w-full p-3 bg-accent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" rows="3" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 text-lg font-semibold transition-transform transform hover:scale-105">Place Order</button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="bg-secondary p-8 rounded-xl shadow-lg">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
                                <span className="text-text-secondary">{item.title} x {item.quantity}</span>
                                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <hr className="my-4 border-gray-700" />
                        <div className="flex justify-between items-center font-bold text-xl">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutComponent;