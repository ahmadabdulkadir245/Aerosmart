import { useSelector } from "react-redux";
import NoOrders from "./NoOrders"
import {  useState } from "react"
import { selectCartTotal, selectedCartItems } from "../slices/cartItemSlice";
import OrdersCard from "./OrdersCard";

function AccountOrders() {
    const [placeOrders, setPageOrder] = useState(true)
    const orderTotal = useSelector(selectCartTotal)
  const orderItems = useSelector(selectedCartItems);
  return (
<div className='col-span-3'>
    <div className="bg-white lg-p-3">
<div className="flex space-x-6 items-center mb-2">
            <div className=" cursor-pointer  transition-all delay-100 ease-in" onClick={() => setPageOrder(true)}>
            <h2 className={`uppercase mb-2 ${placeOrders ? 'text-yellow-400' : 'text-gray-500'} hover:text-yellow-400 mt-2`}>place orders (0)</h2>
            <hr className={`${placeOrders ? 'bg-yellow-400 ' : 'bg-transparen'}w-full h-1 -mb-4 transition-all delay-100 ease-in` } /> 
            </div>
            <div className=" cursor-pointer  transition-all delay-100 ease-in"  onClick={() => setPageOrder(false)}>
            <h2 className={`uppercase mb-2 ${!placeOrders ? 'text-yellow-400' : 'text-gray-500'} hover:text-yellow-400 my-2`}>completed ({orderItems.length >= 1 ? 1 : 0})</h2>
            <hr className={`${!placeOrders ? 'bg-yellow-400 ' : 'bg-transparen'}w-full h-1 -mb-3 transition-all delay-100 ease-in`} />  
            </div>

        </div>
            <hr className="bg-gray-300 w-full h-[1px]" />
           <div className="flex justify-between bg-white">
              <div className="py-4  font-poppins rounded-md w-full ">
                {orderItems.length < 1 || placeOrders == true ? 
                <NoOrders/>
                :
                <OrdersCard total={orderTotal} orders={orderItems} />
              }
                </div>

           </div>
    </div>
    </div>

  )
}

export default AccountOrders