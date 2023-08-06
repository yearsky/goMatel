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
      state.selectedData = state.dataNopol.find((p) => p.id === nopolId);
    },
    addNewData: (state, action) => {
      const newData = action.payload;
      state.dataNopol.push(newData);
    },
    sortByDate: (state) => {
      state.dataNopol.sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("-"));
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        return dateA - dateB;
      });
    },
  },
});

export const { setSelectedNopol, addNewData, sortByDate } = nopolSlice.actions;

export default nopolSlice.reducer;
