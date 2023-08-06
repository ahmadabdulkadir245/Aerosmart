// cartActions.js
import { fetchCartStart, fetchCartSuccess, fetchCartFailure, addToCart, removeFromCart, updateCartItemQuantity, emptyCart } from './cartItemSlice';
import axios from 'axios';

export const fetchCart = (user_id) => async (dispatch) => {
  dispatch(fetchCartStart());
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
  
    dispatch(fetchCartSuccess(productData || []));
    // dispatch(fetchProductsInCartSuccess(productData || []));
  } catch (error) {
    dispatch(fetchCartFailure(error.message));
  }
  
};



// Additional actions for adding, updating, and removing items from the cart
export const addProductToCart = (product) => (dispatch) => {
  dispatch(addToCart(product));
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
