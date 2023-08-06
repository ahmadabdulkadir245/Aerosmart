import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const { address_id, user_id } = req.body; 

        const graphqlQuery = {
            query: `
            mutation SetDefaultAddress($user_id: Int, $address_id: Int) {
              setDefaultAddress(user_id: $user_id, address_id: $address_id)
            }
          `,
          variables: {
            user_id: Number(user_id),
            address_id: Number(address_id),
          },
          };
      const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
      const result = response.data.data.addToWishlist;
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
