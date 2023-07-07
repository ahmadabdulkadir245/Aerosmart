import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import cartReducer from "../slices/cartSlice";
import orderReducer from "../slices/orderSlice";
import navReducer from '../slices/navSlice'
export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    order: orderReducer,
    nav: navReducer
  },
});
