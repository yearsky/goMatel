import { createSlice } from "@reduxjs/toolkit";
import activity from "../data/activity";

const initialState = {
  activityItems: activity,
};

export const activitySlice = createSlice({
  name: "activityItems",
  initialState,
  reducers: {},
});
