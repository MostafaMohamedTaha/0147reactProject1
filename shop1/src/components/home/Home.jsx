import { Carousel, NavbarLink } from "flowbite-react";
import React, { useContext } from 'react'
import { ProductContext } from "../provider/ProductProvider";
import {AiFillPlusCircle} from "react-icons/ai"
import {AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
const Home = () => {
    const { product } = useContext(ProductContext);
    const filterProducts = product.filter(x => {
        return (
            x.category === "men's clothing" || x.category == "women's clothing"
        )
    })
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-3 ">
            <Carousel className="rounded-2xl ">
                <img src="https://picsum.photos/2000/1100" alt="..." />
                <img src="https://picsum.photos/2000/1200" alt="..." />
                <img src="https://picsum.photos/2000/1300" alt="..." />
                <img src="https://picsum.photos/2000/1400" alt="..." />
                <img src="https://picsum.photos/2000/1500" alt="..." />
            </Carousel>
            <div className='mx-4 grid grid-cols-5 justify-center gap-3 '>
                {
                    filterProducts.map((x) => {
                        return (
                                <div >
                                    <div className="grid col-span-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " key={x.id}>
                                        <div className='hover:scale-110 transition duration-300 mt-6 rounded-lg  overflow-hidden group'>
                                            <div className='flex justify-center relative'>
                                                <img className=" h-[300px] rounded-t-lg max-w-[230px]" src={x.image} alt="product image" />
                                                <div className='flex flex-col justify-center gap-1 absolute group-hover:opacity-100 opacity-0 top-0  p-2 bg-red-600 rounded-lg text-white group-hover:right-5 -right-11 duration-300'>
                                                    <AiFillPlusCircle className='text-2xl' />
                                                    <Link to={`/product/${x.id}`} >
                                                        <AiFillEye className='text-2xl px-1 bg-white text-center text-gray-500 rounded-lg' />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className='px-5 pb-5'>
                                                <div>
                                                    <div className='text-sm font-semibold tracking-tight text-gray-400 dark:text-white'>{x.category}</div>
                                                    <h5 className="h-[100px] text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        {x.title}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-5 pb-5">
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${x.price}</span>
                                                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        )
                    })
                }
            </div>
        </div>

    )
}

export default Home



