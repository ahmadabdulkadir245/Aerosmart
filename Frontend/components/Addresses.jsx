import { useState } from "react"
import { BiMap,  BiUser } from "react-icons/bi"

function Addresses() {
  const [defaultAddress, setDefaultAddress] = useState(1)
  return (
    <div className="grid lg:grid-cols-3 gap-2 lg:gap-8">
              <div className="col-span-1 mb-2" onClick={() => setDefaultAddress(1)}>
                <div className="border-2 border-b-0 rounded-md rounded-b-none border-green-300 px-2 py-3 mt-4 text-xs space-y-2 cursor-pointer hover:border-green-300 transition-all delay-100 ease-in">
                  <div className="capitalize flex space-x-1  items-center"><BiUser /> <p>affan dangi</p></div>
                  <div className="capitalize flex space-x-1  items-center"><BiMap /> <p>+234 800 800 8080</p></div>
                  <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]"/> <p>No. 4 ramat road, unguwar rimi. kaduna. nigeria.</p>
                  </div>
                  <p className={`${defaultAddress == 1 ? 'block' : 'hidden'} text-green-400 capitalize`}>
                    defualt address
                  </p>
                </div>
                <div className="flex justify-between border-2 border-green-300 -mt-1">
                      <p className="text-center w-full uppercase cursor-pointer bg-gray-500 text-white p-2 text-xs hover:bg-gray-400 transition-all delay-100 ease-in rounded-sm">edit</p>
                      <p className="text-center w-full uppercase cursor-pointer bg-red-600 text-white p-2 text-xs hover:bg-red-400 transition-all delay-100 ease-in rounded-sm">delete</p>
                </div>
              </div>

              
              <div className="col-span-1 mb-2" onClick={() => setDefaultAddress(2)}>
                <div className="border-2 border-b-0 rounded-md rounded-b-none border-gray-300 px-2 py-3 mt-4 text-xs space-y-2 cursor-pointer hover:border-green-300 transition-all delay-100 ease-in">
                  <div className="capitalize flex space-x-1  items-center"><BiUser /> <p>affan dangi</p></div>
                  <div className="capitalize flex space-x-1  items-center"><BiMap /> <p>+234 800 800 8080</p></div>
                  <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]"/> <p>No. 4 ramat road, unguwar rimi. kaduna. nigeria.</p>
                  </div>
                  <p className={`${defaultAddress == 2 ? 'block' : 'hidden'} text-green-400 capitalize`}>
                    defualt address
                  </p>
                </div>
                <div className="flex justify-between border-2 border-gray-300 -mt-1">
                      <p className="text-center w-full uppercase cursor-pointer bg-gray-500 text-white p-2 text-xs hover:bg-gray-400 transition-all delay-100 ease-in rounded-sm">edit</p>
                      <p className="text-center w-full uppercase cursor-pointer bg-red-600 text-white p-2 text-xs hover:bg-red-400 transition-all delay-100 ease-in rounded-sm">delete</p>
                </div>
              </div>
              
              <div className="col-span-1 mb-2" onClick={() => setDefaultAddress(3)}>
                <div className="border-2 border-b-0 rounded-md rounded-b-none border-gray-300 px-2 py-3 mt-4 text-xs space-y-2 cursor-pointer hover:border-green-300 transition-all delay-100 ease-in">
                  <div className="capitalize flex space-x-1  items-center"><BiUser /> <p>affan dangi</p></div>
                  <div className="capitalize flex space-x-1  items-center"><BiMap /> <p>+234 800 800 8080</p></div>
                  <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]"/> <p>No. 4 ramat road, unguwar rimi. kaduna. nigeria.</p>
                  </div>
                  <p className={`${defaultAddress == 3 ? 'block' : 'hidden'} text-green-400 capitalize`}>
                    defualt address
                  </p>
                </div>
                <div className="flex justify-between border-2 border-gray-300 -mt-1">
                      <p className="text-center w-full uppercase cursor-pointer bg-gray-500 text-white p-2 text-xs hover:bg-gray-400 transition-all delay-100 ease-in rounded-sm">edit</p>
                      <p className="text-center w-full uppercase cursor-pointer bg-red-600 text-white p-2 text-xs hover:bg-red-400 transition-all delay-100 ease-in rounded-sm">delete</p>
                </div>
              </div>
              </div>
  )
}

export default Addresses