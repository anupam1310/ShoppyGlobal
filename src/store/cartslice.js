   
       import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
   
   const cartSlice = createSlice({
        name: 'cart',
        initialState: { items: [] },
        reducers: {
            addToCart: (state, action) => {
                const itemInCart = state.items.find(item => item.id === action.payload.id);
                if (itemInCart) {
                    itemInCart.quantity++;
                } else {
                    state.items.push({ ...action.payload, quantity: 1 });
                }
            },
            removeFromCart: (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            },
            updateQuantity: (state, action) => {
                const item = state.items.find(item => item.id === action.payload.id);
                if (item && action.payload.quantity >= 1) {
                    item.quantity = action.payload.quantity;
                }
            },
            clearCart: (state) => {
                state.items = [];
            },
        },
    });

    export default cartSlice.reducer;

    export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
