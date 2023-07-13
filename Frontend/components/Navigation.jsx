import {RiUser3Line} from 'react-icons/ri'
import {BiSearchAlt} from 'react-icons/bi'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { MdClear } from "react-icons/md";
import SideBar from "./SideBar"
import {  AiOutlineShoppingCart} from "react-icons/ai";
import Link from 'next/link';
import { useState, useContext } from 'react';
import router from 'next/router'
import { useRecoilState } from 'recoil';
import { navState } from '../atoms/navHandler';
import { useDispatch, useSelector } from "react-redux"
import { selectedcartItems } from '../slices/cartSlice';
import { addSearchedWord } from '../slices/searchSlice';
import MobileNav from './MobileNav';
import SearchSuggesstions from './SearchSuggesstions';
import {AuthContext} from '../context/authContext'


const items = []
function Navigation() {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useRecoilState(navState);
  const [searchWord, setSearchWord] = useState("");
  const sideBarHandler = () => {
      setOpenSideBar(true);
    };
    const closeNavHandler = () => {
      setOpenSideBar(false);
    };
  const [showSearch, setShowSearch] = useState(false);

  const showSearchHandler = () => {
      setShowSearch(!showSearch)
  }

  dispatch(addSearchedWord(searchWord));

  const searchHandler = (e) => {
    const word = e.target.value;
    setSearchWord(word.toLowerCase());
  };

  const clearSearchHandler = (e) => {
    setSearchWord('');
  };

  const searchIconHandler = (searchWord) => {
    if(searchWord) {
      dispatch(setSelectedProduct(product));
    dispatch(setSelectedProductCategory(product.category));
     return  router.push(`/search/${searchWord}`)
    }else{
      console.log('word not found')
    }
  }

  const pressToSearchHandler = (suggesstion) => {
    if(suggesstion) {
      clearSearchHandler()
      return router.push(`/search/${suggesstion}`)
    }
  }
  const productInCart = useSelector(selectedcartItems)

  const {logout, authToken} = useContext(AuthContext)
  const logoutHandler  = () => {
      logout()
      router.replace('/login')
  }

  return (
<div>
{/* sidebar menu */}
<SideBar openSideBar={openSideBar} showSearch={showSearch} />
    {/* navigation */}
  <nav className={`flex items-center justify-between flex-wrap bg-gray-50 py-4 ${showSearch ? '': 'shadow-lg'}  lg:shadow-lg px-[10px] lg:px-[50px] `}>
  
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <div className="">
      {openSideBar ? (
                  <MdClear
                    className='w-6 h-6 text-gray-500 lg:hidden transition-transform duration-500 ease-in-out cursor-pointer'
                    onClick={closeNavHandler}
                  />
                ) : (
                  <HiOutlineMenuAlt3 className='w-6 h-6 text-gray-500 lg:hidden cursor-pointer' onClick={sideBarHandler}/>
                )}
      
      </div>
      <div className="text-xl lg:text-2xl font-changa text-gray-500 cursor-pointer" onClick={() => router.push("/")}>
      AERO<span className='text-yellow-500'>SMART</span>
      </div>
      
      </div>

     {/* search for Desktop */}
              <div className='hidden lg:flex items-center  h-10 rounded-md max-w-3xl flex-grow cursor-pointer bg-yellow-500  hover:bg-[#f7b32b] transition-all duration-500 linear mx-5'>
                <input
                  type='text'
                  className='py-5 px-4 h-full w-6 flex-grow  flex-shrink rounded-l-sm focus:outline-none bg-gray-300 font-play text-gray-700 text-xs'
                  placeholder='search on Aerosmart'
                  onChange={searchHandler}
                />
                <BiSearchAlt className='h-12 w-12 p-3  text-gray-500 transition duration-200 ease-in' 
                onClick={searchIconHandler}
                />
                
              </div>

                 {/*  Right*/}
                 <div className='flex text-gray-500 text-xs  space-x-5 lg:space-x-12  whitespace-nowrap px-4 lg:px-'>
                <div className='flex space-x space-x-6 items-center'>
                  <BiSearchAlt
                    className={`  lg:hidden w-6 h-6 lg:w-7 lg:h-7 ${showSearch ? 'hidden': ''}`}
                onClick={showSearchHandler}
                  />
                  {authToken ?
                      <div className='hover:text-[rgb(247,179,43)] transition-all duration-500 linear' onClick={logoutHandler}>
                      <RiUser3Line className='w-6 h-6 lg:w-7 lg:h-5 ' />
                   <p className='hidden lg:inline font-semiold md:text-xs font-titilliumWeb link'>
                  Logout
                </p>
                </div>
                :  
                  <Link href='/account'>
                     <div className='hover:text-[#f7b32b] transition-all duration-500 linear '>
                        <RiUser3Line className='w-6 h-6 lg:w-7 lg:h-5 flex justify-center mx-auto' />
                     <p className='hidden lg:inline font-semiold md:text-xs font-titilliumWeb link capitalize text-center'>
                    my account
                  </p>
                  </div>
                  </Link>
                }
                </div>

                <div
                  onClick={() => router.push("/cart")}
                  className='link flex items-center relative '
                >
                  <span className='absolute -top-1 -right-1 md:right-10 h-4 text-xs w-4 bg-yellow-400 rounded-full  text-center font-semibold items-center font-titilliumWeb transition-all duration-500 linear animate-pingOnce' key={productInCart.length} >
                    {productInCart.length}
                  </span>
                  <AiOutlineShoppingCart className='w-6 h-6 lg:w-7 lg:h-7' />
                  <p className='hidden lg:inline font-semibold md:text-sm font-titilliumWeb'>
                    Cart
                  </p>
                </div>
                {authToken && 
                <div className='hidden lg:flex space-x-4 items-center'>
                  <Link href='/admin/products'>Admin Products</Link>
                  <Link href='/admin/add-product'>Add Product</Link>
                </div>
                }
              </div>


  </nav>
                 {/* search for mobile */}
                  <MobileNav showSearch={showSearch} searchHandler={searchHandler} searchWord={searchWord} searchIconHandler={searchIconHandler}  />

                  {/* Suggesstions */}
                 <SearchSuggesstions searchWord={searchWord} setSearchWord={setSearchWord} pressToSearchHandler={pressToSearchHandler} />
</div>
  )
  };

export default Navigation;
