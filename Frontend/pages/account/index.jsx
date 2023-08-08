import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiHeart, BiMap, BiStore } from 'react-icons/bi';
import { CiUser } from 'react-icons/ci';
import { useRouter } from 'next/router';
import AccountOptionsCard from '../../components/AccountOptionsCard';
import AccountDetails from '../../components/AccountDetails';
import AccountAddressForm from '../../components/AccountAddressSection';
import AccountOrders from '../../components/AccountOrders';
import SavedProducts from '../../components/SavedProducts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductSlider from '../../components/ProductSlider';
import { getAuthTokenFromCookie, getUserIDFromCookie } from '../../utils/cookie';
import Loading from '../../components/Loading';
import { selectedUser } from '../../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FetchUser } from '../../slices/userAction';
import { fetchProducts } from '../../slices/productsAction';
import { selectedProducts } from '../../slices/productsSlice';

function Account({ user_id}) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const user = useSelector(selectedUser);
  const products = useSelector(selectedProducts);
  const [selected, setSelected] = useState('account')
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [loading])

  useEffect(() => {
    if (!user_id) {
      dispatch(fetchProducts());
      return
    }
    dispatch(FetchUser(user_id));
    dispatch(fetchProducts());
  }, [dispatch]);  
  
  if (loading) {
    return<>
    <Header/>
    <Loading />
    </> 
  }

  return (
        <>
        <Header />
          <div className="bg-white  my- rounded-md mx-2 shadow-sm lg:hidden">
            <div className="flex items-center space-x-5 p-4 uppercase">
              <div className="rounded-full p-2 bg-gray-200">
                    <CiUser className='text-gray-600 h-10 w-10'/>
              </div>
                    <p className=" font-poppins">{user?.first_name ?  user?.first_name + ' ' + user?.last_name : 'user name'}</p>
            </div>
            <div className=" p-4 flex items-center justify-between capitalize">
                   <div className="hover:text-gray-400 text-gray-600" onClick={() => router.push('/account/orders')}>
                      <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
                    <BiStore className='h-5 w-5'/>
                    </div>
                    <p className=" font-poppins text-xs mt-1">orders</p>
                  </div>
                   <div className="hover:text-gray-400 text-gray-600" onClick={() => router.push('/account/wishlist')}>
                      <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
                    <BiHeart className=' h-5 w-5'/>
                    </div>
                    <p className=" font-poppins text-xs mt-1">saved products</p>
                  </div>
                   <div className="hover:text-gray-400 text-gray-600" onClick={() => router.push('/account/address')}>
                      <div className="rounded-full p-2 bg-gray-200 w-9 mx-auto">
                    <BiMap className=' h-5 w-5'/>
                    </div>
                    <p className=" font-poppins text-xs mt-1">address section</p>
                  </div>
            </div>
          </div>
        <div className=" px-3 py-4 text-gray-500 lg:py-0 lg:my-10 lg:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
            <AccountOptionsCard selected={selected} setSelected={setSelected} />
            <AccountDetails user_id={user_id} user={user} setLoading={setLoading} />
        
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
  const user_id = getUserIDFromCookie(context.req);
  const authToken = getAuthTokenFromCookie(context.req);
    return {
      props: {
        authToken,
        user_id,
      },
    };
};
