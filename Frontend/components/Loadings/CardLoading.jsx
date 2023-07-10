
function CardLoading({key}) {
  return (
    <div key={key}>
           <div className='relative flex flex-col  bg-white z-30 shadow-xl transition-all duration-500 linear animate-pulse h-[250px]'>
          <div className='absolute h-full w-10  bg-white pulse overflow-hidden z-[40] rounded-md'></div>

          <div className='absolute top-2 right-2 w-12 h-2 rounded-md z-20 bg-gray-200'></div>
          <div className='relative w-full h-[150px] bg-gray-400  overflow-hidden '></div>
          <div className='mt-1  ml-2 h-4 w-[85%] bg-gray-300 rounded-md'></div>

          <button className=' my-2 mx-auto px-2 w-[90%] h-[60px]  bg-gray-300 rounded-md' >
          </button> 
        </div>

    </div>
  )
}

export default CardLoading