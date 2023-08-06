// cartItemSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartItemSlice = createSlice({
  name: 'cartItem',
  initialState: {
    cartItems: [], // Initialize cart cartItems array
    loading: false,
    error: null,
  },
  reducers: {
    fetchCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess(state, action) {
      state.loading = false;
      state.cartItems = action.payload;
    },
    fetchCartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart(state, action) {
        const productId = action.payload.id;
        const existingCartItem = state.cartItems.find(
          (cartItem) => cartItem.id === productId
        );
        if (existingCartItem) {
          existingCartItem.cart_quantity++;
        } else {
          state.cartItems.unshift(
            action.payload
            );
        }
      },
      removeFromCart: (state, action) => {
        const index = state.cartItems.findIndex(cartItem => cartItem.id == action.payload.id)
        let newCart = [...state.cartItems];
     if (index >= 0) {
       // the item exists in the Cart and remove it
       newCart.splice(index, 1);
     } else {
       console.warn(
         `Can't remove product (id: ${action.payload.id}) as its not in  `
       );
     }
     state.cartItems = newCart;
      },
    updateCartItemQuantity(state, action) {
      const {id, cart_quantity} = action.payload.id
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.cart_quantity = cart_quantity;
      }
    },
    emptyCart(state) {
      state.cartItems = [];
    },
  },
});

export const { fetchCartStart, fetchCartSuccess, fetchCartFailure, addToCart, removeFromCart, updateCartItemQuantity, emptyCart } = cartItemSlice.actions;

export default cartItemSlice.reducer;

export const selectedCartItems = (state) => state.cartItem.cartItems;

export const selectedCartlength= (state) => state.cartItem.cartItems.length;

// Selector to calculate the total cart amount
export const selectCartTotal = (state) =>
  state.cartItem.cartItems.reduce(
    (total, item) => total + item.price * item.cart_quantity,
    0
  );
