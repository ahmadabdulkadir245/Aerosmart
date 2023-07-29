// utils/api.js
import axios from 'axios';

 // Replace with your actual GraphQL endpoint

export async function fetchUserCart(user_id) {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      query: `
        query FetchUserCart($user_id: Int!) {
          cart(user_id: $user_id) {
            carts {
              id
              quantity
              product_id
              user_id
            }
          }
        }
      `,
      variables: {
        user_id: user_id,
      },
    });

    return response.data.data.cart.carts;
  } catch (error) {
    console.error('Error fetching user cart:', error);
    return [];
  }
}

export async function removeFromCart(cartItemId) {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      query: `
        mutation RemoveFromCart($cartItemId: Int!) {
          removeFromCart(cartItemId: $cartItemId)
        }
      `,
      variables: {
        cartItemId: cartItemId,
      },
    });

    return response.data.data.removeFromCart;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    return false;
  }
}
