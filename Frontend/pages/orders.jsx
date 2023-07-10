import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { TbCurrencyNaira } from 'react-icons/tb'
import OrdersCard from '../components/OrdersCard'

function orders() {
    const imageSlider = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
        <Header/>
    <div className='mx-auto max-w-7xl text-xs my-5 px-3'>
        <h2 className='text-xl font-poppins mb-1'>Your Orders</h2>
        <hr className="bg-yellow-400" />
        <p>4 Orders</p>

            <OrdersCard/>
    </div>
    <Footer/>
    </>
  )
}

export default orders