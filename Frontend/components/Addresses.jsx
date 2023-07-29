import axios from "axios";
import { useState, useEffect } from "react"
import { BiMap,  BiUser } from "react-icons/bi"

function Addresses({user_id, setLoading}) {
  const [addresses, setAddresses] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState(null)
  useEffect(() => {
    const fetchAddresses = async () => {
      try {

        const graphqlQuery = {
          query: `
            query FetchAddresses($user_id: Int!) {
              addresses(user_id: $user_id) {
                addresses {
                  id
                  first_name
                  last_name
                  address_line_1
                  address_line_2
                  phone_number_1
                  phone_number_2
                  city
                  state
                  is_default
                }
              }
            }
          `,
          variables: {
            user_id: Number(user_id)
          },
        };

        const response = await axios.post(
          process.env.NEXT_PUBLIC_GRAPHQL_URL,
          graphqlQuery
        );
        const result = await response.data;
        // Assuming the response.data has the format { data: { addresses: { addresses: [] } } }
        setAddresses(result.data.addresses.addresses);
        // setDefaultAddress(result.)
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        // setLoading(false);
      }
    };
    fetchAddresses();
  }, [user_id]);

  const handleDefaultAddress = async (addressId) => {
    try {
      await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        query: `
          mutation SetDefaultAddress($user_id: Int, $address_id: Int) {
            setDefaultAddress(user_id: $user_id, address_id: $address_id)
          }
        `,
        variables: {
          user_id: Number(user_id),
          address_id: Number(addressId),
        },
      });

      // Update the defaultAddress state
      setDefaultAddress(addressId);
    } catch (error) {
      console.error("Error setting default address:", error);
    }
  };

  const deleteAddress = async (addressId) => {
    try {
      await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        query: `
          mutation DeleteAddress($user_id: Int, $address_id: Int) {
              deleteAddress(user_id: $user_id, address_id: $address_id)
          }
        `,
        variables: {
          user_id: Number(user_id),
          address_id: addressId,
        },
      });

      // Update the defaultAddress state
      setLoading(true);
    } catch (error) {
      console.error("Error setting default address:", error);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-2 lg:gap-8">
      {addresses.map(address => (
              <div key={address?.id} className="col-span-1 mb-2" onClick={handleDefaultAddress.bind(this, address.id)}>
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
                      <p className="text-center w-full uppercase cursor-pointer bg-red-600 text-white p-2 text-xs hover:bg-red-400 transition-all delay-100 ease-in rounded-sm" onClick={deleteAddress.bind(this, address.id)}>delete</p>
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