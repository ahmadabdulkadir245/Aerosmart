// import { createSelector, createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   cartItems: [],
// };
// // The Global store setup

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const productId = action.payload.id;
//       const existingCartItem = state.cartItems.find(
//         (cartItem) => cartItem.product.id === productId
//       );

//       if (existingCartItem) {
//         // If the product already exists in the cart, increment the quantity
//         existingCartItem.qty++;
//       } else {
//         // If the product doesn't exist in the cart, add a new entry
//         const productFromBackend = action.payload.product; // Assuming the backend returns the full product object
//         const quantityFromBackend = action.payload.qty; // Assuming the backend returns the quantity of the product

//         state.cartItems.unshift({
//           product: productFromBackend,
//           qty: quantityFromBackend,
//         });
//       }
//     },
//     removeFromCart: (state, action) => {
//       const index = state.cartItems.findIndex(cartItem => cartItem.product.id == action.payload.id )
//          let newCart = [...state.cartItems];
//       if (index >= 0) {
//         // the item exists in the Cart and remove it
//         newCart.splice(index, 1);
//       } else {
//         console.warn(
//           `Can't remove product (id: ${action.payload.id}) as its not in `
//         );
//       }
//       state.cartItems = newCart;

//     },

//     minusFromCart: (state, action) => {
//       const item = state.cartItems.find(cartItem => cartItem.product.id == action.payload.id )
//       if(item) item.qty--
//       if(item.qty == 0) {
//         state.cartItems.filter(cartItem => cartItem.product.id !== action.payload.id)
//       }
//        },
    
//     emptyCart: (state, action) => {
//       state.cartItems = []
//     }
//   },
// });

// export const { addToCart, minusFromCart , removeFromCart, emptyCart} = cartSlice.actions;
// // selectors this is how to pull information from the global scopre

// export const totalCartItemSelector = createSelector(cartItems => 
//   cartItems.reduce((total, currItem) => (total += curr.qty), 0)
//   )

//   export const totalPriceSelector = createSelector(cartItems => cartItems.reduce(
//     (total, curr) => (total += curr.qty * curr.product.price), 0  
//   ))
  
//   export const productQtySelector = createSelector(
//     (cartItems, productId) => 
//     cartItems.find(cartItem => cartItem.product.id === productId)?.qty )

// export const selectedcartItems = (state) => state.cart.cartItems;
// export const selectedcartItemsProduct = (state) => state.cart.cartItems.product;


// export default cartSlice.reducer;