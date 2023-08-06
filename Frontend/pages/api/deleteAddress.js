import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { user_id, address_id } = req.body;
      const graphqlQuery = {
        query: `
          mutation DeleteAddress($user_id: Int, $address_id: Int) {
              deleteAddress(user_id: $user_id, address_id: $address_id)
          }
        `,
        variables: {
          user_id: Number(user_id),
          address_id: address_id,
        },
      };

      const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
      const result = response.data.data.deleteAddress;

      if (result) {
        res.status(200).json({ success: true });
      } else {
        res.status(500).json({ error: 'Failed to remove item from cart' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
