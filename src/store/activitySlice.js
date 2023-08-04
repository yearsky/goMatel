import { createSlice } from "@reduxjs/toolkit";
import activity from "../data/activity";

const initialState = {
  activityItems: activity,
  selectedActivity: null,
};

export const activitySlice = createSlice({
  name: "activityItems",
  initialState,
  reducers: {
    setSelectedActivity: (state, action) => {
      const activityId = action.payload;
      state.selectedActivity = state.activityItems.find(
        (p) => p.id === activityId
      );
    },
  },
});
