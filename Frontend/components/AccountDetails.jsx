import {  BiMap, BiPencil, BiUser } from "react-icons/bi"
import { MdCall } from "react-icons/md"

function AccountDetails() {
  return (
    <div className='col-span-3'>
           <div className="flex justify-between bg-white">
              <div className="py-4 px-4  font-poppins rounded-md w-full">
              <div className="">
                <div className="bg-gray-200 p-2 rounded-sm ">
                  <h2 className="capitalize ">account details</h2>
                </div>

<form className='my-3 text-xs'>
<input
      type='text'
      className='border-[1px] lg:border-[1px] rounded-lg   border-gray-300 outline-none px-4 py-[12px] w-full  m-auto flex my-3 lg:my-3'
      placeholder='Affan'
      required
      // onChange={passwordInputHandler}
    />
<input
      type='text'
      className='border-[1px] lg:border-[1px] rounded-lg   border-gray-300 outline-none px-4 py-[12px] w-full  m-auto flex my-3 lg:my-3'
      placeholder='Dangi'
      required
      // onChange={passwordInputHandler}
    />
<input
      type='text'
      className='border-[1px] lg:border-[1px] rounded-lg   border-gray-100 opacity-80 cursor-not-allowed outline-none px-4 py-[12px] w-full  m-auto flex my-3 lg:my-3'
      placeholder='affandangi@gmail.com'
      disabled
      required
      // onChange={passwordInputHandler}
    />

    
</form>

              </div>
      </div>
             <div className="py-4  bg-white font-poppins rounded-md w-full">
              <div className="">
                <div className="bg-gray-200 p-2 rounded-sm flex justify-between items-center">
                  <h2 className="capitalize ">home address</h2>
                  <BiPencil className="w-5 h-5 cursor-pointer hover:text-white transition-all delay-100 ease-in"/>
                </div>
                <div className="border-2 rounded-md border-gray-300 p-2 mt-4 text-xs space-y-2">
                  <div className="capitalize flex space-x-1  items-center"><BiUser /> <p>affan dangi</p></div>
                  <div className="capitalize flex space-x-1  items-center"><MdCall /> <p>+234 800 800 8080</p></div>
                  <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]"/> <p>No. 4 ramat road, unguwar rimi. kaduna. nigeria.</p>
                  </div>
                </div>
              </div>
      </div>
             <div className="py-4 px-4 bg-white font-poppins rounded-md w-full">
              <div className="">
                <div className="bg-gray-200 p-2 rounded-sm flex justify-between items-center">
                  <h2 className="capitalize ">work address</h2>
                  <BiPencil className="w-5 h-5 cursor-pointer hover:text-white transition-all delay-100 ease-in"/>
                </div>
                <div className="border-2 rounded-md border-gray-300 p-2 mt-4 text-xs space-y-2">
                  <div className="capitalize flex space-x-1  items-center"><BiUser /> <p>affan dangi</p></div>
                  <div className="capitalize flex space-x-1  items-center"><MdCall />  <p>+234 800 800 8080</p></div>
                  <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]"/> <p>No. 3 ahmadu bello way, wuse 2, Abuja. nigeria.</p>
                  </div>
                </div>
                <button className="w-full bg-green-400 text-white  p-3 rounded-md capitalize hover:bg-green-500 transition-all delay-100 tracking-wide text-xs mt-2"
                 >
                save changes
              </button>
              </div>
      </div>

           </div>
    </div>
  )
}

export default AccountDetails

