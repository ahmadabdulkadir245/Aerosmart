import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SlidesWithDiscount from './SlidesWithDiscount';
import SliderHeading from './SliderHeading';
import Link from 'next/link';


 function ProductSlider({sectionTitle, products, path, bgColor, discount}) {
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
  }, [slideCounts.lg, slideCounts.sm,slideCounts.md]);


  return (
    <div className='my-5 '>

        <div className={`flex items-center  justify-between  p-2 px-3 ${bgColor ? bgColor : 'bg-white'} text-gray-700 shadow-sm`}>
    <p className="font-bold uppercase ">{sectionTitle}</p>
    <Link href={path} className="capitalize text-xs ">show all</Link>
</div>
        <div className='relative  w-full overflow-hidden px-3 pt-2 bg-white'>

        <SlidesWithDiscount products={products} slides={slideCount} discount={discount}/>
      </div>
    </div>
  );
}
export default ProductSlider