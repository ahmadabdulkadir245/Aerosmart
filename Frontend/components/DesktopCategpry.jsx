import Image from 'next/legacy/image'
import {useRouter} from 'next/router'

function DesktopCategpry() {
    const router = useRouter()
    const categories = [
        {
        id: 1,
        category: 'agriculture materials',
        Image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 7
        },
        {
        id: 2,
        category: 'bricks, blocks & kerbs',
        Image: 'https://images.pexels.com/photos/6473984/pexels-photo-6473984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 13
        },
        {
        id: 3,
        category: 'building materials',
        Image: 'https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 26
        },
        {
        id: 4,
        category: 'concrete, cement & stones',
        Image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 4
        },
        {
        id: 5,
        category: 'doors',
        Image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 30
        },
        {
        id: 12,
        category: 'electrical items',
        Image: 'https://images.pexels.com/photos/1616472/pexels-photo-1616472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 12
        },
        {
        id: 6,
        category: 'paint',
        Image: 'https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 20
        },
        {
        id: 7,
        category: 'plumbing',
        Image: 'https://images.pexels.com/photos/8793484/pexels-photo-8793484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 20
        },
        {
        id: 8,
        category: 'roof covering',
        Image: 'https://images.pexels.com/photos/2663254/pexels-photo-2663254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 12
        },
        {
        id: 9,
        category: 'tiles',
        Image: 'https://images.pexels.com/photos/1652544/pexels-photo-1652544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 30
        },
        {
        id: 10,
        category: 'windows',
        Image: 'https://images.pexels.com/photos/16812664/pexels-photo-16812664/free-photo-of-facade-of-a-residential-block-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 20
        },
        {
        id: 11,
        category: 'wood',
        Image: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: 20
        },
]

  return (
    <div  className='grid grid-cols-4  gap-2 lg:gap-8 mx-auto max-w-7xl bg-white p-6 my-6 lg:my-20 font-poppins text-gray-800'>
        <div className="col-span-4">

       <h2 className="text-center uppercase text-xl font-poppins font-semibold tracking-wide [word-spacing:5px] lg:mt-10">products <span className="text-yellow-500">category</span></h2>
        <hr className=" bg-gray-400 my-2 " />
        </div>

        {categories.map(category => (
            <div className="bg-white grid grid-cols-1 grid-flow-row-dense  lg:grid-cols-4 xl:grid-cols-4   lg:gap-y-6 lg:gap-x-0 max-w-7xl" key={category.id} onClick={() => router.push(`/category/${category.category}`)}>
                <div className='col-span-1 lg:col-span-4 '>
                    <div className="lg:flex  space-x-4 items-center cursor-pointer">
                    <div className="relative bg-gray-300 w-full h-[80px] lg:w-[120px] md:h-[120px] lg:h-[80px] rounded-md overflow-hidden">
                        <Image src={category.Image} alt={category.category}  objectFit='cover' layout='fill' />
                    </div>
                    <div className='mt-1 lg:mt-0 '>
                    <p className='text-xs lg:text-sm tracking-wide capitalize mb-[2px]'>{category.category}</p>
                    <p className="text-gray-400 hidden lg:block text-xs">
                        {category.items} items
                    </p>
                        </div>  
                        </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default DesktopCategpry