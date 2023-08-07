import axios from "axios";
import { useState, useEffect } from "react"
import { BiMap,  BiUser } from "react-icons/bi"
import { fetchAddress, removeUserAddress, setDefaultAddress } from "../slices/addressAction";
import { useDispatch, useSelector } from "react-redux";
import { selectDefaultAddress, selectedaddress } from "../slices/addressSlice";

function Addresses({user_id, setLoading}) {
  const dispatch = useDispatch()
  const defaultAddress = useSelector(selectDefaultAddress)
  const addresses = useSelector(selectedaddress)
  useEffect(() => {
      dispatch(fetchAddress(user_id))
  }, [dispatch])

  const handleSetDefaultAddress = async (address_id) => {
    if(user_id == null) return
    dispatch(setDefaultAddress(address_id));
    try {
      const response = await axios.post('/api/setDefaultAddress', { address_id: address_id, user_id: user_id });
      const result = response.data;
      } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAddress= async (address_id) => {
    if (!address_id) return;
    dispatch(removeUserAddress({ id: address_id })); // Assuming `id` represents cart_item_id
    try {
      setLoading(true);
      const response = await axios.post('/api/deleteAddress', {
        user_id: Number(user_id),
        address_id: Number(address_id),
      });
      if (response.data.success) {
      } else {
        console.error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };  

  return (
    <div className="grid lg:grid-cols-3 gap-2 lg:gap-8">
      {addresses.map(address => (
              <div key={address?.id} className="col-span-1 mb-2" onClick={handleSetDefaultAddress.bind(this, address.id)}>
                <div className="border-2 border-b-0 rounded-md rounded-b-none border-green-300 px-2 py-3 mt-4 text-xs space-y-2 cursor-pointer hover:border-green-300 transition-all delay-100 ease-in">
                  <div className="capitalize flex space-x-1  items-center"><BiUser /> <p>{address?.first_name} {address?.last_name}</p></div>
                  <div className="capitalize flex space-x-1  items-center"><BiMap /> <p>{address?.phone_number_1}</p></div>
                  <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]"/> <p>{address?.address_line_1}</p>
                  </div>
                  <p className={`${address?.is_default == true || defaultAddress == address.id ? 'block' : 'hidden'} text-green-400 capitalize`}>
                    defualt address
                  </p>
                </div>
                <div className="flex justify-between border-2 border-green-300 -mt-1">
                      <p className="text-center w-full uppercase cursor-pointer bg-gray-500 text-white p-2 text-xs hover:bg-gray-400 transition-all delay-100 ease-in rounded-sm">edit</p>
                      <p className="text-center w-full uppercase cursor-pointer bg-red-600 text-white p-2 text-xs hover:bg-red-400 transition-all delay-100 ease-in rounded-sm" onClick={handleDeleteAddress.bind(this, address.id)}>delete</p>
                </div> 
              </div>
      ))} 

      {addresses === [] && 
      <div className="text-center uppercase my-10 text-red-500"> 
        No address has been set
        </div>}
      </div>
  )
}

export default Addresses