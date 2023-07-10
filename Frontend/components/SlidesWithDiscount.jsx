import SwiperCore, { Virtual, Navigation, Pagination, FreeMode, Thumbs, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/legacy/image';
import { TbCurrencyNaira } from 'react-icons/tb';
import { useRouter } from 'next/router';
// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

function SlidesWithDiscount({ slides, products, discount}) {
  const router = useRouter();

  return (
    <div>
        <Swiper watchSlidesProgress={true} slidesPerView={slides} spaceBetween={10} className="mySwiper overflow-x-scroll">
        {products.map(product=> (
           <SwiperSlide key={product.id} onClick={() => router.push(`/products/${product.id}`)} className='cursor-pointer'> 
             <div className='relative h-[120px] w-full m-auto  overflow-hidden shadow-sm'>
                 <Image src={product.image_url} alt={product.title} layout='fill' objectFit='cover' priority />
             </div>
             <div className="capitalize text-xs pt-1 w-[90%] pb-2">
                 <p className="font-poppins">
                      {product.title}
                 </p>
                 {discount ? 
                 <>
                            <p className='flex items-center space-x-2 S font-changa'><TbCurrencyNaira  className="w-4 h-4"/>{((product.price - (product.price / 2))).toLocaleString()}</p>
                 <p className='flex items-center space-x-2 text-[10px] text-gray-600 font-changa line-through'><TbCurrencyNaira  className="w-3 h-4"/>{(product.price).toLocaleString()}</p>
                 </>
                 :
                   <p className='flex items-center space-x-2 S font-changa'><TbCurrencyNaira  className="w-4 h-4"/>{((product.price))}</p>
                }
             </div>
          </SwiperSlide> 
        ))} 
      </Swiper>
    </div>
  )
}

export default SlidesWithDiscount