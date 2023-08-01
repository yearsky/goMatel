import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    username: "",
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      if (action.payload.isAuthenticated) {
        state.username = action.payload.username;
      } else {
        state.username = "";
      }
    },
  },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
