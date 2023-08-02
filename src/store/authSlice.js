// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

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

export const { setAuthenticated, resetState } = authSlice.actions;
export default authSlice.reducer;
