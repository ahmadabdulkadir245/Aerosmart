import Header from '../components/Header'
import Checkout from '../components/Checkout'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectedOrderItems, selectOrderTotal } from '../slices/orderSlice';
import { TbCurrencyNaira } from 'react-icons/tb';

function CheckoutPage() {
  const router = useRouter()
  const orderItems = useSelector(selectedOrderItems);
  const orderTotal = useSelector(selectOrderTotal)

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
    {  if (orderItems.length === 0) {
      return (
 <div>
       <Header />
<h3 className='text-xl text-center pt-10 text-gray-600'>No Orders Made</h3>
 </div>
  )
      }}
  return (
    <div className="">
      <Header />
        <div className="mx-auto max-w-5xl">
      <h2 className='uppercase text-gray-700 pb-2 px-3 py-4'>
                1. review your order ({orderItems.length} {orderItems.length < 2 ? 'item' : 'items'})
            </h2>
            <div className="max-h-[360px] overflow-y-scroll scrollbar-hide">
            {orderItems.map(
              ({ product, qty}) => (
            <Checkout
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              productQty={qty}
              image_url={product.image_url}
              />
              )
              )}
              </div>
        <div className='px-3'>
        <div className='flex justify-between bg-gray-200 shodow-lg  p-2 text-gray-700 my-4'>
          <div className='capitalize font-bold'>subtotal:</div>
          <div className='flex items-center text-s'><TbCurrencyNaira  className="w-4 h-5"/><p className='font-bold text-xs'>{orderTotal.toLocaleString()}</p></div>
        </div>
        </div>

            <div className='bg-gray-600 w-[98%] h-2 rounded-sm m-auto'></div>

      <div className='px-3 mb-4'>
        <div className="flex justify-between items-center">
        <h2 className='uppercase text-gray-700 my-2'>2. delivery type</h2>
        </div>
        <div className="bg-white w-full text-xs px-2 py-4 space-y-3">
          <div className="">
          <div className="flex space-x-3 mb-1">
            <input type="radio" name="delivery" className='cursor-pointer' />
            <p>Door deliver</p>
          </div>
          <p className='pl-6'>(1 - 2) days delivery Gauranteed</p>
          </div>
            <div className="">
          <div className="flex space-x-3 mb-1">
            <input type="radio" name="delivery" className='cursor-pointer' />
            <p>standard delivery</p>
          </div>
          <p className='pl-6'>(3 - 7) Business days estimated</p>
          </div>
        </div>
      </div>


      <div className='px-3 mb-4'>
        <div className="flex justify-between items-center">
        <h2 className='uppercase text-gray-700 my-2'>2. delivery address</h2>
        <button className="bg-gray-500 text-white capitalize text-xs py-2 rounded-md cursor-pointer w-[150px] hover:bg-gray-400 transition-all delay-100 ease-in ">
          select address
        </button>
        </div>
        <div className="bg-white w-full text-xs px-2 py-4">
          <p>Address not selected</p>
        </div>
      </div>


            {/* Pament section */}
            <div className='bg-gray-600 w-[98%] h-2 rounded-sm m-auto'></div>
            <h2 className='uppercase text-gray-700 pb-2 px-3 py-4'>
                4. pamentemt
            </h2>
            

            <div className='px-3'>
            <input
                type='number'
                className='border-[1px] lg:border-[1px] rounded-lg   border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
                placeholder='0000 0000 0000 0000'
                required
                // onChange={passwordInputHandler}
              />
 <div className="flex justify-between my-5">
 <input
                type='number'
                className='border-[1px] lg:border-[1px] rounded-lg   border-gray-500 outline-none px-4 py-[16px] w-[50%]  flex  lg:my-2'
                placeholder='MM/YY'
                required
                // onChange={passwordInputHandler}
              />
   <input
                type='text'
                className='border-[1px] lg:border-[1px] rounded-lg   border-gray-500 outline-none px-4 py-[16px] w-[40%]  flex  lg:my-2'
                placeholder='CVV '
                required
                // onChange={passwordInputHandler}
              />      
              </div>
            </div>

            {/* complete order */}
            <div className='bg-gray-600 w-[98%] h-2 rounded-sm m-auto'></div>

            <h2 className='uppercase text-gray-700 my-2 px-3'>order summary</h2>
            <div className='my-4 p-2 bg-white text-gray-800'>
              <div className='flex justify-between px-2'>
                <p>Subtotal:</p>
                <p className=' flex items-center'><TbCurrencyNaira  className="w-5 h-5 "/>{orderTotal.toLocaleString()}</p>
              </div>
              <div className='flex justify-between px-2 '>
                <p className='py-1'>Delivery Fee:</p>
                <p className='py-1 flex items-center'><TbCurrencyNaira  className="w-5 h-5 "/>{(1000).toLocaleString()}</p>
              </div>
                <div className='flex justify-between bg-gray-400 p-2 text-black'>
                      <p className='uppercase '>
                        order total
                      </p>
                        <p className=' flex items-center'>
                        <TbCurrencyNaira  className="w-5 h-5 "/>
                          {(orderTotal + 1000).toLocaleString()}
                        </p>
                </div>
                <div className='my-4 px-2'>
                  <div className='flex space-x-4'>
                        <input type="checkbox"/> 
                        <p className='text-xs'>Email me about new products, deals and discounts.</p>
                  </div>
                  
                  <button className="capitalize w-[90%] h-[48px] rounded-md text-white bg-yellow-500 block mt-4 m-auto hover:bg-yellow-400 transition-all delay-100 ease-in" onClick={() => router.push(`/orders`)}>Pay Now</button>

                </div>
            </div >
            </div>
      <Footer/>
    </div>
  )
}

export default CheckoutPage