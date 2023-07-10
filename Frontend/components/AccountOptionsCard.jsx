import { RiListOrdered, RiUser3Line } from 'react-icons/ri'
import { BiHeart, BiStore } from 'react-icons/bi'
function AccountOptionsCard() {
  return (
    <div>
                <div className="hidden lg:block col-span-1 text-xs">
             {/* Product categories section */}
             <div className="py-4 px-4 bg-white font-poppins rounded-md">
            <h3 className="text-lg font-semibold mb-3 uppercase">account details</h3>
            <div className="">
                <div className="">
              <div className="flex items-center space-x-2 bg-gray-300 py-5 cursor-pointer px-2 rounded-md hover:bg-gray-100 transition-all delay-100 ease-in">
              <RiUser3Line className='w-6 h-6 lg:w-7 lg:h-5' />
              <p className="capitalize">my account</p>
                </div>
              </div>
              <hr className="bg-gray-300 w-full h-[1px]" />
              <div className="flex items-center space-x-2 py-5 cursor-pointer px-2 rounded-md hover:bg-gray-100 transition-all delay-100 ease-in">
                <BiStore className='w-6 h-6 lg:w-7 lg:h-5' />
              <p className="capitalize">orders</p>
              </div>
              <hr className="bg-gray-300 w-full h-[1px]" />
              <div className="flex items-center space-x-2 py-5 cursor-pointer px-2 rounded-md hover:bg-gray-100 transition-all delay-100 ease-in">
                <BiHeart className='w-6 h-6 lg:w-7 lg:h-5' />
              <p className="capitalize">save products</p>
              </div>
              <hr className="bg-gray-300 w-full h-[1px]" />

              <div className="flex items-center space-x-2">
              
                <button className="w-full bg-yellow-400 text-white  p-3 rounded-md capitalize hover:bg-yellow-500 transition-all delay-100 tracking-wide ">
                logout
              </button>
              </div>
   
            </div>
          </div>
              </div>
    </div>
  )
}

export default AccountOptionsCard