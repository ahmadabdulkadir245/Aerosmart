// wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlists: [], // Initialize cart wishlists array
    loading: false,
    error: null,
  },
  reducers: {
    fetchWishlistStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWishlistSuccess(state, action) {
      state.loading = false;
      state.wishlists = action.payload;
    },
    fetchWishlistFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToWishlist(state, action) {
        const productId = action.payload.id;
        const existingCartItem = state.wishlists.find(
          (wishlist) => wishlist.id === productId
        );
  
        if (existingCartItem) {
          existingCartItem.cart_quantity++;
        } else {
          state.wishlists.unshift(
            action.payload
            );
        }
      },
      removeFromWishlist: (state, action) => {
        const index = state.wishlists.findIndex(wishlist => wishlist.id == action.payload.id)
        let newCart = [...state.wishlists];
     if (index >= 0) {
       // the item exists in the Cart and remove it
       newCart.splice(index, 1);
     } else {
       console.warn(
         `Can't remove product (id: ${action.payload.id}) as its not in  `
       );
     }
     state.wishlists = newCart;
      },
      wishlistExist: (state, action) => {
        const { prodId} = action.payload
        return state.wishlists.find(wishlist => wishlist.id === prodId)
      },
    emptyCart(state) {
      state.wishlists = [];
    },
  },
});

export const { fetchWishlistStart, fetchWishlistSuccess, fetchWishlistFailure, addToWishlist, removeFromWishlist, emptyCart, wishlistExist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

export const selectedWishlistItems = (state) => state.wishlist.wishlists;

// export const wishlistExist = (state) => state.wishlist.wishlists.find()

export const selectedWishlistlength= (state) => state.wishlist.wishlists.length;

