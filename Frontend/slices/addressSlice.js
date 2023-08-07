// addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: [], // Initialize cart addresses array
    loading: false,
    error: null,
  },
  reducers: {
    fetchAddressStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAddressSuccess(state, action) {
      state.loading = false;
      state.addresses = action.payload;
    },
    fetchAddressFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addAddress(state, action) {
          state.addresses.unshift(
            action.payload
            );
        },
        deleteAddress: (state, action) => {
        const index = state.addresses.findIndex(address => address.id == action.payload.id)
        let newAddress = [...state.addresses];
     if (index >= 0) {
       // the item exists in the Cart and remove it
       newAddress.splice(index, 1);
     } else {
       console.warn(
         `Can't remove product (id: ${action.payload.id}) as its not in  `
       );
     }
     state.addresses = newAddress;
      },
      setAsDefault: (state, action) => {
        const id = action.payload;
        state.addresses.forEach(address => address.is_default = false)
        const defaultAddress = state.addresses.find(address => address.id === id);
        if (defaultAddress) {
          defaultAddress.is_default = true;
        }
      },
    updateCartItemQuantity(state, action) {
      const {id, cart_quantity} = action.payload.id
      const item = state.addresses.find(item => item.id === id);
      if (item) {
        item.cart_quantity = cart_quantity;
      }
    },
    emptyCart(state) {
      state.addresses = [];
    },
  },
});

export const { fetchAddressStart, fetchAddressSuccess, fetchAddressFailure, addAddress, deleteAddress, setAsDefault, emptyCart } = addressSlice.actions;

export default addressSlice.reducer;

export const selectedaddress = (state) => state.address.addresses;

export const selectAddresslength = (state) => state.address.addresses.length;

export const selectDefaultAddress = (state) => state.address.addresses.find(address => address.is_default == true);


