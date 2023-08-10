import  { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import AdminProductsList from '../../components/AdminProductsList'
import ReactPaginate from "react-paginate";
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../../slices/productsSlice';
import { fetchProducts } from '../../slices/productsAction';
import { getAuthTokenFromCookie, getUserIDFromCookie } from '../../utils/cookie';

function AminProducts({authToken, user_id}) {
  const dispatch = useDispatch()
  const recievedProducts = useSelector(selectedProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1) 
  const [page, setPage] = useState(0)
  const perPages = {
    sm: 3,
    md: 9,
    lg: 15
  };
  const [perPage, setPerPage] = useState(perPages.sm);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newPerPage = perPages.sm;

      if (innerWidth >= 768 && innerWidth < 1024) {
        newPerPage = perPages.md;
      } else if (innerWidth >= 1024) {
        newPerPage = perPages.lg;
      }
      setPerPage(newPerPage);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [perPages.lg, perPages.sm, perPages.md]);
const products = recievedProducts.slice(perPage * page, perPage * (page + 1))

  useEffect(() => {
    setTotalPages(Math.ceil(recievedProducts.length / perPage))
  }, [recievedProducts, perPage])
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [loading])

  if(loading) {
    return <Loading/>
  }
  return (
    <>
    <Header/>
       <div className='px-[10px] lg:px-[50px]'>
       <h2 className='text-center font-semibold text-2xl  py-6 tracking-wide font-poppins text-gray-500'>ALL PRODUCTS</h2>
    <div className="grid grid-cols-4 lg:grid-cols-7 items-center uppercase bg-gray-300 p-2 text-gray-700 text-xs font-semibold text-center">
        <div className="">
          <p><span className='hidden lg:inline-block'>PRODUCT </span> IMAGE</p>
        </div>
        <div className="col-span-2">
          <p><span className='hidden lg:inline-block'>PRODUCT  </span> TITLE / DESCRIPTION</p>
        </div>
        <div className="hidden lg:inline-flex  items-center space-x-2">
        <p><span className='hidden lg:inline-block'>PRODUCT </span> CATEGORY</p>
        </div>
        <div className="hidden lg:flex  items-center space-x-2">
        <p><span className='hidden lg:inline-block'>PRODUCT </span> PRICE</p>
        </div>
        <div className="hidden lg:inline">
          <p className=''>EDIT <span className='hidden lg:inline-block'>PRODUCT </span> </p>
        </div>
        <div className="">
          <p> ACTIONS<span className='hidden lg:inline-block'>DELETE PRODUCT </span> </p>
        </div>
    </div>

    <div className="grid grid-cols-4 lg:grid-cols-7 gap-x-3 items-center uppercase  text-gray-700 text-xs font-semibold mt-3">
      {products.map(({ id, title, price, description, category, image_url,quantity, brand}) => (
    <AdminProductsList
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        quantity={quantity}
        image_url={image_url}
        brand={brand}
        setLoading={setLoading}
    />
      ))}
    </div>
    
        <div className="my-5">
        <ReactPaginate
          breakLabel='...'
          previousLabel='PREV'
          nextLabel='NEXT'
          pageRangeDisplayed={1}
          pageCount={totalPages}
          onPageChange={({ selected }) => setPage(selected)}
          renderOnZeroPageCount={null}
          previousClassName='flex items-center justify-center capitalize   w-[70px] h-[30px] rounded-sm  border-[1px]  bg-transparent   tracking-wide cursor-pointer  text-xs '
          nextClassName='flex items-center justify-center capitalize   w-[70px] h-[30px] rounded-sm  border-[1px]  bg-transparent   tracking-wide cursor-pointer text-xs'
          containerClassName='flex justify-center items-center mx-auto space-x-2'
          pageLinkClassName='flex items-center justify-center capitalize   w-[30px] h-[30px] rounded-sm  border-[1px]  bg-transparent text-xs'
          activeClassName='bg-gray-200  transition-all duration-300 ease-in-out'
        />
  </div>
    </div>
    <Footer/>
    </>
  )
}

export default AminProducts

export const getServerSideProps = async (context) => {
  const user_id = getUserIDFromCookie(context.req);
  const authToken = getAuthTokenFromCookie(context.req);
    return {
      props: {
        authToken,
        user_id,
      },
    };
};