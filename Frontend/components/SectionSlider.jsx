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
// import './styles.css';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

 function SectionSlider({sectionTitle, products}) {
  const router = useRouter()
  
  const [loading, setLoading] = useState(true)
  
  const loadingContent = [1,2,3,4,5,5,7]






  return (
    <div className='my-5 lg:hidden'>
      {loading ?
      <>
      <div className="flex items-center py-2 px-3 justify-between bg-gray-300 p-2 text-gray-700  mb-2 ">
          <p className="font-bold uppercase ">{sectionTitle}</p>
          <p className="capitalize text-xs">show all product</p>
      </div>
        <div className='relative h-[120px] w-[90%] m-auto rounded-md overflow-hidden'>
     <Swiper watchSlidesProgress={true} slidesPerView={2} spaceBetween={10} className="mySwiper overflow-x-scroll">
        {products.map(product=> (
           <SwiperSlide key={product.id} onClick={() => router.push(`/products/${product.id}`)} > 
             <div className='relative h-[100px] w-full m-auto rounded-md overflow-hidden shadow-sm'>
                 <Image src={product.image_url} alt={product.title} layout='fill' objectFit='cover' priority />
             </div>
             <div className="capitalize text-xs pt-1  flex items-center justify-between m-auto w-[90%] ">
                 <p className="">
                      {product.title}
                 </p>
                 <p className='flex items-center space-x-2'><TbCurrencyNaira  className="w-4 h-4"/>{(product.price).toLocaleString()}</p>
             </div>
          </SwiperSlide> 
        ))} 
      </Swiper>
      </div>
        </>
      : 
      <>
        <div className="w-full h-[40px] mb-3  bg-gray-300 z-30 shadow-xl transition-all duration-500 linear animate-pulse">
      <div className='absolute h-full w-10  bg-white pulse overflow-hidden z-[40] rounded-md'>
      </div>
      </div>
        <Swiper watchSlidesProgress={true} slidesPerView={2} className="mySwiper overflow-x-scroll">
        {loadingContent.map((product, index)=> (
        <SwiperSlide key={index} >
        <div className='relative w-[90%] flex flex-col  bg-white z-30 shadow-xl transition-all duration-500 linear animate-pulse'>
          <div className='absolute h-full w-10  bg-white pulse overflow-hidden z-[40] rounded-md'></div>
          <div className='relative w-full h-[100px] bg-gray-300  overflow-hidden '></div>
          <div className="flex items-center justify-between px-2">
          <div className='my-1   h-4 w-[65%] bg-gray-300 rounded-md'></div>
          <div className='my-1  h-4 w-[25%] bg-gray-300 rounded-md'></div>
          </div>
        </div>
        </SwiperSlide>
          ))}
  </Swiper>
      </>
      }
    </div>
  );
}
export default SectionSlider