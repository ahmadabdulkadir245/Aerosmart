// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: null, // Initialize cart users array
    loading: false,
    error: null,
  },
  reducers: {
    fetchUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToWishlist(state, action) {
        const productId = action.payload.id;
        const existingCartItem = state.users.find(
          (user) => user.id === productId
        );
        if (existingCartItem) {
          existingCartItem.cart_quantity++;
        } else {
          state.users.unshift(
            action.payload
            );
        }
      },
      deleteUser: (state, action) => {
        const index = state.users.findIndex(user => user.id == action.payload.id)
        let newCart = [...state.users];
     if (index >= 0) {
       // the item exists in the Cart and remove it
       newCart.splice(index, 1);
     } else {
       console.warn(
         `Can't remove product (id: ${action.payload.id}) as its not in  `
       );
     }
     state.users = newCart;
      },
      updateUserName(state, action) {
        const {id, cart_quantity} = action.payload.id
        const item = state.cartItems.find(item => item.id === id);
        if (item) {
          item.cart_quantity = cart_quantity;
        }
      },
      userExist: (state, action) => {
        const { user_id} = action.payload
        return user_id
      },
    emptyCart(state) {
      state.users = [];
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure, addToWishlist, deleteUser, emptyCart, userExist, updateUserName } = userSlice.actions;

export default userSlice.reducer;

export const selectedUsers = (state) => state.user.users;

export const selectedUser = (state) => state.user.users

export const selectedWishlistlength= (state) => state.user.users.length;

