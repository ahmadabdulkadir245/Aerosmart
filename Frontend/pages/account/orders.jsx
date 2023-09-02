import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AccountOptionsCard from '../../components/AccountOptionsCard';
import AccountOrders from '../../components/AccountOrders';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductSlider from '../../components/ProductSlider';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../../slices/productsSlice';
import { fetchProducts } from '../../slices/productsAction';
import { getAuthTokenFromCookie, getUserIDFromCookie } from '../../utils/cookie';
import { fetchUserOrders } from '../../slices/UserOrdersAction';
import { selectedUserOrders } from '../../slices/userOrdersSlice';

function Orders({user_id}) {
  const [selected, setSelected] = useState('orders')
  const router = useRouter()
  const dispatch = useDispatch()
  const products = useSelector(selectedProducts);
  const orders = useSelector(selectedUserOrders)
  console.log(orders)
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUserOrders(user_id));
  }, [dispatch]);
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
        <Header/>
        <div className=" px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            <AccountOptionsCard selected={'orders'} setSelected={setSelected} />
            <AccountOrders orders={orders}/>
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

