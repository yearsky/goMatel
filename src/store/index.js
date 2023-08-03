import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { productsSlice } from "./productsSlice";
import { cartSlice } from "./cartSlice";
import { tabSlice } from "./tabSlice";
import { tabHomeSlice } from "./tabHomeSlice";
import { activitySlice } from "./activitySlice";
import authReducer from "./authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    auth: authReducer, // Use the persisted reducer here
    tabHome: tabHomeSlice.reducer,
  },
});

// Create the redux-persist store and persistor
const persistor = persistStore(store);

// Export the persistor if needed (optional)
export { persistor };
