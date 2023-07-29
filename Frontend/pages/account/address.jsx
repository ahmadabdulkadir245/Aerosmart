import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AccountOptionsCard from '../../components/AccountOptionsCard';
import AccountAddressSection from '../../components/AccountAddressSection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductSlider from '../../components/ProductSlider';
import { getAuthTokenFromCookie, getUserIDFromCookie } from '../../utils/cookie';
import Loading from '../../components/Loading';

function Orders({products, user_id, authToken}) {
  const [selected, setSelected] = useState('address')
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [loading])
  
  if (loading) {
    return<>
    <Header/>
    <Loading />
    </> 
  }


  return (
        <>
        <Header />

        <div className=" px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            <AccountOptionsCard  selected={'address'} setSelected={setSelected} />
            <AccountAddressSection user_id={user_id} authToken={authToken} setLoading={setLoading} />
        </div>
        <div className="max-w-7xl mx-auto">
      <ProductSlider sectionTitle={'recently viewed'} products={products.slice(3,12)} path={'/'}/>
      <ProductSlider sectionTitle={'top selling'} products={products.slice(0,9).reverse()} path={'/'} discount={true}/>
      </div>
    <Footer />
        </>
  )
}

export default Orders


export const getServerSideProps = async (context) => {
  const page = 1;
  const perPage = 15;
  const user_id = getUserIDFromCookie(context.req);
  const authToken = getAuthTokenFromCookie(context.req);

  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
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
    });

    const products = response.data?.data?.products?.products || [];

    return {
      props: {
        products,
        user_id,
        authToken
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
        user_id: null,
        authToken: null
      },
    };
  }
};

