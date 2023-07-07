import axios from 'axios';
import { useRouter } from "next/router";
import {createContext, useEffect, useState } from 'react'
import jwt from 'jsonwebtoken';

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const router = useRouter()

    const [user_id, setUser_id] = useState(null)
    const [authToken, setAuthToken] = useState(null)

    const login = async (inputs, setInputs, setError, setLoading) => {
      try{
        const graphqlQuery = {
            query: `
            query Login($email: String!, $password: String!)  {
                login(email: $email, password: $password) {
                    token
                    user_id
              }
            }
            `,
            variables: {
              email: (inputs.email).toString(),
              password: inputs.password,
            }
          };
        const res = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery)
        router.push('/')
        // router.back()
        setLoading(false)
        setInputs({
          email: '',
          password: '',
        })
        setUser_id(res.data.data.login.user_id)
        setAuthToken(res.data.data.login.token)
        localStorage.setItem('token', res.data.data.login.token);
        localStorage.setItem('user_id', res.data.data.login.user_id);
       }catch(err) {
        setLoading(false)
         setError(err.response.data.errors[0].message)
         setTimeout(() => {
           setError(null)
        }, 5000)
        }
    }

    const logout = async () => {
    //  await axios.post(process.env.NEXT_PUBLIC_LOGOUT_URL)
    localStorage.clear()
    setAuthToken(null)
    setUser_id(null)
      return 
    }

    useEffect(() => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        const decodedToken = jwt.decode(storedToken);
        if (decodedToken.exp < Date.now() / 1000) {
          // Token has expired
          localStorage.clear()
          setAuthToken(null);
        } else {
          // Token is still valid
          setAuthToken(storedToken);
          setUser_id(localStorage.getItem('user_id'))
          setAuthToken(localStorage.getItem('token'))
        }
      }
    }, [ authToken, user_id])
    
    return  (
    <AuthContext.Provider value={{login, logout, authToken, user_id}}>{children}
    </AuthContext.Provider>)
}

