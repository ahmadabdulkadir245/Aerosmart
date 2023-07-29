import React, { useState } from 'react'

function AddressForm({user_id, authToken, setLoading}) {
  const axios = require('axios');
  const [addressData, setAddressData] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressData((prevState) => ({ ...prevState, [name]: value }));
  };

async function createAddress(e) {
  e.preventDefault();
  try {
    const graphqlQuery = {
      query: `
        mutation CreateAddress(
          $user_id: Int,
          $first_name: String,
          $last_name: String,
          $address_line_1: String,
          $address_line_2: String,
          $city: String,
          $state: String,
          $phone_number_1: String,
          $phone_number_2: String,
        ) {
          createAddress(
            addressInput: {
              user_id: $user_id,
              first_name: $first_name,
              last_name: $last_name,
              address_line_1: $address_line_1,
              address_line_2: $address_line_2,
              city: $city,
              state: $state,
              phone_number_1: $phone_number_1,
              phone_number_2: $phone_number_2
            }
          ) {
            id
            user_id
            first_name
            last_name
            address_line_1
            address_line_2
            phone_number_1
            phone_number_2
            city
            state
          }
        }
      `,
      variables: {
        user_id: Number(user_id),
        first_name: addressData.first_name,
        last_name: addressData.last_name,
        address_line_1: addressData.address_line_1,
        address_line_2: addressData.address_line_2,
        phone_number_1: addressData.phone_number_1,
        phone_number_2: addressData.phone_number_2,
        city: addressData.city,
        state: addressData.state,
      },
    };

    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, graphqlQuery);
    const result = await response.data;
    setAddressData({})
    setLoading(true)

     // Return the createAddress result
     return result.data.createAddress;
  } catch (error) {
    throw new Error('error creating address: ' + error.message);
  }
}

  return (
 
    <form onSubmit={createAddress} className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs my-3">
    <div className="col-span-2 lg:col-span-1 w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='first_name' value={addressData.first_name || ''} onChange={handleChange} placeholder="First Name" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='last_name' value={addressData.last_name || ''} onChange={handleChange} placeholder="Last Name" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='phone_number_1' value={addressData.phone_number_1 || ''} onChange={handleChange} placeholder="Phone Number e.g 081" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='phone_number_2' value={addressData.phone_number_2 || ''} onChange={handleChange} placeholder="Additional Phone Number e.g 080" />
    </div>
    <div className="col-span-2 w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='address_line_1' value={addressData.address_line_1 || ''} onChange={handleChange} placeholder="Delivery Address" />
    </div>
    <div className="col-span-2 w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" name='address_line_2' value={addressData.address_line_2 || ''} onChange={handleChange} placeholder="Additional Address (optional)" />
    </div>
    <div className="col-span-1 w-full"> 
    <select type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400 text-gray-400 cursor-pointer capitalize" name='state' value={addressData.state || ''} onChange={handleChange} placeholder="Additional Phone Number e.g 080">
      <option>Select State</option>
      <option>abuja</option>
      <option>kaduna</option>
      <option>lagos</option>
    </select>
    </div>
    <div className="col-span-1 w-full"> 
    <select type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400 text-gray-400 cursor-pointer capitalize" name='city' value={addressData.city || ''} onChange={handleChange} placeholder="Additional Phone Number e.g 080">
      <option>Select Local Gov</option>
      <option>chikun</option>
    </select>
    </div>
    <div className="col-span-2 w-full flex justify-center text-xs"> 
    <button className=" w-[400px] bg-green-400 text-white  p-3 rounded-md capitalize hover:bg-green-500 transition-all delay-100 tracking-wide "
    // onClick={createAddress}
    type='submit'
       >
      save
    </button>
    </div>
  </form>

  )
}

export default AddressForm