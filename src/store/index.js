import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';
import { cartSlice } from './cartSlice';
import { tabSlice } from './tabSlice';
import { tabHomeSlice } from './tabHomeSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    tab: tabSlice.reducer,
    tabHome: tabHomeSlice.reducer,
  },
});
