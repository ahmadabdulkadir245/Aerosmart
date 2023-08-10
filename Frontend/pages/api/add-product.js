import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, price, quantity, category, description, image, user_id } = req.body;

      const formData = new FormData();
      formData.append('image', image);

      // Upload the image using Axios
      const imageResponse = await axios.post(process.env.NEXT_PUBLIC_PRODUCT_IMAGE_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Wait for the image URL to be set before proceeding
      const imageUrl = await imageResponse.data.image || 'undefined';

      const graphqlQuery = {
        query: `
          mutation CreateProduct($title: String!, $price: Int!, $image_url: String!, $description: String!, $category: String, $quantity: Int, $user_id: Int) {
            createProduct(productInput: {title: $title, price: $price, image_url: $image_url, description: $description, category: $category, quantity: $quantity, user_id: $user_id}) {
              title
              price
              quantity
              category
              image_url
              description
            }
          }
        `,
        variables: {
          title,
          category,
          description,
          user_id: Number(user_id),
          price: Number(price),
          quantity: Number(quantity),
          image_url: imageUrl,
        },
      };

      // Send GraphQL query using Axios
      const graphqlResponse = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
      const result = graphqlResponse.data.data.createProduct;

      // Return the response to the client
      res.status(200).json({ success: true, message: 'Product Added Successfully', result });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ success: false, message: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
