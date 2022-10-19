import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartRedcer from './cartSlice';
import productReducer from './productSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartRedcer,
    products: productReducer,
  },
});
