import Products from './Products'
import { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";


const ProductFeed = () => {
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  // const perPage = 6
  const perPages = {
    sm: 6,
    md: 9,
    lg: 12
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
  useEffect(() => {
    const graphqlQuery = {
      query: `
      {
        products(page: ${page}, perPage: ${perPage}) {
          products{
            id
            title
            price
            image_url
            description
          }
          totalPages
        }
      }
      `
    };
   fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => {  
        return res.json();
      })
      .then(productData => {
        const recievedData = productData.data?.products?.products || []
        recievedData.reverse()
        const productPages = productData.data?.products.totalPages
        setProducts(recievedData)
        setTotalPages(productPages)
      })
  }, [page, perPage])

  return (
    <>
    <div
    className='grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 m-2 gap-2 lg:gap-6 px-2 md:px-[25px] lg:px-0 mx-auto max-w-7xl'
  >
    {products.map(({ id, title, price, description, category, image_url }) => (
      <Products
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image_url={image_url}
      />
    ))}
    
  </div>
  <div className='w-full px-[10px] my-10'>
  <ReactPaginate
          breakLabel='...'
          previousLabel='PREV'
          nextLabel='NEXT'
          pageRangeDisplayed={1}
          pageCount={totalPages}
          onPageChange={({ selected }) => setPage(selected + 1)}
          renderOnZeroPageCount={null}
          previousClassName='flex items-center justify-center capitalize   w-[70px] h-[30px] rounded-sm  border-[1px]  bg-transparent   tracking-wide cursor-pointer  text-xs hover:bg-gray-300 transition duration-300 ease-in'
          nextClassName='flex items-center justify-center capitalize   w-[70px] h-[30px] rounded-sm  border-[1px]  bg-transparent   tracking-wide cursor-pointer text-xs hover:bg-gray-300 transition duration-300 ease-in'
          containerClassName='flex justify-center items-center mx-auto space-x-2'
          pageLinkClassName='flex items-center justify-center capitalize   w-[30px] h-[30px] rounded-sm  border-[1px]  bg-transparent text-xs'
          activeClassName='bg-yellow-400 text-white  transition-all duration-300 ease-in-out'
        />
      </div>
        </>
  )
}

export default ProductFeed
