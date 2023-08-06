// cartActions.js
import { fetchAddressStart, fetchAddressSuccess, fetchAddressFailure, addAddress, deleteAddress, setAsDefault, emptyCart } from './addressSlice';
import axios from 'axios';

export const fetchAddress = (user_id) => async (dispatch) => {
  dispatch(fetchAddressStart());
  try {
    const graphqlQuery = {
        query: `
          query FetchAddresses($user_id: Int!) {
            addresses(user_id: $user_id) {
              addresses {user_id
                id
                first_name
                last_name
                address_line_1
                address_line_2
                phone_number_1
                phone_number_2
                city
                state
                is_default
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
  
    const addressData = result?.data?.addresses?.addresses;
  
    dispatch(fetchAddressSuccess(addressData || []));
    // dispatch(fetchProductsInCartSuccess(addressData || []));
  } catch (error) {
    dispatch(fetchAddressFailure(error.message));
  }
};



// Additional actions for adding, updating, and removing items from the cart
export const addUserAddress = (product) => (dispatch) => {
  dispatch(addAddress(product));
};

export const setDefaultAddress = (address_id) => (dispatch) => {
  dispatch(setAsDefault(address_id));
};

export const removeUserAddress= (productId) => (dispatch) => {
  dispatch(deleteAddress(productId));
};

export const updateProductQuantity = (productId, quantity) => (dispatch) => {
  dispatch(updateCartItemQuantity({ id: productId, quantity }));
};

export const clearCart = () => (dispatch) => {
  dispatch(emptyCart());
};
