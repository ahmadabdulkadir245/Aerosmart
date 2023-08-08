import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const { first_name, last_name, user_id } = req.body; 

        const graphqlQuery = {
            query: `
              mutation UpdateUsername($id: Int!, $first_name: String!, $last_name: String!) {
                updateUsername(usernameInput: {id: $id, first_name: $first_name, last_name: $last_name}) {
                  first_name
                  last_name
                  email
                }
              }
              `,
              variables: {
                id: Number(user_id),
                first_name: first_name,
                last_name: last_name
              },
            };
      const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
      const result = response.data.data.updateUsername;
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
