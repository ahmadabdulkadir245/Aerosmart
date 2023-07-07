import { useState } from "react";
import { useEffect } from "react";

function SearchSuggesstions({searchWord, pressToSearchHandler}) {
  const [products, setProducts] = useState([])
    useEffect(() => {
      if(searchWord.length > 2) {

          let graphqlQuery  = {
            query: `
            {
              searchList(word: "${searchWord}") {
               searchList {
                id
                title
              }
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
              const recievedData = productData.data?.searchList?.searchList || []
              recievedData.reverse()
              setProducts(recievedData)
            })
        }
      }, [searchWord])
  return (
    <div className={`${searchWord.length > 2 ? '' : 'hidden'} relative bg-gray-50 px-3 text-gray-700  w-full max-w-5xl  text-xs font-poppins mx-auto h-[30vh] rounded-b-lg shadow-lg overflow-y-scroll mb-3 z-50 scrollbar-hide transition-all duration-500 ease-in`}>
        {products.map((searchTitle, index) => (
    <p key={searchTitle.id} className="py-2 capitalize cursor-pointer" onClick={pressToSearchHandler.bind(this, searchTitle.title)}>
      {searchTitle.title}
    </p>
        ))}

  </div>
  )
}

export default SearchSuggesstions