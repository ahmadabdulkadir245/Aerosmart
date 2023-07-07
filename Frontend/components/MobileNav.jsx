import { BiSearchAlt } from "react-icons/bi"

function MobileNav({showSearch, searchWord, searchHandler, searchIconHandler}) {
  return (
    <>
         {showSearch ? (
              <div className={`lg:hidden bg-gray-50 pt-2 pb-4 px-[10px] -mt-3 ${searchWord.length > 2 ? '' : 'shadow-lg'} relative`}>
                <div className='flex items-center m-auto h-12 rounded-md flex-grow cursor-pointer bg-yellow-400  hover:bg-yellow-400'>
                  <input
                    type='text'
                    className='px-2 py-[24px] h-full w-6 flex-grow  flex-shrink rounded-l-md focus:outline-none bg-gray-300 font-primary text-gray-700 text-sm'
                    placeholder='search on Aerosmart'
                    value={searchWord}
                    onChange={searchHandler}
                  />
                    <BiSearchAlt className='h-12 w-12 p-3  text-gray-500 transition duration-200 ease-in' 
                   onClick={searchIconHandler} 
                    />
                </div>
              </div>
            ) : (
              ""
            )}

    </>
  )
}

export default MobileNav