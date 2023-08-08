// cartActions.js
import { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure, addToOrders, removeFromOrders, emptyOrders } from './cartItemSlice';
import axios from 'axios';

export const fetchCart = (user_id) => async (dispatch) => {
  dispatch(fetchOrdersStart());
  try {
    const graphqlQuery = {
      query: `
      query GetCartInProducts($user_id: Int!) {
        getCartInProducts(user_id: $user_id) {
            products {
                id
                title
                price
                image_url
                description
                category
                quantity
                cart_id
                cart_quantity
            }
        }
    }
      `,
      variables: {
        user_id: Number(user_id), // Replace with the actual user ID
      },
    };
  
    const response = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL,
      graphqlQuery 
    );

      const result = await response.data
  
    const cartData = result.data?.getCartInProducts.cart;
    const productData = result.data?.getCartInProducts.products;
  
    dispatch(fetchOrdersSuccess(productData || []));
    // dispatch(fetchProductsInCartSuccess(productData || []));
  } catch (error) {
    dispatch(fetchOrdersFailure(error.message));
  }
  
};



// Additional actions for adding, updating, and removing items from the cart
export const addProductToCart = (product) => (dispatch) => {
  dispatch(addToOrders(product));
};

export const removeProductFromCart = (productId) => (dispatch) => {
  dispatch(removeFromOrders(productId));
};

export const clearOrders = () => (dispatch) => {
  dispatch(emptyOrders());
};
