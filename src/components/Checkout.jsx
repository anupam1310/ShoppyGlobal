import { Provider, useSelector, useDispatch } from 'react-redux';
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
            <h2 className="text-3xl font-bold text-green-600">Order Placed Successfully!</h2>
            <p className="mt-4 text-lg text-gray-700">Redirecting to home page...</p>
        </div>
    );
    
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-4"><label className="block text-gray-700 mb-2">Full Name</label><input type="text" name="name" onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full p-2 border rounded-md" required /></div>
                        <div className="mb-4"><label className="block text-gray-700 mb-2">Email</label><input type="email" name="email" onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full p-2 border rounded-md" required /></div>
                        <div className="mb-4"><label className="block text-gray-700 mb-2">Address</label><textarea name="address" onChange={(e)=>setForm({...form, address: e.target.value})} className="w-full p-2 border rounded-md" rows="3" required></textarea></div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 text-lg font-semibold">Place Order</button>
                    </form>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        {cartItems.map(item => (<div key={item.id} className="flex justify-between items-center mb-3"><span>{item.title} x {item.quantity}</span><span>${(item.price * item.quantity).toFixed(2)}</span></div>))}
                        <hr className="my-4" />
                        <div className="flex justify-between items-center font-bold text-lg"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutComponent;