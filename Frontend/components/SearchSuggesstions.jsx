import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetchProducts } from "../slices/productsAction";
import { selectedProducts } from "../slices/productsSlice";

function SearchSuggesstions({searchWord, setSearchWord,pressToSearchHandler}) {
  // const [products, setProducts] = useState([])
  const router = useRouter()
  const dispatch = useDispatch()
  const products = useSelector(selectedProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
 
  let filteredCategories = []
  let filteredProducts = []
if (searchWord !== undefined) {
  filteredCategories = products
  .filter((product) => product.category.includes(searchWord))
  .map((product) => product.category)
  .filter((category, index, self) => self.indexOf(category) === index).slice(0, 5);
}

  if (searchWord !== undefined) {
    filteredProducts = products
      .filter((product) => product.title.includes(searchWord))
      .map((product) => ({
        id: product.id,
        title: product.title,
        image_url: product.image_url,
      }))
      .filter((product, index, self) => self.findIndex((p) => p.title === product.title) === index).slice(0, 10);
  }


const clearSearchWordCategoryHandler =(id) => {
  setSearchWord("") 
  router.push(`/search/${id}`)
}
const clearSearchWordHandler =(id) => {
  setSearchWord("") 
}
  return (
    <div className={`${searchWord.length > 2 ? '' : 'hidden'} absolute lg:relative  bg-gray-50 text-gray-700  w-full max-w-5xl  text-xs font-poppins mx-auto h-[30vh] lg:h-[50vh] rounded-b-lg shadow-lg overflow-y-scroll mb-3  scrollbar-hide transition-all duration-500 ease-in`}>
 
        <div className="w-full bg-gray-300 p-2 uppercase rounded-md">
            product categories
          </div>
          {filteredCategories.map((category) => (
            <div key={category} className="py-2  px-3 capitalize cursor-pointer" onClick={clearSearchWordCategoryHandler.bind(this, category)} >
              <Link href={`/search/${category}`}>
              {category}
              </Link>
            </div>
          ))}
    
          <div className="w-full bg-gray-300 p-2 uppercase rounded-sm">
            products
          </div>
          {filteredProducts.map((product) => (
            <div key={product.id} className="capitalize cursor-pointer"  >
    
              <Link href={`/products/${product.id}`}>
                <div className='flex items-center p-2 space-x-3 hover:text-yellow-500 hover:opacity-75' onClick={clearSearchWordHandler}>
                  <div className=" relative h-[50px] w-[50px]">
              <Image src={product.image_url} alt={product.title} layout="fill" />
                  </div>
              <p className=" ">{product.title}</p>
                </div>
              </Link>
              </div>
          ))}
          </div>
         
  )
}

export default SearchSuggesstions