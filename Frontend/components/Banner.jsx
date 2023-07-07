import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Thumbs } from "swiper";
import Image from 'next/legacy/image'


function Banner() {
  const [banners, setBanners] = useState([])
    const [swiperLoaded, setSwiperLoaded] = useState(false);
  const page = 1
  useEffect(() => {
    setSwiperLoaded(true);
    const graphqlQuery = {
      query: `
      {
        banners {
          banners{
            id
            category
            image
          }
        }
      }
      `
    };
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
      .then(bannerData => {
        const recievedData = bannerData.data?.banners?.banners || []
        recievedData.reverse()
        setBanners(recievedData)
      })
  }, [])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 400);
  }, []);

  
  return (
    <div className='w-full px-[10px] max-w-8xl  lg:flex justify-between  m-auto lg:space-x-3  mt-2 lg:mt-8 transition-all duration-700 ease-out lg:px-[50px]'>
    {loading ?
    <>
    <Swiper
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Pagination, Thumbs]}
      className="mySwiper"
    >
      <div className="relative w-full h-[300px] lg:w-[600px] overflow-hidden m-auto  lg:m-0 rounded-md "
        // suppressHydrationWarning
      >
        {banners.map(banner => (
        <SwiperSlide key={banner.id} >
            <div className='relative  w-full h-[300px]  rounded-md  lg:hidden'>
          <Image src={banner.image} 
          alt={banner.id} priority  className="rounded-md " layout="fill" objectFit="cover" />
            </div>
            <div className="hidden lg:block">
          <Image src={banner.image} 
          alt={banner.id} width={700} height={580} priority  className="rounded-md"  />
            </div>
      </SwiperSlide>
        ))}
    </div>
    </Swiper>

    <div className="hidden lg:block space-y-4">
      <div className="bg-gray-300 w-[335px] h-[220px] rounded-md "></div>
      <div className="bg-gray-300 w-[335px] h-[220px] rounded-md "></div>
    </div>
    <div className="hidden lg:block space-y-4">
      <div className="bg-gray-300 w-[335px] h-[220px] rounded-md "></div>
      <div className="bg-gray-300 w-[335px] h-[220px] rounded-md "></div>
    </div>
        </>

  : 
  <div className='re250ive h-[300px] w-[95%] m-auto rounded-md bg-gray-400 overflow-hidden animate-pulse transition-all duration-500 linear'>
  <div className='absolute h-full w-10  bg-white pulse overflow-hidden z-[40]'></div>
          <div className="relative top-[90%] flex  justify-center  space-x-3  bottom-5 ">
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
            <p className="w-[8px] h-[8px]  rounded-full bg-gray-500"></p>
          </div>
            </div>
  }
  </div>
  )
}

export default Banner