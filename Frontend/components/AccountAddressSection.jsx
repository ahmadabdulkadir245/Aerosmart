import { useState } from "react"
import Addresses from "./Addresses"
import AddressForm from "./AddressForm"



function AccountAddressSection({user_id, authToken, setLoading}) {
    const [addAddress, setAddAddress] = useState(false)
  return (
    <div className="col-span-3">
        <div className="bg-white p-2">
           <div className="flex justify-between items-center mb-2">
            <div className="">
            <h2 className="uppercase">Address</h2>
            </div>
            <button className={`px-5 lg:w-[200px]  ${addAddress ? 'bg-red-500 lg:hover:bg-red-600 ' : 'bg-yellow-400 lg:hover:bg-yellow-500 '} text-white  p-3 rounded-md uppercase transition-all delay-100 tracking-wide text-xs`} onClick={() => setAddAddress(!addAddress)}
                >
                  {addAddress ? 'cancle' : 'add address'}
              </button>
        </div>
            <hr className="bg-gray-300 w-full h-[1px]" />
            {/* address import */}
            {addAddress ? 
          <AddressForm  user_id={user_id} authToken={authToken}  setLoading={setLoading}   />
          :
          <Addresses user_id={user_id}  setLoading={setLoading}/>         
          }
      </div>
            </div>
  )
}

export default AccountAddressSection