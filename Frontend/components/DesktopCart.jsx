import Image from 'next/legacy/image'
import React, { useContext } from 'react'
import { useDispatch } from "react-redux";
import { minusFromCart, addToCart, removeFromCart } from "../slices/cartSlice";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TbCurrencyNaira } from 'react-icons/tb';
import axios from 'axios';
import {  removeProductFromCart, updateProductQuantity } from '../slices/cartAction';
function DesktopCart({ id, title, productQty, price, description, image_url, user_id, authToken, cart_id }) {
    const dispatch = useDispatch();

  const handleRemoveFromCart = async () => {
    if (!id) return;
    if(user_id == null) {
      dispatch(removeProductFromCart({ id: id })); 
      return
    }
    dispatch(removeProductFromCart({ id: id })); // Assuming `id` represents cart_item_id
    try {
      const response = await axios.post('/api/deleteFromCart', {
        user_id: Number(user_id),
        product_id: Number(id),
      });
  
      if (response.data.success) {
        // Remove the item from Redux after successful deletion from the server
        console.log('Item removed from cart successfully');
      } else {
        // Handle failure
        console.error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };  

    const addOneItemToCart = async () => {
      if(user_id == null) {
        dispatch(updateProductQuantity({id: id, cart_quantity: productQty + 1}));
        return
      }
      dispatch(updateProductQuantity({id: id, cart_quantity: productQty + 1}));
      try {
        const response = await axios.post('/api/addToCart', { id: id, user_id: user_id, qauntity: 1 });
        const result = response.data;
      } catch (error) {
        console.error(error);
      }
    };
    const minusOneItemFromCart = async () => {
      if (productQty <= 1) return
      if(user_id == null) {
        dispatch(updateProductQuantity({id: id, cart_quantity: productQty - 1}));
        return
      }
      dispatch(updateProductQuantity({id: id, cart_quantity: productQty - 1}));
      try {
        const response = await axios.post('/api/addToCart', { id: id, user_id: user_id, qauntity: -1 });
        const result = response.data;
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <>
    <div className='flex justify-between  space-x-5 my-5 text-xs px-[12px]'>
        <div className='relative w-[150px] lg:w-[200px] lh-full g:h-[150px] text-gray-600 '>
        <Image src={image_url} alt={title} layout='fill' objectFit="cover" />
        </div>
        <div className='flex-1'>
            <h3 className='text-sm capitalize font-poppins mb-1'>{title}</h3>
            <p className="lowercase leading-4 line-clamp-4 text-xs h-[60px] ">  <p  dangerouslySetInnerHTML={{ __html: description }} 
      /> </p>
            <div className='  font-primary flex items-center space-x-1 text-xs  mt-[6px] text-gray-800 font-semibold'>
            <TbCurrencyNaira  className="w-4 h-4 text-gray-600"/>{(price)?.toLocaleString()}
          </div>
                    <p className='mb-1'>Qauntity</p>
            <div className="flex justify-between items-center">
                <div className='flex space-x-3 items-center'>
                <div className={`flex justify-center items-center p-[6px] px-[10px] bg-yellow-400 transition duration-200 linear rounded-sm ${
            productQty < 2 ? " opacity-50" : "cursor-pointer"
          }`} onClick={minusOneItemFromCart} >
                 <AiOutlineMinus className='text-white' />
                </div>
                <p className='font-changa'>
                {productQty}
                </p>
                <div className='flex justify-center items-center p-[6px] px-[10px] bg-yellow-400 rounded-sm cursor-pointer'  onClick={addOneItemToCart}>
                 <AiOutlinePlus className='text-white' />
                </div>
                </div>

                <div>
                <button className="hidden capitalize px-5 h-[38px] rounded-sm  border-[1px]  bg-transparent  m-auto tracking-wide cursor-pointer hover:bg-red-600 active:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"  onClick={handleRemoveFromCart}>REMOVE
                </button>
                </div>
                <div
          className='flex space-x-3 items-center  bg-red-500  py-2 px-3 text-white rounded-md hover:bg-red-600 cursor-pointer transition duration-200 ease-in'
          onClick={handleRemoveFromCart}
        >
          <AiOutlineDelete className='' /> 
             </div>
            </div>
        </div>

    </div>
        <div className="w-full h-[1px] bg-gray-300 col-span-full"></div>
    </>
  )
}

export default DesktopCart


