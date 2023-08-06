import { createContext, useContext, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';



// Define the initial state
const initialState = {
  cartItems: [],
  products: [],
  status: "idle",
  error: null,
};

// Fetch cart items from the backend using GraphQL
// Function to fetch cart items
const fetchUserData = async (user_id) => {
  try {
    const graphqlQuery = {
      query: `
        query FetchCartItems($user_id: Int!) {
          carts(user_id: $user_id) {
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
        user_id: Number(user_id),
      },
    };

    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
    return response.data.data.carts.carts;
  } catch (error) {
    // Handle errors if needed.
    throw new Error('Error fetching user cart items');
  }
};

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, thunkAPI) => {
    const user_id = Cookies.get('user_id'); // Replace 'user_id' with your actual cookie name for user_id.
    if (user_id) {
      return await fetchUserData(user_id);
    } else {
      // If user_id cookie is not available, return an empty array or handle the case as per your requirements.
      return [];
    }
  }
);

  

//  fetch products 
export const fetchProductById = createAsyncThunk(
  'cart/fetchProductById',
  async (product_ids, setLoading, thunkAPI) => {
    try {
      const graphqlQuery = {
        query: `
          query FetchProductById($product_ids: [Int]) {
            productsInCart(ids: $product_ids) {
              id
              title
              price
              image_url
              description
              category
              quantity
            }
          }
        `,
        variables: {
          product_ids: product_ids.map(Number),
        },
      };

      const response = await axios.post(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        graphqlQuery
      );
        // console.log( response.data.data.productsInCart)
        return response.data.data.productsInCart;
    } catch (error) {
      console.error('Error fetching product by id:', error);
      throw new Error('Error fetching product by id');
    }
  }
);


// addToCart
export const addCartItem = createAsyncThunk(
    "cart/addCartItem",
    async ({ user_id, product_id }, thunkAPI) => {
      try {
        const graphqlQuery = {
          query: `
            mutation AddCartItem($user_id: Int!, $product_id: Int!) {
              addToCart(cartInput: { user_id: $user_id, product_id: $product_id }) {
                id
                quantity
                product_id
                user_id
              }
            }
          `,
          variables: {
            user_id: Number(user_id),
            product_id: Number(product_id),
          },
        };
  
        const response = await axios.post(
          process.env.NEXT_PUBLIC_GRAPHQL_URL,
          graphqlQuery
        );
        return response.data.data.addToCart;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

// Create the cart slice
const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(cartItem => cartItem.product.id == action.payload.id )
      if(item) item.qty++
      else {
        state.cartItems.unshift({
          product: action.payload,
          qty: 1
        })
      }      
    },
    addQuantity: (state, action) => {
      const item = state.cartItems.find(cartItem => cartItem.product.id == action.payload.id )
      if(item) item.qty++
      if(item.qty == 0) {
        state.cartItems.filter(cartItem => cartItem.product.id !== action.payload.id)
      }
    },
    reduceQuantity: (state, action) => {
      const item = state.cartItems.find(cartItem => cartItem.product.id == action.payload.id )
      if(item) item.qty--
      if(item.qty == 0) {
        state.cartItems.filter(cartItem => cartItem.product.id !== action.payload.id)
      }
    },
    deleteCartItem: (state, action) => {
      const index = state.cartItems.findIndex(cartItem => cartItem.product.id == action.payload.id )
         let newCart = [...state.cartItems];
      if (index >= 0) {
        // the item exists in the Cart and remove it
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in `
        );
      }
      state.cartItems = newCart;

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems.push(action.payload);
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.products = action.payload; // Add the fetched product to the products array
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        console.error('Error fetching product by id:', action.error);
      });
  },
});

export const {
  addToCart,
  addQuantity,
  reduceQuantity,
  deleteCartItem,
} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;

export const selectCartItems = (state) => state.cartItems.cartItems;
export const selectProducts= (state) => state.cartItems.products;
// export const selectTotal = (state) =>
  // state.cart.cartItems.reduce((total, cartItem) => total +=  cartItem.qty * cartItem.product.price, 0);
  
  // export const selectTotal = (state) => 2000

  export const selectTotal = (state) => {
    const { cartItems, products } = state.cartItems;
  
    // Calculate the total price
    let updatedProduct = products
    if(products == null) {
      updatedProduct = cartItems
    }
    const totalPrice = cartItems.reduce((total, cartItem) => {
      const product = updatedProduct.find((item) => item.id === cartItem.product_id);
      if (product) {
        total += cartItem.quantity * product.price;
      }
      return total;
    }, 0);
  
    return totalPrice;
  };

  
  // export const selectTotal = (state) => state.cartItems.products.reduce((total, cartItem) => total +=  10, 0);


