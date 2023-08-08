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
    addToOrders(state, action) {
          state.orders.unshift(
            action.payload
            );
      },
      removeFromOrders: (state, action) => {
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
    emptyOrders(state) {
      state.orders = [];
    },
  },
});

export const { fetchOrderStart, fetchOrderSuccess, fetchOrderFailure, addToOrders, removeFromOrders, emptyOrders, ordersExist } = ordersSlice.actions;

export default ordersSlice.reducer;

export const selectedOrderItems = (state) => state.order.orders;

// export const ordersExist = (state) => state.order.orders.find()

export const selectedOrderlength= (state) => state.order.orders.length;

