import { createSlice } from '@reduxjs/toolkit';
import tabHome from '../data/tabHome';

const initialState = {
  tab: tabHome,
  selectedTab: null,
};

export const tabHomeSlice = createSlice({
  name: 'tabHome',
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      const tabId = action.payload;
      state.selectedTab = state.tab.find((p) => p.id === tabId);
    },
  },
});
