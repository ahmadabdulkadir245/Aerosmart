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
      <h2 className='uppercase text-gray-700 pb-2 px-3 py-4'>
                1. review your order ({orderItems.length} {orderItems.length < 2 ? 'item' : 'items'})
            </h2>
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
        <div className='px-3'>
        <div className='flex justify-between bg-gray-200 shodow-lg  p-2 text-gray-700 my-4'>
          <div className='capitalize font-bold'>subtotal:</div>
          <div className='flex items-center text-s'><TbCurrencyNaira  className="w-4 h-5"/><p className='font-bold text-xs'>{orderTotal.toLocaleString()}</p></div>
        </div>
        </div>

            <div className='bg-gray-600 w-[98%] h-2 rounded-sm m-auto'></div>

      <div className='px-3'>
        <h2 className='uppercase text-gray-700 my-2'>2. delivery address</h2>
        <p className='text-xs capitalize'>all fields required</p>

        <form className='my-3'>

        <input
              type='text'
              className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
              placeholder='Email '
              required
              // onChange={passwordInputHandler}
            />
        <input
              type='text'
              className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
              placeholder='First Name'
              required
              // onChange={passwordInputHandler}
            />
        <input
              type='text'
              className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
              placeholder='Last Name '
              required
              // onChange={passwordInputHandler}
            />
              
             <input
                type='number'
                className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
                placeholder='Phone Number e.g 081 '
                required
                // onChange={passwordInputHandler}
              />
             <input
                type='text'
                className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
                placeholder='Devivery address '
                required
                // onChange={passwordInputHandler}
              />

          <select className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5 text-gray-500'>
            <option>select state</option>
            <option>Abuja</option>
            <option>Ibadan</option>
            <option>Kaduna</option>
            <option>Katsina</option>
            <option>Port Harcourt</option>
            <option>Lagos</option>
          </select>

        <input
              type='text'
              className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
              placeholder='Postcode  / Zip Code. optional '
              required
              // onChange={passwordInputHandler}
            />

<select className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5 text-gray-700'>
            <option>Nigeria</option>
          </select>
            
        </form>
        
      </div>


            {/* Pament section */}
            <div className='bg-gray-600 w-[98%] h-2 rounded-sm m-auto'></div>
            <h2 className='uppercase text-gray-700 pb-2 px-3 py-4'>
                3. pament 
            </h2>
            

            <div className='px-3'>
            <input
                type='number'
                className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-full  m-auto flex my-5 lg:my-5'
                placeholder='0000 0000 0000 0000'
                required
                // onChange={passwordInputHandler}
              />
 <div className="flex justify-between my-5">
 <input
                type='number'
                className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-[50%]  flex  lg:my-2'
                placeholder='MM/YY'
                required
                // onChange={passwordInputHandler}
              />
   <input
                type='text'
                className='border-[1px] lg:border-[1px] rounded-lg md:rounded-full  border-gray-500 outline-none px-4 py-[16px] w-[40%]  flex  lg:my-2'
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
                  
                  <button className="capitalize w-[90%] h-[48px] rounded-md text-white bg-yellow-500 block mt-4 m-auto">Pay Now</button>

                </div>
            </div >
            


      <Footer/>
    </div>
  )
}

export default CheckoutPage