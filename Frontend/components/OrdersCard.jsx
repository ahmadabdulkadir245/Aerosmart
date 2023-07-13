import Image from 'next/legacy/image'
import { TbCurrencyNaira } from 'react-icons/tb'

function OrdersCard({ total,orders,}) {
  console.log(orders)
  const imageSlider = [1,2,3]
  return (
    <div className="">
    <div className="flex justify-between items-center bg-gray-300 p-2 rounded-t-sm mt-2 space-x-2">
        <div className="">
            <h2 className='uppercase font-semibold'>order placed</h2>
            22 May 2023 
        </div>
        <div className="">
            <h2 className='uppercase font-semibold'>total</h2>
            <div className='  font-primary  flex items-center  text-xs  mt-[2px] text-gray-800'>
    <TbCurrencyNaira  className="w-4 h-4 text-gray-600"/>{total}
  </div>
        </div>
        <div className="">
            <h2 className='uppercase font-semibold'>order id: #djfldsjfs</h2>
            <p>{orders.length} items</p> 
        </div>
    </div>

    <div className="flex justify-between items-center overflow-x-scroll w-full bg-white p-2 scrollbar-hide">
    <div className="flex items-center space-x-2 my-1 w-full      lg:my-2 lg:w-[200px]   scrollbar-hide">
{orders.map((order, index) => (

<div key={index} className="relative   w-[100px] min-w-[80px] h-[60px]  overflow-hidden rounded-md border-[3px]  cursor-pointer hover:border-blue-500 p-4">
<Image src={order.image_url} alt={'order'} layout="fill" objectFit="cover"/>
</div>
))}
</div>
    </div>

</div>
  )
}

export default OrdersCard