import Header from '../components/Header'
import Footer from '../components/Footer'
import OrdersCard from '../components/OrdersCard'
import { useSelector } from 'react-redux';
import { selectOrderTotal, selectedOrderItems } from '../slices/orderSlice';
import { selectCartItems, selectProducts, selectTotal } from '../slices/cartItemsSlice';

function Orders() {
  const orderTotal = useSelector(selectTotal)
  const orderItems = useSelector(selectProducts);
    const imageSlider = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
        <Header/>
    <div className='mx-auto max-w-7xl text-xs my-5 px-3'>
        <h2 className='text-xl font-poppins mb-1'>Your Orders</h2>
        <hr className="bg-yellow-400" />
        <p>4 Orders</p>
            <OrdersCard total={orderTotal} orders={orderItems}/>
    </div>
    <Footer/>
    </>
  )
}

export default Orders