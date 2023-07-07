import { useRouter } from "next/router"
import {  BiSort } from "react-icons/bi"
import { BsGrid1X2Fill } from "react-icons/bs"
import { HiOutlineFilter } from "react-icons/hi"
import Header from "../../components/Header"
import Products from "../../components/Products"
import { useEffect, useState } from "react"
import ColumnProducts from "../../components/ColumnProducts"
import ReactPaginate from "react-paginate"


function SearchResultPage() {
    const router = useRouter()
    const [totalPages, setTotalPages] = useState(1)
    const [page, setPage] = useState(1)
    const perPage = 1
    const searchResult = router.query.searchResult
    const [searchProducts, setSearchProducts] = useState([])
    useEffect(() => {
      const graphqlQuery  = {
        query: `
        {
          search(word: "${searchResult}", page: ${page}, perPage: ${perPage} ) {
           search {
           id
           title
           description
           price
           image_url
          }
          totalPages
          }
        }
        `
       }
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
          const recievedData = productData.data?.search?.search || []
          recievedData.reverse()
          const productPages = productData.data?.search.totalPages
          setSearchProducts(recievedData)
          setTotalPages(productPages)
        })
    }, [page, searchResult])

    const [grid, setGrid] = useState(true)
    const gridHandler = () => {
      setGrid(!grid)
    }

  return (
    <>
    <Header/>
    <div className="px-3 py-4 text-gray-500">
      <h2 className="text-center uppercase pb-2">{searchResult}</h2>
      <div className="flex justify-between items-center uppercase bg-gray-300 p-2 text-gray-700 ">
        <div className="flex  items-center space-x-2 cursor-pointer">
        <BsGrid1X2Fill className="h-5 w-5"/>
        <p onClick={gridHandler}>
          {grid ? "grid" : "column"}
          </p>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <BiSort className="h-5 w-5"/> 
          <p>Sort</p>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <HiOutlineFilter className="h-5 w-5"/>
          <p>Filter</p>
        </div>
      </div>
        
        {/* display products */}
    {grid ?
     <div className='grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto m-2 gap-2  md:px-4 pt-2'>
     {searchProducts.map(({ id, title, price, description, image_url }) => (
     <Products
     key={id}
     id={id}
     title={title}
       price={price}
       description={description}
       image_url={image_url}
       />
       ))}
       </div> 
     :
     <div className="mt-2 ">
       {searchProducts.map(({ id, title, price, description, image_url }) => (
         <ColumnProducts
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        image_url={image_url}
      />
      ))}
     </div>
      }      
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

export default SearchResultPage 
