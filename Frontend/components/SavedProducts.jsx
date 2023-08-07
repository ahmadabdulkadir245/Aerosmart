import Image from "next/legacy/image"
import {   useState } from "react"
import { TbCurrencyNaira } from "react-icons/tb"
import { AiOutlineDelete } from "react-icons/ai"
import { TiTimes, TiTimesOutline } from "react-icons/ti"
import { CiShoppingCart } from "react-icons/ci"
import { useDispatch } from "react-redux"
import axios from "axios"
import { removeProductFromWishlist } from "../slices/wishlistAction"
import { addProductToCart } from "../slices/cartAction"

function SavedProducts({ user_id, setLoading, products }) {
  const dispatch = useDispatch()
  const [placeOrders, setPageOrder] = useState(true)

  const handleAddToCart = async (id, title, price, description, image_url) => {
    const Product = {
      id: id,
      title: title,
      price: price,
      description: description,
      image_url: image_url,
      cart_quantity: 1
    };
    dispatch(addProductToCart(Product));
    try {
      const response = await axios.post('/api/addToCart', { id: id, user_id: user_id, qauntity: 1 });
      const result = response.data;

    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromWishlist = async (id) => {
    if (!id) return;
    dispatch(removeProductFromWishlist({ id: id })); // Assuming `id` represents cart_item_id
    try {
      const response = await axios.post('/api/deleteFromWishlist', {
        user_id: Number(user_id),
        product_id: Number(id),
      });
      if (response.data.success) {
      } else {
        console.error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };  


  return (
<div className='col-span-3  bg-white' >
<div className="flex space-x-6 items-center mb-2">
            <div className=" cursor-pointer  transition-all delay-100 ease-in" onClick={() => setPageOrder(true)}>
            <h2 className={`uppercase mb-2 ${placeOrders ? 'text-yellow-400' : 'text-gray-500'} hover:text-yellow-400 `}>all products ({products.length})</h2>
            <hr className={`${placeOrders ? 'bg-yellow-400 ' : 'bg-transparen'}w-full h-1 -mb-3 transition-all delay-100 ease-in` } /> 
            </div>
        </div>
            <hr className="bg-gray-300 w-full h-[1px]" />

    {products.map(({id, category, title, price,image_url, description}) =>(
    <div className="py-5 lg:px-8 rounded-md" key={id}>
      
           <div className="grid grid-cols-4 gap-4 gap-x-6 font-poppins mt-6">

              <div className="relative col-span-2 lg:col-span-1   rounded-sm w-full h-[120px] mx-auto overflow-hidden cursor-pointer">
             <Image src={image_url} alt={'saved products'}  layout="fill" objectFit="cover"/>
                </div>
                <div className="col-span-2 cursor-pointer">
                  <h2 className="uppercase text-xs">{title}</h2>
                  <p className="text-xs capitalize text-gray-400 mt-1 hidden lg:block ">Brand : product brand</p>
                  <p className="text-xs capitalize text-gray-400 mt-1 hidden lg:block">category : {category}</p>
                  <div className='  flex items-center space-x-1  mt-[3px] text-gray-800'>
            <TbCurrencyNaira  className="w-5 h-5 text-gray-600"/>{price.toLocaleString()}
            <div className="flex">
            </div>
          </div>
                           <div className="lg:hidden flex justify-between items-center space-x-3 mt-1">
                <div className="capitalize p-2 rounded-md w-1/2   bg-yellow-500 text-white cursor-pointer space-x-3 hover:bg-yellow-500 hover:border-white hover:text-white transition-all delay-100 ease-in"   onClick={() => handleAddToCart(id, title, price, description, image_url)}>
                        <CiShoppingCart className="w-6 h-6 mx-auto"/>
                      </div>
                <div className="capitalize p-2 rounded-md w-1/2   bg-red-500 text-white cursor-pointer space-x-3 lg:hover:bg-yellow-500 hover:border-white hover:text-white transition-all delay-100 ease-in" 
                onClick={() => handleRemoveFromWishlist(id)} >
                        <TiTimesOutline className="w-6 h-6 mx-auto"/>
                      </div>
  </div>
                </div>
                <div className="hidden lg:col-span-1 text-xs  lg:block">
                  <div className="flex lg:block">
                <button className="mt-4 w-full bg-yellow-400 text-white  p-3 rounded-md capitalize hover:bg-yellow-500 transition-all delay-100 tracking-wide "
                 onClick={() => handleAddToCart(id, title, price, description, image_url)}>
                add to cart
              </button>
              <button className="mt-2 w-full bg-red-500 text-white  p-3 rounded-md capitalize hover:bg-red-400 transition-all delay-100 tracking-wide "
                 onClick={() => handleRemoveFromWishlist(id)}>
                delete
              </button>
                  </div>
                </div>
              <hr className="bg-gray-300 w-full h-[1px] col-span-4" />

           </div>
    </div>


))}
            {products.length < 1 && 
            <p className='uppercase text-red-500  py-10 text-center'>no products saved</p>
            }
    </div>

  )
}

export default SavedProducts