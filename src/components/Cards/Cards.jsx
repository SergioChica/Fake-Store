import React, { useState,useEffect } from 'react'

export const Cards = ({ title, category, price, img, description }) => {

  const [hover, setHover] = useState(false);
  const [hoverPhone, setHoverPhone] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
        // Verificar si la ventana está por debajo de 921 píxeles
        if (window.innerWidth < 768) {
          setHoverPhone(true); // Establecer como pantalla pequeña
        } else {
          setHoverPhone(false); // Establecer como pantalla grande
        }
    };

    // Verificar el tamaño de la ventana al principio
    handleResize();

    // Agregamos un listener para detectar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

  const handdleMouseOver = () => {
    setHover(true);
  }

  const handdleMouseOut = () => {
    setHover(false);
  }

  return (
    <div className=' w-[21%] h-[14%] 2xl:w-[30%] 2xl:h-[12%] bg-gray-100 rounded-t-[10px] rounded-b-[2%] xl:w-[30%] xl:h-[12%] md:w-[47%] md:h-[9%] shadow-md relative ' onMouseOver={handdleMouseOver} onMouseOut={handdleMouseOut} >
      <div className={ hoverPhone ? 'absolute bottom-[2%] w-full flex justify-center items-center  ' : 'hidden'}>
      <button className=' w-[40%] xl:w-[50%] h-[40%] rounded-[10px] bg-[#70A3D8] text-white'>Click here</button>
      </div>
      <div className='w-full h-full md:h-[90%] '>
        <img className='w-full h-full object-fill rounded-t-[10px]' src={img} alt="" />
      </div>
      <div className={hover ? 'absolute flex flex-col justify-end gap-[6px] top-0 w-full h-full bg-[#00000080] shadow-md rounded-t-[10px] rounded-b-[2%]' : 'hidden'}>
        <div className='flex flex-col gap-[24px] xl:gap-[16px] pt-[1rem] pl-[1rem] pr-[1rem] w-full h-[75%] bg-gray-100 animate-cards rounded-b-[2%]'>
          <div className=' flex justify-between items-center '>
            <p className='font-medium '>{title}</p>
            <p className='text-gray-500'>{category}</p>
          </div>
          <p className='h-[100px] overflow-y-auto break-words'>{description}</p>
          <div className='flex flex-col gap-1 pb-[10px] xl:gap-2 '>
            <p className='font-medium text-[20px] '>{price} USD</p>
            <div className=' flex justify-end '>
              <button className='bottom-[3%] w-[40%] xl:w-[50%] h-[100%] rounded-[10px] bg-[#70A3D8] text-white'>Add card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
