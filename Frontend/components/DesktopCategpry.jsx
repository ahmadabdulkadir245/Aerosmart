import React from 'react'

function DesktopCategpry() {
    const categories = [
        {
        id: 1,
        cateogry: 'Bricks',
        Image: 'image',
        items: 7
        },
        {
        id: 2,
        cateogry: 'Tiles',
        Image: 'image',
        items: 13
        },
        {
        id: 3,
        cateogry: 'Plumbing',
        Image: 'image',
        items: 26
        },
        {
        id: 4,
        cateogry: 'Cement',
        Image: 'image',
        items: 4
        },
        {
        id: 5,
        cateogry: 'Sanitary Ware',
        Image: 'image',
        items: 30
        },
        {
        id: 6,
        cateogry: 'Stones',
        Image: 'image',
        items: 20
        },
        {
        id: 7,
        cateogry: 'Bricks',
        Image: 'image',
        items: 20
        },
        {
        id: 8,
        cateogry: 'Furniture',
        Image: 'image',
        items: 12
        },
]
  return (
    <div  className='grid grid-cols-4 gap-8 mx-auto max-w-7xl bg-white p-6 my-10 font-poppins text-gray-800'>
        {categories.map(category => (
            <div className="bg-white" key={category.id}>
                <div className='flex justify-between items-center text-xs cursor-pointer'>
                    <div>
                    <p className='text-sm tracking-wide'>{category.cateogry}</p>
                    <p className="text-gray-400">
                        {category.items} items
                    </p>
                        </div>  
                    <div className="bg-gray-300 w-[120px] h-[80px] rounded-md"></div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default DesktopCategpry