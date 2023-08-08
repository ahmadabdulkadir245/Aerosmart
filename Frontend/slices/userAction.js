// cartActions.js
import { fetchUserStart, fetchUserSuccess, fetchUserFailure, addToWishlist, removeFromWishlist, userExist } from './userSlice';
import axios from 'axios';

export const FetchUser = (user_id) => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const graphqlQuery = {
        query: `
          query User($id: Int!) {
            user(id: $id) {
              id
               email
               first_name
               last_name
             }
          }
        `,
        variables: {
          id: Number(user_id)
        },
      };
    const response = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL,
      graphqlQuery 
    );

    const result = await response.data
    const userData =result?.data?.user
    dispatch(fetchUserSuccess(userData || []));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};
// Additional actions for adding, updating, and removing items from the cart
export const addProductToWishlist = (product) => (dispatch) => {
  dispatch(addToWishlist(product));
};

export const removeProductFromWishlist = (productId) => (dispatch) => {
  dispatch(removeFromWishlist(productId));
};

export const checkUser = (user_id) => (dispatch) => {
  dispatch(userExist(user_id));
};

export const updateProductQuantity = (productId, quantity) => (dispatch) => {
  dispatch(updateCartItemQuantity({ id: productId, quantity }));
};
