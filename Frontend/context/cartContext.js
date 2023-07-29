import axios from 'axios';
import { useRouter } from "next/router";
import {createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  
    const addProductToCart = async (user_id, product_id, quantity) => {
            let graphqlQuery = {
           query: `
           mutation AddToCart($user_id: Int, $quantity: Int, $product_id: Int) {
             addToCart(cartInput: {user_id: $user_id, product_id: $product_id, quantity: $quantity}) {
               user_id
               product_id
               quantity
             }
           }
         `,
           variables: {
            user_id: user_id,
            product_id: product_id,
            quantity: quantity
           }
         };
  
  
         fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(graphqlQuery)
        })
          .then(res => {  
            // console.log(res.json())
            return res.json();
          })

        }
    return  (
    <CartContext.Provider value={{addProductToCart}}>{children}
    </CartContext.Provider>)
}

