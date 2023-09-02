// pages/api/products.js
import axios from 'axios';

export default async (req, res) => {
  try {
    const { category, page, perPage } = req.body;
    
    const response = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL,
      {
        query: `
          query ProductsInCategory($category: String!, $page: Int!, $perPage: Int!) {
            productsInCategory(category: $category, page: $page, perPage: $perPage) {
              products {
                id
                title
                price
                image_url
              }
              total
            }
          }
        `,
        variables: {
          category,
          page: Number(page),
          perPage: Number(perPage),
        },
      }
    );
    
    const data = response.data.data.productsInCategory;
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};
