import React from 'react'

const CategoryIcon = ({Icon, title}) => {
  return (
    <div className="w-[20%] text-center">
    <Icon className="w-6 h-6 lg:hidden m-auto"/>
    <p className="capitalize py-1">{title}</p>
    </div>
  )
}

export default CategoryIcon