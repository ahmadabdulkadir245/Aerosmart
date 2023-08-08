import { RecoilRoot } from 'recoil';
import { Provider, useDispatch } from "react-redux"; // Import Provider from react-redux
import { store } from "../redux-store/store";
import Header from '../components/Header'
import '../styles/globals.css'
import Footer from '../components/Footer';
import { AuthContextProvider } from '../context/authContext';
import {  Changa, Play, Poppins, Titillium_Web } from '@next/font/google';
import { fetchCartItems } from '../slices/cartItemsSlice';
import { getAuthTokenFromCookie, getUserIDFromCookie } from '../utils/cookie';
import { useEffect } from 'react';
import { fetchCart } from '../slices/cartAction';


const play = Play({
  variable: '--font-play',
  weight: ['400', '700'],
  subsets: ['latin']
})
const changa = Changa({
  variable: '--font-changa',
  weight: ['400', '500','600'],
  subsets: ['latin']
});
const poppins = Poppins({
  variable: '--font-poppins',
  weight: [ '500','600', '700'],
  subsets: ['latin']
})
const titilliumWeb = Titillium_Web({
  variable: '--font-titillium_web',
  weight: [ '400','600', '700'],
  subsets: ['latin']
})


function MyApp({ Component, pageProps, user_id, authToken }) {
  useEffect(() => {
    if (user_id || authToken) {
      store.dispatch(fetchCart(user_id));
    }
  }, [user_id, authToken]);

  return (
    <main className={`font-primary ${play.variable} ${changa.variable} ${poppins.variable}  ${titilliumWeb.variable}`}>
      <Provider store={store}>
        <RecoilRoot>
          <AuthContextProvider>
              <Component {...pageProps} />
          </AuthContextProvider>
        </RecoilRoot>
      </Provider>
    </main>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const user_id = getUserIDFromCookie({ headers: { cookie: ctx.req.headers.cookie } });
  const authToken = getAuthTokenFromCookie({ headers: { cookie: ctx.req.headers.cookies} });
  return { user_id, authToken };
};

export default MyApp;








