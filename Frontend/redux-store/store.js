import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import cartReducer from "../slices/cartSlice";
import cartItemsReducer from "../slices/cartItemsSlice";
import orderReducer from "../slices/orderSlice";
import navReducer from '../slices/navSlice'
import productsReducer from "../slices/productSlice"
import searchedProductsReducer from "../slices/searchedProductSlice"
export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    cartItems: cartItemsReducer,
    order: orderReducer,
    nav: navReducer,
    products: productsReducer,
    searchedProducts: searchedProductsReducer,
  },
});
