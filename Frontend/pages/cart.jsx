import Head from "next/head"
import ProductAddedToCart from "../components/ProductAddedToCart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart, selectedcartItems, selectTotal } from "../slices/cartSlice";
import {TbCurrencyNaira} from "react-icons/tb"
import { useRouter } from "next/navigation";
import { addToOrder } from "../slices/orderSlice";
import DesktopCart from "../components/DesktopCart";
import ProductSlider from "../components/ProductSlider";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import axios from "axios";



function Cart({products}) {
  const router = useRouter()
  const dispatch = useDispatch()
  const cartItems = useSelector(selectedcartItems);
  const cartTotal = useSelector(selectTotal)
  const checkoutHandler =  () => {
    dispatch(addToOrder(cartItems))
    router.push('/checkout')
    setTimeout(() => {
      dispatch(emptyCart())
    }, 3000);
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [loading])
  
  // if (loading) {
  //   return<>
  //   <Header/>
  //   <Loading />
  //   </> 
  // }
  if (cartItems.length === 0) {
    return (
      <>
      <Header /> 
      <div className='iceland mt-4 m-auto w-[95%] lg:max-w-7xl text-[#181818]'>
       <Head>
        <title>Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* fonts import */}
      </Head>
      
        <p className=' text-center text-3xl mt-10 h-[90vh]'>No porducts in cart</p>
      </div>
      </>
    );
  }
  return (
    <div className=''>
      <Header />
      <div className='pt-5 lg:pt-0 lg:mt-10 lg:grid grid-cols-3 gap-x-6 m-auto  lg:max-w-7xl max-h-[calc(100vh-132px)] lg:h-full transition-all duration-500 ease-in overflow-y-scroll scrollbar-hide'>
        <div className="flex lg:hidden items-center justify-between  px-[12px] lg:px-0 text-gray-800 bg-white py-2 rounded-md">
          <div className="flex ">
            <p className="uppercase">subtotal </p>
            <p > - ({" "} {cartItems.length} {cartItems.length > 1 ? 
            'Products' : 
            'Product'} {" "} )</p>
          </div>
          <div>
            <p className="flex items-center "><TbCurrencyNaira  className="w-5 h-5 font-bold"/>{cartTotal.toLocaleString()}</p>
          </div>
        </div>
              <div className="col-span-2">

        <div className="hidden lg:flex items-center uppercase bg-gray-200 py-2 px-5 text-gray-800 text-sm font-poppins tracking-wider text-center">
        <div className="">
          <p><span className='hidden lg:inline-block font-semibold'>PRODUCTS</span> </p>
        </div>
      
    </div>

        {cartItems.map(
          ({ product, qty}) => (
            <DesktopCart
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            productQty={qty}
            image_url={product.image_url}
            />
            )
            )}
      </div>
            <div className="">
            <div className="hidden lg:flex items-center uppercase bg-gray-200 py-2 px-5 text-gray-700 text-sm font-poppins tracking-wider text-center">
        <div className="">
          <p><span className='hidden lg:inline-block'>ORDER SUMMERY</span> </p>
        </div>
            </div>
          </div>
            </div>


      <div className=" px-3 shadow-xl w-full  text-lg  pt-4 pb-2 overflow-hiddentext-gray-500">
      <button className="capitalize w-[90%] h-[48px] rounded-md text-white  text-sm bg-yellow-500  mb-2 flex items-center justify-center m-auto" 
      onClick={checkoutHandler}>Buy Now | <TbCurrencyNaira  className="w-5 h-5"/>{cartTotal.toLocaleString()}
      </button>
          </div>

            {/* slider */}
            <div className="max-w-7xl mx-auto">
      <ProductSlider sectionTitle={'latest products'} products={products} path={'/'}/>

      <ProductSlider sectionTitle={'discount products'} products={products} path={'/'} discount={true}/>
        </div>

          <Footer/>
     </div>

  )
}

export default Cart


export const getServerSideProps = async (context) => {
  const page = 1;
  const perPage = 8;

  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      query: `
        {
          products(page: ${page}, perPage: ${perPage}) {
            products {
              id
              title
              price
              image_url
              category
              quantity
              description
            }
          }
        }
      `,
    });

    const products = response.data?.data?.products?.products || [];

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }
};



