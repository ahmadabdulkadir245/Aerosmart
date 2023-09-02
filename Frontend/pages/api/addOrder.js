import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        first_name,
        last_name,
        phone_number_1,
        phone_number_2,
        shipping_address_1,
        shipping_address_2,
        order_completed,
        total,
        order_items,
        user_id,
      } = req.body;

      const graphqlQuery = {
        query: `
          mutation AddOrder(
            $first_name: String!,
            $last_name: String!,
            $phone_number_1: String!,
            $phone_number_2: String!,
            $shipping_address_1: String!,
            $shipping_address_2: String!,
            $order_completed: Boolean!,
            $product_delivered: Boolean!,
            $total: Int!,
            $user_id: Int!,
            $order_items: [OrderItemInput!]!
          ) {
            addOrder(orderInput: {
              first_name: $first_name,
              last_name: $last_name,
              phone_number_1: $phone_number_1,
              phone_number_2: $phone_number_2,
              shipping_address_1: $shipping_address_1,
              shipping_address_2: $shipping_address_2,
              order_completed: $order_completed,
              product_delivered: $product_delivered,
              total: $total,
              user_id: $user_id,
              order_items: $order_items
            }) {
              first_name
              last_name
              phone_number_1
              shipping_address_1
              shipping_address_2
              order_completed
              product_delivered
              total
              user_id
              order_items {
                product_id
                quantity
                unit_price
              }
            }
          }
        `,
        variables: {
          first_name: first_name,
          last_name: last_name,
          phone_number_1: phone_number_1,
          phone_number_2: phone_number_2,
          shipping_address_1: shipping_address_1,
          shipping_address_2: shipping_address_2,
          order_completed: order_completed,
          product_delivered: false,
          total: Number(total),
          user_id: Number(user_id),
          date: null,
          order_items: order_items
        },
      };
      
      const response = await axios.post(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        graphqlQuery
      );

      const result = response.data.data.addOrder;

      res.status(200).json(result);
    } catch (error) {
      console.error('Error adding order:', error);
      res.status(500).json({ error});
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
