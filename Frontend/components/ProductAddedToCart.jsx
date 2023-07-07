import Image from "next/legacy/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { minusFromCart, addToCart, removeFromCart } from "../slices/cartSlice";
import { AiFillStar, AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useState } from "react";

function ProductAddedToCart({ id, title, productQty, description, image }) {
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
    <div  className='grid grid-cols-3 lg:flex  px-3 gap-4 my-5'>
      
      <div className='relative w-full h-[120px] text-gray-600 '>
        <Image src={image} alt={title} layout='fill' objectFit="cover" />
      </div>
      <div className='col-span-2'>
        <p className='truncate uppercase text-sm'>{title}</p>
      <p className="lowercase leading-4 line-clamp-3 text-xs ">  <p  dangerouslySetInnerHTML={{ __html: description }} 
      /> </p>
              <div className="flex-nowrap flex justify-between mt-[19px]">
        <div className=' flex justify-between items-center w-32'>
        <div
          className={`flex justify-center items-center p-[6px] px-[10px] bg-yellow-400 transition duration-200 linear rounded-md ${
            productQty < 2 ? " opacity-50" : ""
          }`}
        >
          <AiOutlineMinus onClick={minusOneItemFromCart} className='text-white' />
        </div>
        <div>{productQty}</div>
        <div className='flex justify-center items-center p-[6px] px-[10px] bg-yellow-500 rounded-md'>
          <AiOutlinePlus onClick={addOneItemToCart} className='text-white' />
        </div>
          </div>

        <div className='flex '>
        <div
          className='flex space-x-3 items-center  bg-red-500  py-2 px-3 text-white rounded-md hover:bg-red-600 cursor-pointer transition duration-200 ease-in'
          onClick={removeItemFromCart}
        >
          <AiOutlineDelete className='' /> 
      </div>
      </div>
      </div>

      </div>

              
    </div>
  );
}

export default ProductAddedToCart;
