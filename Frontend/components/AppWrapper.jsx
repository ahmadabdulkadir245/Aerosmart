// AppWrapper.js

import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems,fetchProductById, selectCartItems } from '../slices/cartItemsSlice';
import { AuthContext } from '../context/authContext';


const AppWrapper = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const {user_id} = useContext(AuthContext)
  const cartItemsTest = useSelector(selectCartItems); 
  const ids =cartItemsTest.map(product => { 
    return product.product_id
  })

  // Fetch cart items and products on initial load
  useEffect(() => {
    // Replace 'your_user_id' with the actual user_id or fetch it from your authentication logic
    // dispatch(fetchCartItemsAndProducts(user_id));
    dispatch(fetchCartItems(user_id));
    dispatch(fetchProductById(ids));
  }, [dispatch]);

  return <Component {...pageProps} />;
};

export default AppWrapper;

