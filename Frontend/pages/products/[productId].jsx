import Image from "next/legacy/image";
import axios from 'axios';
import { useRouter } from "next/router";
import {AiFillHeart, AiFillStar, AiOutlineHeart} from "react-icons/ai"
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { addToCart } from "../../slices/cartSlice";
import ProductSlider from "../../components/ProductSlider";
import { TbCurrencyNaira } from "react-icons/tb";
import { ImFacebook, ImWhatsapp } from "react-icons/im";
import { BsStarFill, BsStarHalf, BsTwitter } from "react-icons/bs";
import { productsRetrieved } from "../../slices/productSlice";
import { useEffect, useState } from "react";

function Product({product, products}) {
  const router = useRouter()
  const prodId = router.query.productId
  const dispatch = useDispatch()
  const addProductToCart = (checkout) => {
    const Product = {
    id:  product.prodId,
      title: product.title,
     price: product. price,
      description: product.description,
      image_url: product.image_url,
    };
    dispatch(addToCart(Product));
    if(checkout == true) {
      router.push('/checkout')
    }
  }

  
  const imageSlider = [1,2,3,4,5]

  return (
    <>
    <Header />
    <div className="px-3 pt-5  text-gray-500 max-w-7xl mx-auto lg:grid grid-cols-3 gap-x-10 lg:mt-8 lg:p-8 lg:bg-white ">

      <div className="col-span-2 ">
      <div className="flex flex-col-reverse lg:flex-row">


      <div className="flex items-center space-x-2 my-3 w-full   lg:block lg:space-x-0 lg:space-y-2  lg:my-0 lg:w-[150px] lg:h-[350px]   lg:overflow-y-scroll scrollbar-hide">
      {imageSlider.map((image, index) => (

      <div key={index} className="relative   w-[80px] h-[60px]  overflow-hidden rounded-md border-[3px]  cursor-pointer hover:border-blue-500 p-4">
        <Image src={product.image_url} alt={product.title} layout="fill" objectFit="cover"/>
      </div>
      ))}
      </div>
      <div className="relative w-full h-[250px] lg:w-full  lg:h-[350px] overflow-hidden rounded-md border-0 border-gray-900 lg:rounded-none">
        <Image src={product.image_url} alt={product.title}  layout="fill" objectFit="cover" />
      </div>

      </div>
      </div>


    <div className="col-span-1">
      <div className="flex items-center justify-between mt-5 lg:mt-0 lg:block">
        <div className="pt-1 lg:pt-0">
          <h2 className="   font-poppins font-semibold  uppercase text-sm lg:text-2xl ">{product.title}</h2>
        </div>
        <span className="bg-yellow-100 flex items-center space-x-1 px-1 font-changa  rounded-sm lg:hidden">
              <AiFillStar className="text-yellow-400 w-3 h-3"/>
              <p className="text-yellow-400 text-sm">4.5</p>
        </span>
      </div>

        <div className="hidden lg:block font-poppins text-xs">
          <div className="flex space-x-2 my-1">
           <p> Brand: </p>
           <p className="capitalize">product brand</p>
          </div>
          <div className="flex space-x-2 my-1">
           <p> Category: </p>
           <p className="capitalize"> {product.category}</p>
          </div>
          <div className="flex space-x-2 my-1">
           <p> Availability: </p>
           <p className={`capitalize   ${product.quantity > 0 ? 'text-green-400' : "text-red-400"}`}> {product.quantity > 0 ? 'in stock' : "not available"}</p>
          </div>
          <hr className="bg-gray-400 my-1" />
          <div className='font-primary  flex items-center  text-xl   text-gray-800'>
            <TbCurrencyNaira  className="w-5 h-7 text-gray-600"/>{product.price.toLocaleString()}
          </div>

          
        </div>

      <div className="lg:hidden flex items-center justify-between">
        <h4 >Colors</h4>
      <div className="flex items-center justify-between my-3">
          <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-sm"></div>
          <div className="w-8 h-8 rounded-full bg-yellow-400 shadow-md"></div>
          <div className="w-8 h-8 rounded-full bg-blue-500 shadow-md"></div>
          <div className="w-8 h-8 rounded-full bg-green-400 shadow-md"></div>
          </div>
         </div>
      </div>

      <div className="hidden lg:flex space-x-2 my-2">
                <BsStarFill className='text-yellow-500 h-4'/>
                <BsStarFill className='text-yellow-500 h-4'/>
                <BsStarFill className='text-yellow-500 h-4'/>
                <BsStarFill className='text-yellow-500 h-4'/>
                <BsStarHalf className='text-yellow-500 h-4'/>
             </div>

          <div className="flex justify-between space-x-5">
         <div className="capitalize w-[15%] lg:w-[200px] h-[48px] lg rounded-md border-[1px] border-gray-300 flex items-center justify-center mt-4 m-auto cursor-pointer space-x-3 hover:bg-yellow-500 hover:border-white hover:text-white transition-all delay-100 ease-in" onClick={addProductToCart}>
          <CiShoppingCart className="w-7 h-7  flex justify-between "/>
          <div className="hidden lg:flex">add to cart</div>
         </div>
         <button className="capitalize w-[80%] h-[48px] lg:w-[200px] rounded-md text-white border-[1px] border-yellow-500 bg-yellow-500 block mt-4 m-auto hover:bg-green-500 hover:border-none transition-all delay-100 ease-in" onClick={addProductToCart.bind(this, true)}>Buy Now</button>
          </div>
          
          <hr className="bg-gray-400 my-3" />


          <div className="flex justify-between items-end  text-xs">
            <div className="">
              <h4 className="mb-4">share with friends</h4>
              <div className="flex  space-x-2">
                <ImFacebook className="w-7 h-7 rounded-full border  bg-blue-500 text-white p-1 cursor-pointer hover:opacity-70 transition-all delay-100"/>
                <ImWhatsapp className="w-7 h-7 rounded-full border  bg-green-400 text-white p-1 cursor-pointer hover:opacity-70 transition-all delay-100"/>
                <BsTwitter className="w-7 h-7 rounded-full border  bg-blue-400 text-white p-1 cursor-pointer hover:opacity-70 transition-all delay-100"/>
              </div>
            </div>

            <div className="flex items-center justify-center text-white  space-x-2 cursor-pointer bg-gray-300 rounded-full  w-[100px] h-[35px] hover:bg-red-500 transition-all delay-100">
            <AiFillHeart className="w-5 h-5"/>
            <p className="">1000</p>
            </div>
          </div>
    </div>

      </div>
      
      <div className="lg:max-w-7xl mx-auto bg-white p-8 my-5 ">
        <h2 className="text-center uppercase text-xl font-poppins font-semibold">description</h2>
        <hr className="bg-gray-400 my-2" />

        <p className="prose prose-h1:text-3xl   prose-h1:font-semibold prose-h2:text-2xl  prose-h2:font-semibold prose-h2:mt-[0px] 
      prose-h2:mb-[24px] prose-p:text-xs prose-headings:capitalize prose-a:text-blue-500 hover:prose-a:text-blue-800 font-poppins" dangerouslySetInnerHTML={{ __html: product.description }} 
      />
      </div>
      
        <div className="max-w-7xl mx-auto">
      <ProductSlider sectionTitle={'latest products'} products={products} path={'/'}/>

      <ProductSlider sectionTitle={'discount products'} products={products} path={'/'} discount={true}/>
        </div>

    <Footer/>
    </>
  )
}

export default Product




export const getServerSideProps = async (context) => {
  const { productId } = context.query;
  const page = 1;
  const perPage = 8;

  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      query: `
        {
          product(id: ${productId}) {
            title
            price
            image_url
            description
            category
            quantity
          }
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

    const product = response.data?.data?.product;
    const products = response.data?.data?.products?.products || [];

    return {
      props: {
        product,
        products,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        product: null,
        products: [],
      },
    };
  }
};
