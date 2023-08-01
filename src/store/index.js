import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';
import { cartSlice } from './cartSlice';
import { tabSlice } from './tabSlice';
import { tabHomeSlice } from './tabHomeSlice';
import authReducer  from './authSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    tab: tabSlice.reducer,
    auth: authReducer,
    tabHome: tabHomeSlice.reducer,
  },
});
