import { createSlice } from '@reduxjs/toolkit';

const searchedProductsSlice = createSlice({
  name: 'searchedProducts',
  initialState: {
    items: [], // Your array of products
    selectedProduct: null,
    selectedProductCategory: null,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setSelectedProductCategory: (state, action) => {
      state.selectedProductCategory = action.payload;
    },
  },
});

export const { setSelectedProduct, setSelectedProductCategory } = searchedProductsSlice.actions;

export default searchedProductsSlice.reducer;
