import { createSlice } from '@reduxjs/toolkit';
import tab from '../data/tab';

const initialState = {
  tab: tab,
  selectedTab: null,
};

export const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      const tabId = action.payload;
      state.selectedTab = state.tab.find((p) => p.id === tabId);
    },
  },
});
