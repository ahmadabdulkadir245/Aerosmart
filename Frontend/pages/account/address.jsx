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
import { fetchProducts } from '../../slices/productsAction';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../../slices/productsSlice';

function Orders({user_id, authToken}) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const products = useSelector(selectedProducts);
  const [selected, setSelected] = useState('address')
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
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
  const user_id = getUserIDFromCookie(context.req);
  const authToken = getAuthTokenFromCookie(context.req);
    return {
      props: {
        authToken,
        user_id,
      },
    };
};