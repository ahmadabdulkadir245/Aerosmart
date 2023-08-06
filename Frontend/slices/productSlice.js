import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      getProduct: (state, action) => {
        state.products = action.payload;
      },
    },
  });

  export const { getProduct} = productSlice.actions;

export const productsRetrieved = (state) => state.product.products;

export default productSlice.reducer;

