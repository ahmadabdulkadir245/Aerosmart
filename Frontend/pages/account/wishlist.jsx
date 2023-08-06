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
import { getAuthTokenFromCookie, getUserIDFromCookie } from '../../utils/cookie';
import { waitForAllSettled } from 'recoil';
import Loading from '../../components/Loading';
import { FetchWishlist } from '../../slices/wishlistAction';
import { useDispatch, useSelector } from 'react-redux';
import { selectedWishlistItems } from '../../slices/wishlistSlice';
import { fetchProducts } from '../../slices/productsAction';
import { selectedProducts } from '../../slices/productsSlice';

function Wishlist({user_id}) {
  const [selected, setSelected] = useState('account')
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const wishilsts = useSelector(selectedWishlistItems)
  const products = useSelector(selectedProducts);

  useEffect(() => {
    if(user_id == null) {
      dispatch(fetchProducts());
      return
    };
      dispatch(FetchWishlist(user_id))
      dispatch(fetchProducts());
  }, [dispatch])
  useEffect(() =>{
    setTimeout(() =>setLoading(false),400)
 }, [loading])
  
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

        
            <SavedProducts 
            user_id={user_id}
            setLoading={setLoading}
            products={wishilsts}
             />

        </div>
        <div className="max-w-7xl mx-auto">
      <ProductSlider sectionTitle={'recently viewed'} products={products.slice(3,12)} path={'/'}/>
      <ProductSlider sectionTitle={'top selling'} products={products.slice(0,9).reverse()} path={'/'} discount={true}/>
      </div>
    <Footer />
        </>
  )
}

export default Wishlist

export const getServerSideProps = async (context) => {
  const user_id = getUserIDFromCookie(context.req);
  const authToken = getAuthTokenFromCookie(context.req);
    return {
      props: {
        authToken,
        user_id,
      },
    };
};
