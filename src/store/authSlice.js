import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isAuthenticated: false,
  username: "",
  // other initial state properties...
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      const { isAuthenticated, username } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.username = username;
    },
    resetState: (state) => {
      return initialState; // Resets the state to its initial state
    },
  },
});

// Persist configuration
const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { setAuthenticated, resetState } = authSlice.actions;
export default persistedAuthReducer;
