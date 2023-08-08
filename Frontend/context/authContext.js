import axios from 'axios';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();

  const [user_id, setUser_id] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const setCookie = (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/; HttpOnly; SameSite=Strict`;
  };

  const login = async (inputs, setInputs, setError, setLoading) => {
    try {
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
          email: inputs.email.toString(),
          password: inputs.password,
        },
      };
      const res = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
      setLoading(false);
      setInputs({
        email: '',
        password: '',
      });
      const previousRoute = router.query.from;
      if (previousRoute === 'signup') {
        // Redirect the user to the home page using router.replace()
        router.replace('/home');
      } else {
        // Go back to the previous page
        router.back();
      }

      const { token, user_id } = res.data.data.login;
      setUser_id(user_id);
      setAuthToken(token);

      // Save user_id and authToken as HttpOnly cookies with an expiration time of 5 hours
         // Save user_id and authToken as cookies with an expiration time of 5 hours
         Cookies.set('user_id', user_id, { expires: 24, path: '/', sameSite: 'strict' });
         Cookies.set('authToken', token, { expires: 24, path: '/', sameSite: 'strict' });
    } catch (err) {
      setLoading(false);
      setError(err.response.data.errors[0].message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const logout = async () => {
    //  await axios.post(process.env.NEXT_PUBLIC_LOGOUT_URL)
    document.cookie = 'user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict';
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict';
    setAuthToken(null);
    setUser_id(null);
  };

  useEffect(() => {
    const cookieString = document.cookie;
    if (!cookieString) {
      // If no cookies are set, there's nothing to do
      return;
    }
  
    const storedToken = cookieString
      .split('; ')
      .find((row) => row.startsWith('authToken='));
    
    if (storedToken) {
      const authToken = storedToken.split('=')[1];
      const decodedToken = jwt.decode(authToken);
  
      if (decodedToken.exp < Date.now() / 1000) {
        // Token has expired
        logout();
      } else {
        // Token is still valid
        setAuthToken(authToken);
  
        const storedUserId = cookieString
          .split('; ')
          .find((row) => row.startsWith('user_id='));
        
        if (storedUserId) {
          const user_id = storedUserId.split('=')[1];
          setUser_id(user_id);
        }
      }
    }
  }, []);
  

  return (
    <AuthContext.Provider value={{ login, logout, authToken, user_id }}>
      {children}
    </AuthContext.Provider>
  );
};
