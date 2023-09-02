// cartActions.js
import { fetchUserOrdersStart, fetchUserOrdersSuccess, fetchUserOrdersFailure, addToUserOrders, removeFromCart, updateCartItemQuantity, emptyCart } from './userOrdersSlice';
import axios from 'axios';

export const fetchUserOrders = (user_id) => async (dispatch) => {
  dispatch(fetchUserOrdersStart());
  try {
    const graphqlQuery = {
      query: `
        query GetUserOrders($user_id: Int!) {
          ordersWithProductsByUser(user_id: $user_id) {
            id
            total
            date  
            products {
              id
              title
              price
              image_url
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

    const result = response.data.data; // Access the data property directly

    const orderData = result?.ordersWithProductsByUser;
    console.log(orderData);
    dispatch(fetchUserOrdersSuccess(orderData || []));
  } catch (error) {
    dispatch(fetchUserOrdersFailure(error));
  }
};




// Additional actions for adding, updating, and removing items from the cart
export const addProductToCart = (product) => (dispatch) => {
  dispatch(addToUserOrders(product));
};

export const removeProductFromCart = (productId) => (dispatch) => {
  dispatch(removeFromCart(productId));
};

export const updateProductQuantity = (productId, quantity) => (dispatch) => {
  dispatch(updateCartItemQuantity({ id: productId, quantity }));
};

export const clearCart = () => (dispatch) => {
  dispatch(emptyCart());
};
