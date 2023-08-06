// cartActions.js
import { fetchWishlistStart, fetchWishlistSuccess, fetchWishlistFailure, addToWishlist, removeFromWishlist, wishlistExist } from './wishlistSlice';
import axios from 'axios';

export const FetchWishlist = (user_id) => async (dispatch) => {
  dispatch(fetchWishlistStart());
  try {
    const graphqlQuery = {
        query: `
          query FetchWishlists($user_id: Int!) {
            getWishlistProducts(user_id: $user_id) {
              products {
                id
                price
                title
                image_url
                description
                category
              }
            }
          }
        `,
        variables: {
          user_id: Number(user_id)
        },
      };
  
    const response = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL,
      graphqlQuery 
    );

      const result = await response.data
    const wishlistData =result?.data?.getWishlistProducts?.products
    dispatch(fetchWishlistSuccess(wishlistData || []));
  } catch (error) {
    dispatch(fetchWishlistFailure(error.message));
  }
};


// Additional actions for adding, updating, and removing items from the cart
export const addProductToWishlist = (product) => (dispatch) => {
  dispatch(addToWishlist(product));
};

export const removeProductFromWishlist = (productId) => (dispatch) => {
  dispatch(removeFromWishlist(productId));
};

export const checkProuctFromWishlist = (productId) => (dispatch) => {
  dispatch(wishlistExist(productId));
};

export const updateProductQuantity = (productId, quantity) => (dispatch) => {
  dispatch(updateCartItemQuantity({ id: productId, quantity }));
};
