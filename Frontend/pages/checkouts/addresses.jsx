import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router';
import { useEffect,  useState } from 'react';
import Loading from '../../components/Loading';
import { getAuthTokenFromCookie, getUserIDFromCookie } from '../../utils/cookie'
import axios from 'axios';
import { BiPlug, BiPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { selectedaddress } from '../../slices/addressSlice';
import { fetchAddress } from '../../slices/addressAction';



function CheckoutAddress({user_id}) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [chosenAddress, setChosenAddress] = useState(null)
  const addresses = useSelector(selectedaddress)
  useEffect(() => {
      dispatch(fetchAddress(user_id))
  }, [dispatch])
  const selectAddress = (event) => {
    const id = event.target.value
    const selectedAddress = addresses.filter(address => address.id == id)
    setChosenAddress(selectedAddress)
  }

  const submitAddress = () => {
    if(chosenAddress == null) return
    router.push(`/checkouts?address_id=${chosenAddress[0].id}`)
  }
  
  const deliveryArray = [1,2, 3]
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [loading])
  
  if (loading) {
    return<>
    <Header/>
    <Loading />
    </> 
  }
  return (
    <div className="">
      <Header />
        <div className="mx-3 lg:mx-auto max-w-5xl bg-white rounded-md my-10  px-3 py-4">              
        <h2 className="capitalize font-poppins">
           select delivery address
        </h2>
        <div className='bg-gray-400 w-[98%] h-[1px] rounded-sm m-auto'></div>
        {addresses.map((address) => (
            <div className="my-4 text-xs" key={address.id}>
                <div className="font-poppins border-2 border-gray-500 p-2 rounded-md">
                  <div className="flex items-center space-x-2 ">  <input type="radio" name="address"  value={address.id} onChange={selectAddress} />
                      <h3 className="capilatalize font-semibold">{(address.first_name).toUpperCase()} {(address.last_name).toUpperCase()}</h3> 
                    </div>  
                        <p className="ml-5">{address.address_line_1}</p>
                        <p className="ml-5">{address.phone_number_1}</p>
                        {address.is_default &&
                        <p className="ml-5 text-green-500">Defualt address</p>
                        }
                </div>
            </div>
        ))}
        {addresses === [] && 
        <div className="text-center font-poppins uppercase text-red-500 my-5">
          no addresss 
          <p>creatre address to continue </p>
          </div>}
          <div className="flex items-center space-x-2">

                    <button className={`mt-2 w-3/4 ${chosenAddress ? 'bg-green-600' : 'bg-green-400 hover:cursor-not-allowed'} text-white  p-3 rounded-md capitalize hover:bg-green-500 transition-all delay-100 tracking-wide font-poppins`}
                    onClick={submitAddress}
                 >
                select address
              </button>   
                    <button className="mt-2 w-1/4 border-2 border-yellow-400 bg-yellow-400 text-white  p-2 rounded-md capitalize hover:bg-yellow-500 transition-all delay-100 tracking-wide font-poppins  flex justify-center"
                    onClick={() => router.push('/account/address')}
                 >
                  <BiPlus className='w-7 h-7 font-bold' />
              </button>   
                   </div>

        </div>
      <Footer/>
    </div>
  )
}

export default CheckoutAddress


export const getServerSideProps = async (context) => {
    const user_id = getUserIDFromCookie(context.req);
    const authToken = getAuthTokenFromCookie(context.req);
      return {
        props: {
          authToken,
          user_id,
        },
      };
    } 
  
  