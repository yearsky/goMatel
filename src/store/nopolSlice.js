import { createSlice } from "@reduxjs/toolkit";
import nopol from "../data/nopol";

const initialState = {
  dataNopol: nopol,
  selectedData: null,
};

export const nopolSlice = createSlice({
  name: "dataNopol",
  initialState,
  reducers: {
    setSelectedNopol: (state, action) => {
      const nopolId = action.payload;
      state.selectedData = state.activityItems.find((p) => p.id === activityId);
    },
  },
});
