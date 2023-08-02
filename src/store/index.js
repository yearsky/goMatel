import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import { cartSlice } from "./cartSlice";
import { tabSlice } from "./tabSlice";
import { tabHomeSlice } from "./tabHomeSlice";
import { activitySlice } from "./activitySlice";
import authReducer from "./authSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    activityItems: activitySlice.reducer,
    tab: tabSlice.reducer,
    auth: authReducer,
    tabHome: tabHomeSlice.reducer,
  },
});
