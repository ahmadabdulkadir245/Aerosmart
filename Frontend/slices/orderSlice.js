import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
};
// The Global store setup

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.orderItems = action.payload
    },
    removeFromOrder: (state, action) => {
      const index = state.orderItems.findIndex(orderItem => orderItem.product.id == action.payload.id )
         let newOrder = [...state.orderItems];
      if (index >= 0) {
        // the item exists in the Cart and remove it
        newOrder.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in `
        );
      }
      state.orderItems = newOrder;

    },
  },
});

export const { addToOrder , removeFromOrder} = orderSlice.actions;
// selectors this is how to pull information from the global scopre


export const selectedOrderItems = (state) => state.order.orderItems;

export const selectedOrderItemsProduct = (state) => state.order.orderItems.product;

export const selectProductTotal = (state) =>
  state.order.orderItems.reduce((total, orderItem) => total +=  orderItem.qty * orderItem.product.price, 0);

export const selectOrderTotal = (state) =>
  state.order.orderItems.reduce((total, orderItem) => total +=  orderItem.qty * orderItem.product.price, 0);

export default orderSlice.reducer;


