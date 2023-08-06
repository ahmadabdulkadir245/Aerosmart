// productsActions.js
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './productsSlice';
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const page = 1;
    const perPage = 100;
    const graphqlQuery = {
      query: `
        {
          products(page: ${page}, perPage: ${perPage}) {
            products {
              id
              title
              price
              image_url
              category
              quantity
              description
            }
          }
        }
      `,
    };

    const response = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL,
      graphqlQuery
    );
    const result = await response.data;
    
    dispatch(fetchProductsSuccess(result.data.products.products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
