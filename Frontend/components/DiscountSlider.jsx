import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SlidesWithDiscount from './SlidesWithDiscount';
import SliderHeading from './SliderHeading';


 function DiscountSlider({sectionTitle, products}) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const loadingContent = [1,2,3,4,5,5,7]

  const slideCounts = {
    sm: 2,
    md: 4,
    lg: 6
  };
  const [slideCount, setSlideCount] = useState(slideCounts.sm);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newSlideCount = slideCounts.sm;

      if (innerWidth >= 768 && innerWidth < 1024) {
        newSlideCount = slideCounts.md;
      } else if (innerWidth >= 1024) {
        newSlideCount = slideCounts.lg;
      }

      setSlideCount(newSlideCount);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='my-5 '>
      {loading ?
      <>
          <SliderHeading path={'/'} sectionTitle={'discount products'} />
        <div className='relative  w-full overflow-hidden px-3 bg-white'>
     
        <SlidesWithDiscount prouductsProps={products} slides={slideCount}/>
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
export default DiscountSlider