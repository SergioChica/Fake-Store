import React from 'react'

export const Cards = ({title,category,price,img}) => {
  return (
    <div className=' w-[30%] h-[30%] 2xl:w-[30%] 2xl:h-[30%] bg-gray-100 rounded-b-[10px] pb-[10px] xl:w-[30%] xl:h-[30%] md:w-[47%] md:h-[24%] '>
        <div className='w-full h-[78.7%] md:h-[68%] '>
        <img className='w-full h-full object-fill' src={img} alt="" />
        </div>
        <div className='flex flex-col gap-[6px] pl-[2px]'>
            <p className='font-medium'>{title}</p>
            <p className='text-gray-500'>{category}</p>
            <p className='font-medium'>{price} col</p>
        </div>
    </div>
  )
}
