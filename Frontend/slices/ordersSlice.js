// ordersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [], // Initialize cart orders array
    loading: false,
    error: null,
  },
  reducers: {
    fetchOrderStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchOrderSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToOrder(state, action) {
        const productId = action.payload.id;
        const existingCartItem = state.orders.find(
          (order) => order.id === productId
        );
  
        if (existingCartItem) {
          existingCartItem.cart_quantity++;
        } else {
          state.orders.unshift(
            action.payload
            );
        }
      },
      removeFromOrder: (state, action) => {
        const index = state.orders.findIndex(order => order.id == action.payload.id)
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
      wishlistExist: (state, action) => {
        const { prodId} = action.payload
        return state.orders.find(order => order.id === prodId)
      },
    emptyCart(state) {
      state.orders = [];
    },
  },
});

export const { fetchOrderStart, fetchOrderSuccess, fetchOrderFailure, addToOrder, removeFromOrder, emptyCart, orderExist } = ordersSlice.actions;

export default ordersSlice.reducer;

export const selectedOrderItems = (state) => state.order.orders;

// export const orderExist = (state) => state.order.orders.find()

export const selectedOrderlength= (state) => state.order.orders.length;

