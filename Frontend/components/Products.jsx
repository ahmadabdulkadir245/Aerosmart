import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import {TbCurrencyNaira} from "react-icons/tb"
import { getUserIdFromCookie } from "../utils/user_id";
import { addToCart } from "../slices/cartItemsSlice";

const Products = ({ id, title, price, description, image_url , category, authToken, user_id}) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setTimeout(() =>{
        setLoading(true)
      }, 300)
    }, [loading])
    
    const dispatch = useDispatch();
    // const addProductToCart = () => {
    //   const Product = {
    //     id,
    //     title,
    //     price,
    //     description,
    //     image_url,
    //   };
    //   dispatch(addToCart(Product));
    // };

    const addProductToCart = (e) => {
      if(!authToken) {
        const Product = {
          id,
          title,
          price,
          description,
          image_url,
        };
        dispatch(addToCart(Product));
        return
      }

      e.preventDefault()
        let graphqlQuery = {
         query: `
         mutation AddToCart($user_id: Int, $quantity: Int, $product_id: Int) {
           addToCart(cartInput: {user_id: $user_id, product_id: $product_id, quantity: $quantity}) {
             user_id
             product_id
             quantity
           }
         }
       `,
         variables: {
           user_id: Number(user_id),
           product_id: Number(id),
           quantity: 1
         }
       };


       fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphqlQuery)
      })
        .then(res => {  
          // console.log(res.json())
          return res.json();
        })
      }
  
  return (
    <>
      {loading ? (
        <div className='relative flex flex-col  bg-white z-30 shadow-xl rounded-sm text-gray-500 overflow-hidden transition delay-100 ease-in-out'>
          <Link href={`/products/${id}`}>
              {/* <p className='absolute top-2 right-2 text-xs italic text-gray-400 z-20'>
                {category}
              </p> */}  
              <div className='relative w-full h-[160px]'>
                <Image src={image_url} alt={image_url} layout="fill" objectFit="cover" />
              </div>
          </Link>
          <p className='my-1 lg:mt-2 px-2 uppercase text-sm  font-poppins line-clamp-1 text-gray-700'>{title}</p>
          {/* <div className='flex  px-2'>
            {Array(rating)
              .fill(1)
              .map((_, i) => (
                <StarIcon key={id} className='h-4 text-yellow-500' />
              ))}
          </div> */}
        <div className=' font-primary  line-clamp-2 lg:line-clamp-3  px-2 text-xs  h-[30px] lg:h-[50px] text-gray-800'>
        <p  dangerouslySetInnerHTML={{ __html: description }} 
      />
        </div>
          <div className='  font-changa px-2 flex items-center space-x-1 text-xs  mt-[2px] text-gray-800'>
            <TbCurrencyNaira  className="w-4 h-4 text-gray-600"/>{price.toLocaleString()}
          </div>

          <button
            className='mt-1 lg:mt-2 mx-auto bg-yellow-500 hover:bg-yellow-400 p-2 w-[90%] text-white rounded-sm  uppercase mb-2 text-xs font-poppins transition-all delay-100 ease-in'
            onClick={addProductToCart}
          >
            Add To Cart
          </button>
        </div>
      ) : (
        <div className='relative flex flex-col  bg-white z-30 shadow-xl transition-all duration-500 linear animate-pulse h-[280px]'>
          <div className='absolute h-full w-10  bg-white pulse overflow-hidden z-[40] rounded-sm'></div>

          <div className='absolute top-2 right-2 w-12 h-2 rounded-md z-20 bg-gray-200'></div>
          <div className='relative w-full h-[160px] bg-gray-300  overflow-hidden '></div>
          <div className='my-1  ml-2 h-4 w-[85%] bg-gray-300 rounded-md'></div>

          <div className=' ml-2 h-3 w-[60%] bg-gray-300 rounded-md'></div>

          <div className='my-2 ml-2 h-8 w-[95%] bg-gray-300 rounded-md'></div>
          <div className=' ml-2 h-3 w-[40%] bg-gray-300 rounded-md'></div>
          <button className=' my-2 mx-auto p-2 w-[90%] h-[40px]  bg-gray-300 rounded-md' >
          </button>
        </div>
      )}
    </>
    )
}

export default Products