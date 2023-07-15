import React from 'react'

function AddressForm() {
  return (
 
    <form action="" className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs my-3">
    <div className="col-span-2 lg:col-span-1 w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" placeholder="First Name" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" placeholder="Last Name" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" placeholder="Phone Number e.g 081" />
    </div>
    <div className="col-span-2 lg:col-span-1  w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" placeholder="Additional Phone Number e.g 080" />
    </div>
    <div className="col-span-2 w-full"> 
    <input type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400" placeholder="Delivery Address" />
    </div>
    <div className="col-span-1 w-full"> 
    <select type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400 text-gray-400 cursor-pointer capitalize" placeholder="Additional Phone Number e.g 080">
      <option>Select State</option>
      <option>abuja</option>
      <option>kaduna</option>
      <option>lagos</option>
    </select>
    </div>
    <div className="col-span-1 w-full"> 
    <select type="text" className="border-2 border-gray-300 rounded-md px-2 py-[14px] outline-none w-full focus:ring-2 focus:border-transparent ring-green-400 text-gray-400 cursor-pointer capitalize" placeholder="Additional Phone Number e.g 080">
      <option>Select Local Gov</option>
      <option>chikun</option>
    </select>
    </div>
    <div className="col-span-2 w-full flex justify-center text-xs"> 
    <button className=" w-[400px] bg-green-400 text-white  p-3 rounded-md capitalize hover:bg-green-500 transition-all delay-100 tracking-wide "
       >
      save
    </button>
    </div>
  </form>

  )
}

export default AddressForm