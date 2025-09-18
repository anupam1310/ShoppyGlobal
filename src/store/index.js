import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productslice'; // importing the default export
import cartReducer from './cartslice';






export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});