import Image from "next/legacy/image";
import { useRouter } from "next/router";
import {AiFillStar} from "react-icons/ai"
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { addToCart } from "../../slices/cartSlice";
import DiscountSlider from "../../components/DiscountSlider";

let prodId
function Product({product}) {
  const router = useRouter()
  prodId = router.query.productId
  const dispatch = useDispatch()
  const addProductToCart = (checkout) => {
    const Product = {
    id:  product.prodId,
      title: product.title,
     price: product. price,
      description: product.description,
      image: product.image_url,
    };
    dispatch(addToCart(Product));
    if(checkout == true) {
      router.push('/checkout')
    }
  }

  return (
    <>
    <Header />
    <div className="px-3 pt-5 text-gray-500">
      <div className="relative   w-full h-[250px]  overflow-hidden rounded-md ">
        <Image src={product.image_url} alt={product.title}  layout="fill" objectFit="cover" />
      </div>

      <div className="flex items-center space-x-3 my-3">
      <div className="relative   w-[80px] h-[60px]  overflow-hidden rounded-md">
        <Image src={product.image_url} alt={product.title} layout="fill" objectFit="cover"/>
      </div>
      <div className="relative   w-[80px] h-[60px]  overflow-hidden rounded-md">
        <Image src={product.image_url} alt={product.title} layout="fill" objectFit="cover"/>
      </div>
      <div className="relative   w-[80px] h-[60px]  overflow-hidden rounded-md">
        <Image src={product.image_url} alt={product.title} layout="fill" objectFit="cover"/>
      </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="pt-1">
          <h2 className=" font-titilliumWeb  font-semibold uppercase text-sm">{product.title}</h2>
        </div>
        <span className="bg-yellow-100 flex items-center space-x-1 px-1 font-changa  rounded-sm">
              <AiFillStar className="text-yellow-400 w-3 h-3"/>
              <p className="text-yellow-400 text-sm">4.5</p>
        </span>
      </div>

      <div>
        <h3 className="mt-1 capitalize text-sm underline tracking-wider ">description</h3>
        <div className="lg:px-[50px] font-poppins text-gray-700 tracking-wide leading-7 w-full">
      <article className="prose prose-h1:text-3xl   prose-h1:font-semibold prose-h2:text-2xl  prose-h2:font-semibold prose-h2:mt-[0px] 
      prose-h2:mb-[24px] prose-headings:capitalize prose-a:text-blue-500 hover:prose-a:text-blue-800 font-poppins" dangerouslySetInnerHTML={{ __html: product.description }} 
      />
       </div>
      </div>

        <h4 >Colors</h4>
      <div className="flex items-center justify-between my-3">
          <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-sm"></div>
          <div className="w-8 h-8 rounded-full bg-yellow-400 shadow-md"></div>
          <div className="w-8 h-8 rounded-full bg-blue-500 shadow-md"></div>
          <div className="w-8 h-8 rounded-full bg-green-400 shadow-md"></div>
          </div>
         </div>

          <div className="flex justify-between">
         <div className="capitalize w-[15%] h-[48px] rounded-md border-[1px] border-gray-700 flex items-center justify-center mt-4 m-auto" onClick={addProductToCart}>
          <CiShoppingCart className="w-7 h-7 text-gray-700"/>
         </div>
         <button className="capitalize w-[80%] h-[48px] rounded-md text-white border-[1px] border-yellow-500 bg-yellow-500 block mt-4 m-auto" onClick={addProductToCart.bind(this, true)}>Checkout</button>
          </div>
    </div>

    <DiscountSlider sectionTitle={'discount products'} products={[product]} />

    <Footer/>
    </>
  )
}

export default Product


export const getServerSideProps = async (context) => {
  const {productId} = context.query
  const graphqlQuery = {
    query: `
    {
      product(id: ${productId}) {
        title
        price
        image_url
        description
      }
    }
    `
  };
   const result = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => {  
        return res.json();
      })
      .then(resData => {
        return resData
      })
      .catch(err => console.log(err))
      const data = await result
    return {
      props: {
        product: data?.data?.product
      }
    }
  }