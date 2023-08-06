import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const { first_name, last_name, address_line_1, address_line_2, city, state, phone_number_1, phone_number_2, user_id } = req.body; 

        const graphqlQuery = {
            query: `
              mutation CreateAddress(
                $user_id: Int,
                $first_name: String,
                $last_name: String,
                $address_line_1: String,
                $address_line_2: String,
                $city: String,
                $state: String,
                $phone_number_1: String,
                $phone_number_2: String,
              ) {
                createAddress(
                  addressInput: {
                    user_id: $user_id,
                    first_name: $first_name,
                    last_name: $last_name,
                    address_line_1: $address_line_1,
                    address_line_2: $address_line_2,
                    city: $city,
                    state: $state,
                    phone_number_1: $phone_number_1,
                    phone_number_2: $phone_number_2
                  }
                ) {
                  id
                  user_id
                  first_name
                  last_name
                  address_line_1
                  address_line_2
                  phone_number_1
                  phone_number_2
                  city
                  state
                }
              }
            `,
            variables: {
              user_id: Number(user_id),
              first_name: first_name,
              last_name: last_name,
              address_line_1: address_line_1,
              address_line_2: address_line_2,
              phone_number_1: phone_number_1,
              phone_number_2: phone_number_2,
              city: city,
              state: state,
            },
          };
      

      const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
      const result = response.data.data.createAddress;

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
