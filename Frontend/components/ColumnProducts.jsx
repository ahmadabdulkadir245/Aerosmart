import Image from 'next/legacy/image'
import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { TbCurrencyNaira } from 'react-icons/tb'

function ColumnProducts({key, id, image_url, title, price, description}) {
  return (
    <div  className=" flex  space-x-3 my-3" key={id}>
    <div className='h-[200px] w-[150px] bg-gray-200'>
        <div className='relative h-[200px] w-[150px]'>
            <Image src={image_url} alt={title} layout="fill" objectFit='contain'/>
        </div>
            </div>

        <div className='grid place-content-center'>
            <p className="uppercase font-poppins line-clamp-1">{title}</p>
        <p className='h-[80px] text-sm line-clamp-5'  dangerouslySetInnerHTML={{ __html: description }} 
      />

      <p className="flex items-center space-x-2 text-sm">
        <BsStarFill className='h-6 text-yellow-500'/>
        <BsStarFill className='h-6 text-yellow-500'/>
        <BsStarFill className='h-6 text-yellow-500'/>
        <BsStarFill className='h-6 text-yellow-500'/>
      </p>
      <p className="flex items-center text-sm"><TbCurrencyNaira  className="w-4 h-4"/>{price.toLocaleString()}</p>
      <p  className='text-sm'>ship to Kaduna</p>

        </div>
    </div>
  )
}

export default ColumnProducts