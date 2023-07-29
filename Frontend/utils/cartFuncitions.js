import axios from 'axios';

// Function to fetch user's cart
export async function getProductsInCart(user_id) {
  try {
    const graphqlQuery = {
      query: `
        query GetUserCart($user_id: Int!) {
          cart(user_id: $user_id) {
            carts {
              id
              user_id
              quantity
              product_id
            }
          }
        }
      `,
      variables: {
        user_id: user_id,
      },
    };

    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
    return response.data.data.cart.carts;
  } catch (error) {
    throw new Error('Error fetching user cart');
  }
}

// Function to remove a product from the cart
export async function removeFromCart(user_id, cart_item_id) {
  try {
    const graphqlQuery = {
        query: `
          mutation RemoveFromCart($user_id: Int!, $cart_item_id: Int!) {
            removeFromCart(user_id: $user_id, cart_item_id: $cart_item_id)
          }
        `,
        variables: {
          user_id: user_id,
          cart_item_id: cart_item_id
        },
      };

    await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
  } catch (error) {
    throw new Error('Error removing item from cart');
  }
}
