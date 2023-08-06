import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const { id, user_id, qauntity } = req.body; 

      const graphqlQuery = {
        query: `
          mutation AddToCart($user_id: Int, $quantity: Int, $product_id: Int) {
            addToCart(cartInput: {user_id: $user_id, product_id: $product_id, quantity: $quantity}) {
              user_id
              product_id
              quantity
            }
          }
        `,
        variables: {
          user_id: Number(user_id),
          product_id: Number(id),
          quantity: Number(qauntity),
        },
      };

      const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
      const result = response.data.data.addToCart;

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
