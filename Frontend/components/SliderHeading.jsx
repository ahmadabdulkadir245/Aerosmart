import React from 'react'
import Link from 'next/link'

function SliderHeading({sectionTitle, bgColor, path}) {
  return (
    <div className={`flex items-center  px-3 justify-between  p-2 ${bgColor ? bgColor : 'bg-white'} text-gray-700 shadow-sm`}>
    <p className="font-bold uppercase ">{sectionTitle}</p>
    <Link href={path} className="capitalize text-xs text-yellow-400">show all prouducts</Link>
</div>
  )
}

export default SliderHeading