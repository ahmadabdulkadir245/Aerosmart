import Header from '../components/Header'
import Footer from '../components/Footer'
import OrdersCard from '../components/OrdersCard'
import { useSelector } from 'react-redux';
import { selectOrderTotal, selectedOrderItems } from '../slices/orderSlice';
import { selectCartItems, selectProducts, selectTotal } from '../slices/cartItemsSlice';
import { selectCartTotal, selectedCartItems } from '../slices/cartItemSlice';

function Orders() {
  const orderTotal = useSelector(selectCartTotal)
  const orderItems = useSelector(selectedCartItems);
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