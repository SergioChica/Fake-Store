import React from 'react'

export const Cards = () => {
  return (
    <div className=' w-[30%] h-[30%] 2xl:w-[30%] 2xl:h-[30%] bg-gray-100 rounded-b-[10px] pb-[10px] xl:w-[30%] xl:h-[30%] md:w-[47%] md:h-[24%] '>
        <div className='w-full h-[78.7%] md:h-[68%] '>
        <img className='w-full h-full object-fill' src="https://img.freepik.com/fotos-premium/joyas-diamantes-joya-cristal-joya-piedra-brillante-lujo-aislado-blanco-gema-preciosa_851808-477.jpg" alt="" />
        </div>
        <div className='flex flex-col gap-[6px] pl-[2px]'>
            <p className='font-medium'>Diamante</p>
            <p className='text-gray-500'>Diamante Puro - Calidad </p>
            <p className='font-medium'>39,5 col</p>
        </div>
    </div>
  )
}
