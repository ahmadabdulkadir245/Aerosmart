import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios';
import AccountOptionsCard from '../components/AccountOptionsCard'
import AccountDetails from '../components/AccountDetails'
import ProductSlider from '../components/ProductSlider'
import { useState } from 'react';
import AccountAddressForm from '../components/AccountAddressForm';
import AccountOrders from '../components/AccountOrders';
import SavedProducts from '../components/SavedProducts';

function Account({products}) {
  const [selected, setSelected] = useState('account')
  return (
        <>
        <Header />
        <div className="px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            <AccountOptionsCard selected={selected} setSelected={setSelected} />
            {selected == 'account' &&
            <AccountDetails/>
            }
            {selected == 'address' &&
            <AccountAddressForm/>
            }
            {selected == 'orders' &&
            <AccountOrders/>
            }
            {selected == 'wishlist' &&
            <SavedProducts/>
            }
        </div>
        <div className="max-w-7xl mx-auto">
      <ProductSlider sectionTitle={'recently viewed'} products={products.slice(3,12)} path={'/'}/>
      <ProductSlider sectionTitle={'top selling'} products={products.slice(0,9).reverse()} path={'/'} discount={true}/>
      </div>
    <Footer />
        </>
  )
}

export default Account


export const getServerSideProps = async (context) => {
  const page = 1;
  const perPage = 15;

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
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
};

