import Image from "next/legacy/image"
import NoOrders from "./NoOrders"
import {  useState } from "react"
import { TbCurrencyNaira } from "react-icons/tb"
import { AiOutlineDelete } from "react-icons/ai"
import { TiTimes, TiTimesOutline } from "react-icons/ti"
import { CiShoppingCart } from "react-icons/ci"

function SavedProducts() {
    const [placeOrders, setPageOrder] = useState(true)
   const price = 4500
   const wishlist = [1,2,3,4,5,6]
  return (
<div className='col-span-3 bg-white'>
    <div className="py-5 lg:px-8 rounded-md">
<div className="flex space-x-6 items-center mb-2">
            <div className=" cursor-pointer  transition-all delay-100 ease-in" onClick={() => setPageOrder(true)}>
            <h2 className={`uppercase mb-2 ${placeOrders ? 'text-yellow-400' : 'text-gray-500'} hover:text-yellow-400 `}>all products ({wishlist.length})</h2>
            <hr className={`${placeOrders ? 'bg-yellow-400 ' : 'bg-transparen'}w-full h-1 -mb-3 transition-all delay-100 ease-in` } /> 
            </div>
           

        </div>
            <hr className="bg-gray-300 w-full h-[1px]" />

           <div className="grid grid-cols-4 gap-4 gap-x-6 font-poppins mt-6">
                {wishlist.map(product => (
                   <>
              <div className="relative col-span-2 lg:col-span-1   rounded-sm w-full h-[120px] mx-auto overflow-hidden cursor-pointer">
             <Image src={'https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt={'saved products'}  layout="fill" objectFit="cover"/>
                </div>
                <div className="col-span-2 cursor-pointer">
                  <h2 className="uppercase text-xs">product title will go here</h2>
                  <p className="text-xs capitalize text-gray-400 mt-1 hidden lg:block ">Brand : product brand</p>
                  <p className="text-xs capitalize text-gray-400 mt-1 hidden lg:block">category :  product category</p>
                  <div className='  flex items-center space-x-1  mt-[3px] text-gray-800'>
            <TbCurrencyNaira  className="w-5 h-5 text-gray-600"/>{price.toLocaleString()}
            <div className="flex">
            </div>
          </div>
                           <div className="lg:hidden flex justify-between items-center space-x-3 mt-1">
                <div className="capitalize p-2 rounded-md w-1/2   bg-yellow-500 text-white cursor-pointer space-x-3 hover:bg-yellow-500 hover:border-white hover:text-white transition-all delay-100 ease-in">
                        <CiShoppingCart className="w-6 h-6 mx-auto"/>
                      </div>
                <div className="capitalize p-2 rounded-md w-1/2   bg-red-500 text-white cursor-pointer space-x-3 hover:bg-yellow-500 hover:border-white hover:text-white transition-all delay-100 ease-in">
                        <TiTimesOutline className="w-6 h-6 mx-auto"/>
                      </div>
  </div>
                </div>
                <div className="hidden lg:col-span-1 text-xs  lg:block">
                <button className="mt-4 w-full bg-yellow-400 text-white  p-3 rounded-md capitalize hover:bg-yellow-500 transition-all delay-100 tracking-wide "
                 onClick={() => router.push('/login')}>
                add to cart
              </button>
              <button className="mt-2 w-full bg-red-500 text-white  p-3 rounded-md capitalize hover:bg-red-400 transition-all delay-100 tracking-wide "
                 onClick={() => router.push('/login')}>
                delete
              </button>
                </div>
              <hr className="bg-gray-300 w-full h-[1px] col-span-4" />
                </>
                ))}
           </div>
    </div>
    </div>

  )
}

export default SavedProducts