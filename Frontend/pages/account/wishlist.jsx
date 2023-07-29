import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiHeart, BiMap, BiStore } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { useRouter } from 'next/router';
import AccountOptionsCard from '../../components/AccountOptionsCard';
import SavedProducts from '../../components/SavedProducts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductSlider from '../../components/ProductSlider';
import { getUserIDFromCookie } from '../../utils/cookie';
import { waitForAllSettled } from 'recoil';
import Loading from '../../components/Loading';

function Orders({products, user_id}) {
  const [selected, setSelected] = useState('account')
  const router = useRouter()
  const [wishlists, setWishlists] = useState([])
  const [loading, setLoading] = useState(true)
  const [placeOrders, setPageOrder] = useState(true)

  useEffect(() =>{
    setTimeout(() =>setLoading(false),400)
 }, [loading])
  useEffect(() => {
    if(!user_id ) {
      return
    }
    const fetchWishlist= async () => {
      try {

        const graphqlQuery = {
          query: `
            query FetchWishlists($user_id: Int!) {
              wishlists(user_id: $user_id) {
                wishlists {
                  id
                  user_id
                  product_id
                }
              }
            }
          `,
          variables: {
            user_id: Number(user_id)
          },
        };

        const response = await axios.post(
          process.env.NEXT_PUBLIC_GRAPHQL_URL,
          graphqlQuery
        );
        const result = await response.data;
        // Assuming the response.data has the format { data: { addresses: { addresses: [] } } }
        setWishlists(result.data.wishlists.wishlists);
        // setDefaultAddress(result.)
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        // setLoading(false);
      }
    };
    fetchWishlist();
  }, [user_id]);

  function getMatchingProducts(wishlists, products) {
    const matchingProducts = [];
    
    for (const wishlist of wishlists) {
      const foundProduct = products.find(product => product.id === wishlist.product_id);
      if (foundProduct) {
        const matchedProduct = { ...foundProduct, wishlist_id: wishlist.id };
        matchingProducts.push(matchedProduct);
      }
    }
    return matchingProducts;
  }
  
  const matchingProducts = getMatchingProducts(wishlists, products) || []

console.log(matchingProducts);
  

if(loading) {
  return (
    <>
    <Header/>
    <Loading/>
    </>
  )
 }
  return (
        <>
        <Header />

        <div className=" px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            <AccountOptionsCard  selected={'wishlist'} setSelected={setSelected} />
            <div className="flex space-x-6 items-center mb-2">
            <div className=" cursor-pointer  transition-all delay-100 ease-in" onClick={() => setPageOrder(true)}>
            <h2 className={`uppercase mb-2 ${placeOrders ? 'text-yellow-400' : 'text-gray-500'} hover:text-yellow-400 `}>all products ({matchingProducts.length})</h2>
            <hr className={`${placeOrders ? 'bg-yellow-400 ' : 'bg-transparen'}w-full h-1 -mb-3 transition-all delay-100 ease-in` } /> 
            </div>
           

        </div>
            <hr className="bg-gray-300 w-full h-[1px]" />
            {matchingProducts.map(({id, title, category, price, description, image_url, wishlist_id}) => (
            <SavedProducts 
            id={id}
            key={wishlist_id}
            title={title}
            category={category}
            description={description}
            price={price}
            image_url={image_url}
            user_id={user_id}
             />
            ))}
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
        user_id,
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

