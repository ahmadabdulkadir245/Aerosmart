import Image from 'next/legacy/image'
import React from 'react'
import { useDispatch } from "react-redux";
import { minusFromCart, addToCart, removeFromCart } from "../slices/cartSlice";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TbCurrencyNaira } from 'react-icons/tb';

function DesktopCart({ id, title, productQty, price, description, image_url }) {
    const dispatch = useDispatch();
    const minusOneItemFromCart = () => {
      // remove the item from redux
      if (productQty < 2) {
        return;
      }
      dispatch(minusFromCart({ id }));
    };
    const addOneItemToCart = () => {
          dispatch(addToCart({id}))
    }
    const removeItemFromCart = () => {
      dispatch(removeFromCart({id}))
    }
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
            <TbCurrencyNaira  className="w-4 h-4 text-gray-600"/>{(price * productQty).toLocaleString()}
          </div>
                    <p className='mb-1'>Qauntity</p>
            <div className="flex justify-between items-center">
                <div className='flex space-x-3 items-center'>
                <div className={`flex justify-center items-center p-[6px] px-[10px] bg-yellow-400 transition duration-200 linear rounded-sm ${
            productQty < 2 ? " opacity-50" : "cursor-pointer"
          }`} onClick={minusOneItemFromCart} >
                 <AiOutlineMinus className='text-white' />
                </div>
                <p>
                {productQty}
                </p>
                <div className='flex justify-center items-center p-[6px] px-[10px] bg-yellow-400 rounded-sm cursor-pointer'  onClick={addOneItemToCart}>
                 <AiOutlinePlus className='text-white' />
                </div>
                </div>

                <div>
                <button className="hidden capitalize px-5 h-[38px] rounded-sm  border-[1px]  bg-transparent  m-auto tracking-wide cursor-pointer hover:bg-red-600 active:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"  onClick={removeItemFromCart}>REMOVE
                </button>
                </div>
                <div
          className='flex space-x-3 items-center  bg-red-500  py-2 px-3 text-white rounded-md hover:bg-red-600 cursor-pointer transition duration-200 ease-in'
          onClick={removeItemFromCart}
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