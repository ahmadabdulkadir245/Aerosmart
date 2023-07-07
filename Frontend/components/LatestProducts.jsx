import React, { useEffect, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination, FreeMode, Thumbs, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/legacy/image';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useRouter } from 'next/router';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
// import './styles.css';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

 function LatestProducts({ products}) {
  const router = useRouter()

  return (
    <div className='my-5 mb-10'>
      {/* <div className="flex items-center py-2 px-3 justify-between bg-gray-300 p-2 text-gray-700  mb-2 ">
          <p className="font-bold uppercase ">{sectionTitle}</p>
          <p className="capitalize text-xs">show all product</p>
      </div> */}
      <h2 className="capitalize text-xl font-poppins mb-5 text-gray-800">Featured Products </h2>
        <div className='relative  w-full m-auto rounded-md overflow-hidden'>
     <Swiper watchSlidesProgress={true} slidesPerView={6}  className="mySwiper overflow-x-scroll cursor-pointer">
        {products.map(product=> (
           <SwiperSlide key={product.id} onClick={() => router.push(`/products/${product.id}`)} > 
             <div className='relative h-[150px] w-[200px] m-auto rounded-md overflow-hidden shadow-sm'>
                 <Image src={product.image_url} alt={product.title} layout='fill' objectFit='cover' priority />
             </div>
             <div className="flex space-x-2 mt-3 justify-center">
                <BsStarFill className='text-yellow-500 h-3'/>
                <BsStarFill className='text-yellow-500 h-3'/>
                <BsStarFill className='text-yellow-500 h-3'/>
                <BsStarFill className='text-yellow-500 h-3'/>
                <BsStarHalf className='text-yellow-500 h-3'/>
             </div>
             <div className="capitalize text-xs pt-1 text-center w-[90%] ">
                 <p className="line-clamp-1">
                      {product.title}
                 </p>
                 <p className='flex items-center space-x-2 justify-center text-sm'><TbCurrencyNaira  className="w-3 h-3"/>{(product.price).toLocaleString()}</p>
             </div>
          </SwiperSlide> 
        ))} 
      </Swiper>
      </div>
          
          {/* <div className="flex justify-between space-x-8 my-5">
            <div className="bg-gray-200 h-[200px] w-[50%] rounded-md"></div>
            <div className="bg-gray-200 h-[200px] w-[50%] rounded-md"></div>
          </div> */}
    </div>
  );
}
export default LatestProducts