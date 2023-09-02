// userOrders.js
import { createSlice } from '@reduxjs/toolkit';

const userOrders = createSlice({
  name: 'userOrder',
  initialState: {
    orders: [], // Initialize cart orders array
    loading: false,
    error: null,
  },
  reducers: {
    fetchUserOrdersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserOrdersSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchUserOrdersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToUserOrders(state, action) {
        const productId = action.payload.id;
        const existingCartItem = state.orders.find(
          (userOrder) => userOrder.id === productId
        );
        if (existingCartItem) {
          existingCartItem.cart_quantity++;
        } else {
          state.orders.unshift(
            action.payload
            );
        }
      },
      removeFromCart: (state, action) => {
        const index = state.orders.findIndex(userOrder => userOrder.id == action.payload.id)
        let newCart = [...state.orders];
     if (index >= 0) {
       // the item exists in the Cart and remove it
       newCart.splice(index, 1);
     } else {
       console.warn(
         `Can't remove product (id: ${action.payload.id}) as its not in  `
       );
     }
     state.orders = newCart;
      },
    updateCartItemQuantity(state, action) {
      const {id, cart_quantity} = action.payload.id
      const item = state.orders.find(item => item.id === id);
      if (item) {
        item.cart_quantity = cart_quantity;
      }
    },
    emptyCart(state) {
      state.orders = [];
    },
  },
});

export const { fetchUserOrdersStart, fetchUserOrdersSuccess, fetchUserOrdersFailure, addToUserOrders, removeFromCart, updateCartItemQuantity, emptyCart } = userOrders.actions;

export default userOrders.reducer;

export const selectedUserOrders = (state) => state.userOrder.orders;

export const selectedCartlength= (state) => state.userOrder.orders.length;

// Selector to calculate the total cart amount
export const selectCartTotal = (state) =>
  state.userOrder.orders.reduce(
    (total, item) => total + item.price * item.cart_quantity,
    0
  );
