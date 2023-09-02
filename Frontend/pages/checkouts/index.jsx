import axios from 'axios';
import Header from '../../components/Header'
import Checkout from '../../components/Checkout'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Loading from '../../components/Loading';
import { getAuthTokenFromCookie, getUserIDFromCookie } from '../../utils/cookie';
import { selectedaddress } from '../../slices/addressSlice';
import { selectCartTotal, selectedCartItems } from '../../slices/cartItemSlice';
import { selectedUser } from '../../slices/userSlice';
import { FetchUser } from '../../slices/userAction';
import { fetchAddress } from '../../slices/addressAction';


function CheckoutPage({user_id}) {
  const router = useRouter()
  const dispatch = useDispatch()
  const address_id = router?.query?.address_id
  const orderTotal = useSelector(selectCartTotal)
  const user = useSelector(selectedUser);
  const cartItems = useSelector(selectedCartItems);
  const order_items = cartItems.map(item => ({
    product_id: item.id,
    quantity: item.cart_quantity,
    unit_price: item.price,
  }));
  const addresses = useSelector(selectedaddress)
  const doorDeliverFee = 5000
  const standardDeliverFee = 1000
  const [deliveryType, setDeliveryType] = useState('standard');
  const [deliverFee, setDeliveryFee] = useState(standardDeliverFee)
  const [selectedAddress, setSelectedAddress] = useState(null)
  useEffect(() => {
    dispatch(FetchUser(user_id));
    dispatch(fetchAddress(user_id))
  }, [dispatch]);  
  const handleDeliveryTypeChange = (event) => {
    const selectedType = event.target.value;
    let fee = standardDeliverFee; // Default delivery fee for 'standard'
    if (selectedType === 'express') {
      fee = doorDeliverFee;
    }
    setDeliveryFee(fee);
    setDeliveryType(selectedType);
  };
  useEffect(() => {
    if (address_id) {
      const chosenAddress = addresses.filter((address) => address.id == address_id)
      setSelectedAddress(chosenAddress);
    }else {
      setSelectedAddress(null)
    }
  }, [address_id, addresses])

  

  const config = {
    public_key: 'FLWPUBK_TEST-de97bc6fec65ed6b94df1dfb3d44ee1d-X',
    tx_ref: Date.now(),
    amount: orderTotal + deliverFee,
    currency: 'NGN',
    payment_options: 'card,mobilemoney',
    customer: {
      email: user?.email,
       phone_number: user?.phone_number_1,
      name: user?.first_name + ' ' + user?.last_name,
    },
    customizations: {
      title: 'Aerosmart',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const [orderDetails, setOrderDetails] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    country: 'Nigeria',
    postalCode: '',
    state: '',
  })

  const handleAddOrders = async () => {
    if (user_id == null) {
      return;
    }
    try {
      const response = await axios.post('/api/addOrder', {
        first_name: selectedAddress[0]?.first_name,
        last_name: selectedAddress[0]?.last_name,
        phone_number_1: selectedAddress[0]?.phone_number_1,
        phone_number_2: selectedAddress[0]?.phone_number_2,
        shipping_address_1: selectedAddress[0]?.address_line_1,
        shipping_address_2: selectedAddress[0]?.address_line_2,
        order_completed: true,
        product_delivered: false,
        total: Number(orderTotal + deliverFee),
        order_items: order_items,
        user_id: Number(user_id),
      });
  
      console.log('Order added successfully:', response.data);
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

const handleFlutterPaymentWithOrders = async () => {
  try {
     handleFlutterPayment({
      callback: async (response) => {
        router.replace('/account/orders');
        closePaymentModal(); // this will close the modal programmatically
        // Call handleAddOrders after successful payment
        if (user_id != null) {
          try {
            const response = await axios.post('/api/addOrder', {
              first_name: selectedAddress[0]?.first_name,
              last_name:  selectedAddress[0]?.last_name,
              phone_number_1:  selectedAddress[0]?.phone_number_1,
              phone_number_2:  selectedAddress[0]?.phone_number_2,
              shipping_address_1:  selectedAddress[0]?.address_line_1,
              shipping_address_2:  selectedAddress[0]?.address_line_2,
              order_completed:  true,
              product_delivered: false,     
              total: Number(orderTotal + deliverFee),
              order_items: order_items,
              user_id: Number(user_id),
            });
            const result = response.data;
          } catch (error) {
            console.error(error);
          }
        }
      },
      onClose: () => {},
    });
  } catch (error) {
    console.error('Payment error:', error);
  }
};


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

    if (cartItems.length === 0) {
      return (
 <div>
       <Header />
<h3 className='text-xl text-center pt-10 text-gray-600'>No Orders Made</h3>
 </div>
  )
      }
  return (
    <div className="">
      <Header />
        <div className="mx-auto max-w-5xl font-poppins">
        <div className='px-3'>
        <div className='flex justify-between bg-gray-200 shodow-lg  p-2 text-gray-700 my-4'>
          <div className='capitalize font-bold'>subtotal:</div>
          <div className='flex items-center text-s'><TbCurrencyNaira  className="w-4 h-5"/><p className='font-bold text-xs'>{orderTotal.toLocaleString()}</p></div>
        </div>
        </div>


      <div className='px-3 mb-4'>
        <div className="flex justify-between items-center">
        <h2 className='uppercase text-gray-700 my-2'>1. delivery type</h2>
        </div>
        <div className="bg-white w-full text-xs px-2 py-4 space-y-3">
          <div className="">
          <div className="flex space-x-3 mb-1">
            <input type="radio" name="delivery" value="express"
          className='cursor-pointer' onChange={handleDeliveryTypeChange} />
            <p>Door deliver</p>
          </div>
          <p className='pl-6 flex '>(1 - 2) days delivery Gauranteed  <span className="text-black flex items-center  ">  <TbCurrencyNaira  className="w-3 h-4 ml-2"/><span className='font-changa'> {doorDeliverFee.toLocaleString()}</span></span></p>
          </div>
            <div className="">
          <div className="flex space-x-3 mb-1">
            <input name="delivery" type="radio" value="standard"
          checked={deliveryType === 'standard'}
           className='cursor-pointer' onChange={handleDeliveryTypeChange}  />
            <p>standard delivery</p>
          </div>
          <p className='pl-6 flex'>(3 - 7) Business days estimated <span className="text-black flex items-center  ">  <TbCurrencyNaira  className="w-3 h-4 ml-2"/><span className='font-changa'>{standardDeliverFee.toLocaleString()}</span></span></p>
          </div>
        </div>
      </div>

      <div className='bg-gray-600 w-[98%] h-2 rounded-sm m-auto mb-2c'></div>



      <div className='px-3 mb-4'>
        <div className="flex justify-between items-center">
        <h2 className='uppercase text-gray-700 my-2'>2. delivery address</h2>
        <button className="bg-gray-500 text-white capitalize text-xs py-2 rounded-md cursor-pointer w-[150px] hover:bg-gray-400 transition-all delay-100 ease-in" onClick={() => router.push('/checkouts/addresses')}>
        {selectedAddress == null   ? 'select address' : 'change address'}
        </button>
        </div>
        <div className="bg-white w-full text-xs px-2 py-4 ">
          {selectedAddress == null ?
          <p>No Address Selected</p> 
            : 
          <>
        <p className='capilatize'>{selectedAddress[0]?.first_name} {selectedAddress[0]?.last_name}</p>
        <p className='truncate'>{selectedAddress[0]?.address_line_1} | {selectedAddress[0]?.state} - {selectedAddress[0]?.city} | {selectedAddress[0]?.phone_number_1}</p>
          </>
          }

        </div>
      </div>


       
            {/* complete order */}
            <div className='bg-gray-600 w-[98%] h-2 rounded-sm m-auto'></div>

            <h2 className='uppercase text-gray-700 my-2 px-3'>order summary</h2>
            <div className='my-4 p-2 bg-white text-gray-800'>
              <div className='flex justify-between px-2'>
                <p>Subtotal:</p>
                <p className=' flex items-center'><TbCurrencyNaira  className="w-5 h-5 font-changa"/>{orderTotal.toLocaleString()}</p>
              </div>
              <div className='flex justify-between px-2 '>
                <p className='py-1'>Delivery Fee:</p>
                <p className='py-1 flex items-center font-changa'><TbCurrencyNaira  className="w-5 h-5 "/>{deliverFee.toLocaleString()}</p>
              </div>
                <div className='flex justify-between bg-gray-400 p-2 text-black'>
                      <p className='uppercase '>
                        order total
                      </p>
                        <p className=' flex items-center font-changa'>
                        <TbCurrencyNaira  className="w-5 h-5 "/>
                          {(orderTotal + deliverFee).toLocaleString()}
                        </p>
                </div>
                <div className='my-4 px-2'>
                  <div className='flex space-x-4'>
                        <input type="checkbox" className='cursor-pointer'/> 
                        <p className='text-xs'>Email me about new products, deals and discounts.</p>
                  </div>
                  
                  <button className={`capitalize w-[90%] h-[48px] rounded-md text-white bg-yellow-500 block mt-4 m-auto hover:bg-yellow-400 transition-all delay-100 ease-in ${selectedAddress == null  ? 'opacity-50 hover:cursor-not-allowed' : 'popacity-0'}`}  
                  onClick={handleFlutterPaymentWithOrders}
        // onClick={() => router.push('/orders')}
        >Pay Now</button>
                
                </div>
            </div >
            </div>
      <Footer/>
    </div>
  )
}

export default CheckoutPage


export const getServerSideProps = async (context) => {
  const user_id = getUserIDFromCookie(context.req);
  const authToken = getAuthTokenFromCookie(context.req);
    return {
      props: {
        authToken,
        user_id,
      },
    };
  } 