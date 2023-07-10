import React, { useEffect, useState } from 'react'
import CardLoading from './CardLoading'

function HomeLoading() {
    const cards = {
        sm: [1,2,3,4,5,6,7,8],
        md: [1,2,3,4,5,6,7,8,9,10,11,12],
        lg:  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
      };
      const [card, setCard] = useState(cards.sm);
    
      useEffect(() => {
        const handleResize = () => {
          const { innerWidth } = window;
          let newCard = cards.sm;
    
          if (innerWidth >= 768 && innerWidth < 1024) {
            newCard = cards.md;
          } else if (innerWidth >= 1024) {
            newCard = cards.lg;
          }
    
          setCard(newCard);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [cards.lg, cards.sm,cards.md]);
  return (
    <div className='px-3'>
        
         <div className='relative flex flex-col  bg-white z-30 shadow-xl transition-all duration-500 linear animate-pulse h-[300px] '>
          <div className='absolute h-full w-10  bg-white pulse overflow-hidden z-[40] rounded-md'></div>
          <div className='relative w-full h-full bg-gray-300  overflow-hidden mt-3 rounded-md'></div>
        </div>

        <div className="w-full h-[60px] bg-gray-300 transition-all duration-500 linear animate-pulse flex justify-between px-3 space-x-3 mt-3 rounded-md">
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
        </div>

        <div className="w-full h-[60px] bg-gray-300 transition-all duration-500 linear animate-pulse flex justify-between px-3 space-x-3 mt-3 rounded-md">
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
            <div className="bg-gray-400 w-1/5 h-[70%] my-auto "></div>
        </div>

        <div className="w-full h-[150px] bg-gray-300 transition-all duration-500 linear animate-pulse flex  justify-evenly px-3 space-x-3 mt-3 rounded-md py-3">
            <div className="bg-gray-400 w-1/2 h-full "></div>
            <div className="bg-gray-400 w-1/2 h-full "></div>
        </div>
        <div className="flex  pt-1 px-3 bg-gray-300">
            <div className=' w-[140px] h-2 rounded-md z-20 bg-gray-200'></div>
            <div className='ml-[70px] w-[140px] h-2 rounded-md z-20 bg-gray-200'></div>
        </div>
        <div className="flex  pt-1 pb-3 px-3 bg-gray-300">
            <div className=' w-[100px] h-2 rounded-md z-20 bg-gray-200'></div>
            <div className='ml-[110px] w-[100px] h-2 rounded-md z-20 bg-gray-200'></div>
        </div>
        <div
    className='grid grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 m-2 gap-2 lg:gap-6 px-2 md:px-[25px] lg:px-0 mx-auto max-w-7xl'
  >
    {card.map((card, index) => (
    <CardLoading key={index} />
    ))}
             </div>

             <div className='relative flex flex-col   z-30 shadow-xl transition-all duration-500 linear animate-pulse h-[500px] '>
          <div className='absolute h-full w-10  bg-white pulse overflow-hidden z-[40] '></div>
          <div className='relative w-full h-full bg-gray-300  overflow-hidden mt-3 rounded-md'></div>
        </div>
    </div>
  )
}

export default HomeLoading