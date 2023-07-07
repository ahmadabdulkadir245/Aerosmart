import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchWord: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchedWord: (state, action) => {
      state.searchWord = action.payload;
    },
  },
});
export const { addSearchedWord } = searchSlice.actions;

export const selectedSearch = (state) => state.search.searchWord;
export default searchSlice.reducer;
