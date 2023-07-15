import { useState } from "react"
import Addresses from "./Addresses"
import AddressForm from "./AddressForm"



function AccountAddressSection() {
    const [addAddress, setAddAddress] = useState(false)
  return (
    <div className="col-span-3">
        <div className="bg-white p-2">
           <div className="flex justify-between items-center mb-2">
            <div className="">
            <h2 className="uppercase">Address</h2>
            </div>
            <button className={`px-5 lg:w-[200px]  ${addAddress ? 'bg-red-500' : 'bg-yellow-400'} text-white  p-3 rounded-md uppercase hover:bg-yellow-500 transition-all delay-100 tracking-wide text-xs`} onClick={() => setAddAddress(!addAddress)}
                >
                  {addAddress ? 'cancle' : 'add address'}
              </button>
        </div>
            <hr className="bg-gray-300 w-full h-[1px]" />
            {/* address import */}
            {addAddress ? 
          <AddressForm/>
          :
          <Addresses />         
          }
      </div>
            </div>
  )
}

export default AccountAddressSection