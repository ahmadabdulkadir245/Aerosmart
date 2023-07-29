import { useEffect, useState } from "react";
import {  BiMap, BiPencil, BiUser } from "react-icons/bi"
import { MdCall } from "react-icons/md"
import { getUserIDFromCookie } from "../utils/cookie";
import axios from "axios";
import { useRouter } from "next/router";

function AccountDetails({user_id, user, setLoading}) {
  const router = useRouter()
  const [addresses, setAddresses] = useState([]);
  const [userData, setUserData] = useState({
    first_name: user?.first_name || "enter first name",
    last_name: user?.last_name || "enter last name",
    email: user?.email || "useremail@example.com",
  });
  const [message, setMessage] = useState({
    success: null,
    failed: null,
  })
  const [inputDisabled, setInputDisabled] = useState(true)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };
  const editName = (event) => {
  event.preventDefault();
  setInputDisabled(false)
}
const saveNewName = async (event) => {
  event.preventDefault();
  try {
    
    const graphqlQuery = {
      query: `
        mutation UpdateUsername($id: Int!, $first_name: String!, $last_name: String!) {
          updateUsername(usernameInput: {id: $id, first_name: $first_name, last_name: $last_name}) {
            first_name
            last_name
            email
          }
        }
        `,
        variables: {
          id: Number(user_id),
          first_name: userData.first_name,
          last_name: userData.last_name
        },
      };
      
      const response = await axios.post(
        process.env.NEXT_PUBLIC_GRAPHQL_URL,
        graphqlQuery
        );
        const result = await response.data;
        // Assuming the response.data has the format { data: { addresses: { addresses: [] } } }
        setUserData(result.data.updateUsername);
        setInputDisabled(true)
        setMessage({
          success: "username updated successfully",
          failed: null
        })
        setTimeout(() => {
          setMessage({success:null, failed:null});
        }, 2000)
        // setLoading(true)
    console.log(userData)
    // setDefaultAddress(result.)
    // setLoading(false);
  } catch (error) {
    setMessage({
      success: null,
      failed: "failed to update username"
    })
    setTimeout(() => {
      setMessage({success:null, failed:null});
    }, 2000)
    console.error('Error fetching addresses:', error);
    // setLoading(false);
  }
  }
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


  return (
    <div className='col-span-3'>
           <div className="lg:flex justify-between bg-white">
              <div className="py-4 px-4  font-poppins rounded-md w-full">
              <div className="">
              <div className="bg-gray-200 p-2 rounded-sm flex justify-between items-center">
                  <h2 className="uppercase ">account details</h2>
                  <BiPencil className={`w-5 h-5 cursor-pointer hover:text-white transition-all delay-100 ease-in ${!inputDisabled && 'hidden' }`} onClick={editName} />
                </div>
        <form className='my-3 text-xs'>
          {message.success && <div className='text-green-500 text-xs text-center'>{message.success}</div>}
          {message.error && <div className='text-red-500 text-xs text-center'>{message.error}</div>}
        <input
              type='text'
              className={`border-[1px] lg:border-[1px] rounded-lg    bg-gray-200 outline-none px-4 py-[12px] w-full  m-auto flex my-3 lg:my-3 uppercase ${inputDisabled ? 'border-gray-300 cursor-not-allowed' : 'bg-gray-50'}`}
              placeholder={addresses === [] ? addresses[0]?.first_name.toUpperCase() : 'enter first name'}
              required
              disabled={inputDisabled} 
              value={userData?.first_name}
              onChange={handleChange}
              name="first_name"
            />
        <input
              type='text'
              className={`border-[1px] lg:border-[1px] rounded-lg    bg-gray-200 outline-none px-4 py-[12px] w-full  m-auto flex my-3 lg:my-3 uppercase ${inputDisabled ? 'border-gray-300 cursor-not-allowed' : 'bg-gray-50'}`}
              placeholder={addresses === [] ? addresses[0]?.last_name.toUpperCase() : 'enter last name'}
              required
              disabled={inputDisabled}
              value={userData?.last_name}
              onChange={handleChange}
              name="last_name"
            />
        <input
              type='text'
              className='border-[1px] lg:border-[1px] rounded-lg   border-gray-300 bg-gray-200 cursor-not-allowed outline-none px-4 py-[12px] w-full  m-auto flex my-3 lg:my-3'
              placeholder={'useremail@gmail.com'}
              disabled
              value={userData?.email}
              required
              // onChange={passwordInputHandler}
            />
        </form>

              </div>
      </div>
             <div className="px-4 lg:py-4  bg-white font-poppins rounded-md w-full">
              <div className="">
                <div className="bg-gray-200 p-2 rounded-sm flex justify-between items-center">
                  <h2 className="uppercase ">home address</h2>
                  <BiPencil className="w-5 h-5 cursor-pointer hover:text-white transition-all delay-100 ease-in" onClick={() => router.push('/account/address')}/>
                </div>
              {addresses[0] ?
              <div className="border-2 rounded-md border-gray-300 p-2 mt-4 text-xs space-y-2">
              <div className="capitalize flex space-x-1  items-center"><BiUser /> <p>{addresses[0]?.first_name.toUpperCase() + ' ' + addresses[0]?.last_name.toUpperCase()   }</p></div>
              <div className="capitalize flex space-x-1  items-center"><MdCall /> <p>{addresses[0]?.phone_number_1.toUpperCase()  }</p></div>
              <div className="capitalize flex space-x-1 ">
              <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]"/> <p>{addresses[0]?.address_line_1.toUpperCase()}</p>
              </div>
            </div>
              :
              <div className="uppercase mt-4 text-center text-lg text-red-400">
                no address added
              </div>
              }
                

              </div>
      </div>
             <div className="py-4 px-4 bg-white font-poppins rounded-md w-full">
              <div className="">
                <div className="bg-gray-200 p-2 rounded-sm flex justify-between items-center">
                  <h2 className="uppercase">work address</h2>
                  <BiPencil className="w-5 h-5 cursor-pointer hover:text-white transition-all delay-100 ease-in" onClick={() => router.push('/account/address')}/>
                </div>

              {addresses[0] ?

                <div className="border-2 rounded-md border-gray-300 p-2 mt-4 text-xs space-y-2">
                  <div className="capitalize flex space-x-1  items-center"><BiUser /> <p>{addresses[1]?.first_name.toUpperCase() + ' ' + addresses[1]?.last_name.toUpperCase()   }</p></div>
                  <div className="capitalize flex space-x-1  items-center"><MdCall /> <p>{addresses[1]?.phone_number_1.toUpperCase()  }</p></div>
                  <div className="capitalize flex space-x-1 ">
                  <BiMap className="h-5 w-5 lg:w-[14px] pb-[3px]"/> <p>{addresses[1]?.address_line_1.toUpperCase()}</p>
                  </div>
                </div>
                     :
                     <div className="uppercase mt-4 text-center text-lg text-red-400">
                       no address added
                     </div>
                     }

                <button className={`w-full  text-white  p-3 rounded-md capitalize lg:hover:bg-green-700 transition-all delay-100 tracking-wide text-xs mt-2 ${!inputDisabled ? 'bg-green-600' : 'bg-green-400'}`}
                onClick={saveNewName}
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

export const getServerSideProps = async (context) => {

  const user_id = getUserIDFromCookie(context.req);
    return {
      props: {
        user_id
      },
    };
  } 



