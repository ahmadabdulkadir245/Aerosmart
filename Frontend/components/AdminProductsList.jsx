import Image from "next/legacy/image"
import { TbCurrencyNaira } from "react-icons/tb"
import {useRouter} from 'next/router'
import Link from "next/link"
import axios from 'axios'
import { useEffect } from "react"
import { useState } from "react"
import Loading from "./Loading"

function AdminProductsList({id, title, image_url, category, price, description, quantity, brand, setLoading}) {
  const router = useRouter()
  const deleteHandler = (id, e) => {
    e.preventDefault()
    setLoading(true)
    let graphqlQuery = {
      query: `
      mutation DeleteProduct($id: Int) {
        deleteProduct(id: $id)
      }
    `,
    variables: {
      id: Number(id)
    }
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
      .then(result => {
        setTimeout(() => {
          setLoading(false)
        }, 3000)
  })
  }



  return (
    < >
        <div className="relative w-full h-[120px] lg:h-[200px] my-2 transition-all duration-500 ease-in">
          <Image src={image_url} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="col-span-2">
          <p className="mb-1 text-center lg:text-left ">( {title} ) </p>
          <div className="hidden lg:inline-block">
      <div className="line-clamp-6 lowercase" dangerouslySetInnerHTML={{ __html: description }} 
      />
          </div>
        </div>
        <div className="hidden lg:flex  items-center space-x-2">
        <p>{category}</p>
        </div>
        <div className="hidden lg:flex  items-center space-x-1">
        <p><TbCurrencyNaira  className="w-4 h-4"/></p>
        <p>{price.toLocaleString()}</p>
        </div>

        <div className="hidden lg:block">
        <Link href={{ pathname: `/admin/add-product`, query: { prodId: id, title: title, oldImage: image_url, category: category, price: price, description: description, quantity: quantity, brand: brand }}}> 
        <button className="capitalize w-[90%] h-[38px] rounded-sm  border-[1px]  bg-transparent  m-auto tracking-wide cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out">EDIT</button>
        </Link>
        </div>

        <div className="space-y-3 lg:space-y-0">
        <div className="lg:hidden">
        <Link href={{ pathname: `/admin/add-product`, query: { prodId: id, title: title, oldImage: image_url, category: category, price: price, description: description, quantity: quantity, brand: brand }}}> 
        <button className="capitalize w-[90%] h-[38px] rounded-sm  border-[1px]  bg-transparent  m-auto tracking-wide cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out">EDIT</button>
        </Link>
        </div>
        
        <button className="capitalize w-[90%] h-[38px] rounded-sm  border-[1px] bg-transparent  m-auto tracking-wide cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out" onClick={deleteHandler.bind(this, id)}>DELETE</button>
        </div>
        <div className="w-full h-[1px] bg-gray-300 col-span-full"></div>

    </>
  )
}

export default AdminProductsList