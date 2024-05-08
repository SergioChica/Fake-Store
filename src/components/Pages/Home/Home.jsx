import React, { useState, useEffect } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from "../../Layouts/Main/Main";


import { Cards } from '../../Cards/Cards';

import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5"

export const Home = () => {

    const [isFixed, setIsFixed] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [viewMenu, setViewMenu] = useState(false);
    const [dataProduct, setDataProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> {
                setDataProduct(data)
            })
        .catch(error=> {
            console.log('Error fetch data',error)
        })
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 107) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            // Verificar si la ventana está por debajo de 921 píxeles
            if (window.innerWidth < 921) {
                setIsSmallScreen(true); // Establecer como pantalla pequeña
            } else {
                setIsSmallScreen(false); // Establecer como pantalla grande
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

    return (
        <>
            <Header>
                <div className='h-full w-[90%] flex items-center justify-between '>
                    <div className='font-bold text-[24px] '>
                        <h1>Lumière</h1>
                    </div>
                    <div className=' '>
                        <div className='h-[40px] flex items-center gap-[7px] bg-gray-200 p-[15px] pl-0 rounded-[30px] '>
                            <div className='h-[40px] w-[40px] flex justify-center items-center rounded-[30px] hover:bg-gray-300 cursor-pointer '>
                                <button className=' '><FaSearch /></button>
                            </div>
                            <input type="text" className=' bg-gray-200 border-none focus:outline-none  ' />
                        </div>
                        {/* Space for more options */}
                    </div>
                </div>
            </Header>
            <Main>
                <div className='h-full w-[90%] flex flex-1 flex-col'>
                    <div className={isSmallScreen ? 'block' : 'hidden'}>
                        <div className={isFixed ? 'h-[60px] w-[90%] flex justify-end items-center font-medium fixed bg-white top-0' : 'h-[60px] w-full flex justify-end items-center font-medium bg-white'}>
                            <button className=' h-[60%] w-[15%] bg-gray-200 rounded-[30px] md:w-[30%] ' onClick={() => setViewMenu(true)}>Ordenar por</button>
                        </div>
                    </div>
                    <div className=' h-full w-full flex flex-1 '>
                        <div className={isSmallScreen ? 'hidden' : 'block'}>
                            <section className={isFixed ? 'w-[200px] h-full bg-white font-medium flex flex-1 flex-col gap-[30px] fixed top-[10px] ' : 'w-[200px] bg-white font-medium flex flex-col gap-[30px] pt-[10px] '} >
                                <div className=' flex flex-col gap-[5px] '>
                                    <h2 className='font-bold'>Filtrar por:</h2>
                                    <p className='cursor-pointer'>Categoria</p>
                                    <p className='cursor-pointer'>Peso</p>
                                </div>
                                <div className=' flex flex-col gap-[5px] '>
                                    <h2 className='font-bold'>Ordenar por:</h2>
                                    <p className='cursor-pointer'>Por defecto</p>
                                    <p className='cursor-pointer'>De mayor a menor</p>
                                    <p className='cursor-pointer'>De menor a mayor</p>
                                </div>
                            </section>
                        </div>
                        <section className={isFixed ? 'w-full flex flex-wrap gap-[5%] 2xl:gap-[5%] pl-[200px] xl:gap-[5%] lg:pl-0 md:gap[6%] ' : ' w-full gap-[5%] 2xl:w-[1014px] flex flex-wrap 2xl:gap-[5%] xl:gap-[5%] md:gap[6%] '} >
                            {dataProduct.map(product => (
                                <Cards
                                    key={product.id}
                                    title={product.title}
                                    category={product.category}
                                    price={product.price}
                                    img={product.image}
                                />
                            ))}
                        </section>
                    </div>
                </div>
            </Main>
            <div className={viewMenu ? 'fixed top-0 left-0 w-full h-full flex items-end bg-[#00000080] z-10' : 'hidden' }>
                <div className='w-full h-full bg-white flex justify-center pt-[60px] animate-filter relative '>
                    <IoClose fontSize={50} className='absolute top-[20px] right-[5%] cursor-pointer ' onClick={() => setViewMenu(false)} /> 
                    <div className=' w-[100%] flex flex-col gap-[30px] pl-[60px] '>
                        <div className=' flex flex-col gap-[5px] '>
                            <h2 className='font-bold text-[24px]'>Filtrar por:</h2>
                            <p className='cursor-pointer text-[18px] font-medium'>Categoria</p>
                            <p className='cursor-pointer text-[18px] font-medium'>Peso</p>
                        </div>
                        <div className=' flex flex-col gap-[5px] '>
                            <h2 className='font-bold text-[24px]'>Ordenar por:</h2>
                            <p className='cursor-pointer text-[18px] font-medium '>Por defecto</p>
                            <p className='cursor-pointer text-[18px] font-medium'>De mayor a menor</p>
                            <p className='cursor-pointer text-[18px] font-medium'>De menor a mayor</p>
                        </div>
                    </div>
                    <div className=' absolute bottom-[10%] w-full h-[8%] flex justify-center items-center '>
                        <button className=' w-[20%] h-full bg-gray-200 rounded-[30px] font-semibold md:w-[30%] ' onClick={() => setViewMenu(false)} >Aceptar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
