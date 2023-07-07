import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
      openNav: (state, action) => {
        state.isOpen = action.payload;
      },
    },
  });

  export const { openNav } = navSlice.actions;

export const navState = (state) => state.nav.isOpen;

export default navSlice.reducer;

