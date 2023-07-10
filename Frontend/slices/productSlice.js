import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      getProducts: (state, action) => {
        state.products = action.payload;
      },
    },
  });

  export const { getProducts } = productSlice.actions;

export const productsRetrieved = (state) => state.products.products;

export default productSlice.reducer;

