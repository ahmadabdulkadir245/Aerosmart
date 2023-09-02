import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import wishlistReducer from "../slices/wishlistSlice";
import cartItemReducer from "../slices/cartItemSlice";
import addressReducer from "../slices/addressSlice";
import cartItemsReducer from "../slices/cartItemsSlice";
import orderReducer from "../slices/orderSlice";
import userOrderReducer from "../slices/userOrdersSlice";
import userReducer from '../slices/userSlice'
import navReducer from '../slices/navSlice'
import productReducer from "../slices/productSlice"
import productsReducer from "../slices/productsSlice"
import searchedProductsReducer from "../slices/searchedProductSlice"
export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    cartItems: cartItemsReducer,
    cartItem: cartItemReducer,
    address: addressReducer,
    order: orderReducer,
    userOrder: userOrderReducer,
    nav: navReducer,
    product: productReducer,
    products: productsReducer,
    searchedProducts: searchedProductsReducer,
  },
});
