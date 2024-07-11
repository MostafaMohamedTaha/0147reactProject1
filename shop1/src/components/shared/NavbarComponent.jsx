import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { VscAccount } from "react-icons/vsc";

import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { useTranslation } from 'react-i18next';//todo edit here
// import { SidebarContext } from '../helper/SidebarProvider';
// import { CartContext } from '../helper/CartProvider';
import { AiOutlineShopping } from "react-icons/ai";
import LanguageSelector from '../provider/languageSelector';
const NavbarComponent = () => {
    // const { t, i18n } = useTransition(); //todo edit here
    // const lngs = {
    //     ar: { name: "arabic" },
    //     en: { name: "english" },
    // }
    // const { isOpen, setIsOpen } = useContext(SidebarContext)
    // const { cartAmount } = useContext(CartContext)
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })
    const { t, i18n } = useTranslation(); //todo edit here

    const lngs = {
        ar: { name: "arabic" },
        en: { name: "english" },
    }
    return (
        <div className='m-0'>
            <header >
                <div className='h-full'>
                    <Navbar fluid className={`${isActive ? 'bg-sky-800 text-white' : 'bg-white '} fixed z-10 top-0  transition-all w-full`}>
                        <NavbarBrand>
                            <img src="https://picsum.photos/2000/1100" className=" h-6 w-6 rounded-full " alt="Flowbite React Logo" />
                        </NavbarBrand>
                        <NavbarToggle />
                        <NavbarCollapse>
                            <Link className='dark:text-gray-400 mx-2' to='/' >
                            {t('home')}
                            </Link>
                            <Link className='dark:text-gray-400' to='/product'>{t('home')}</Link>
                            <Link className='dark:text-gray-400' to='/product/1'>{t('home')}</Link>
                            <Link className='dark:text-gray-400' to='/product/2'>{t('home')}</Link>
                            <Link className='dark:text-gray-400' to='/product/3'>{t('home')}</Link>
                        </NavbarCollapse>
                        <div className='flex gap-2'>
                            <Flowbite>
                                <DarkThemeToggle />
                            </Flowbite>
                            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <VscAccount className='text-xl' />
                            </button>
                            <button onClick={() => setIsOpen(!isOpen)} className="max-w-[50px] relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                <AiOutlineShopping className='text-2xl' />
                                {/* <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[2em] h-[2em] text-white rounded-full flex justify-center items-center border-white border-2'>
                                    {cartAmount}
                                </div> */}
                            </button>
                        </div>

                    </Navbar>
                    {/* <h1 >{t('Welcome to React')}</h1>

                    <div className='flex justify-center gap-4'>
                        {Object.keys(lngs).map(x => (
                            <button key={x} onClick={() => i18n.changeLanguage(x)} disabled={i18n.resolvedLanguage === x} className='bg-teal-600 px-3 py-1 rounded-xl text-white'>{lngs[x].name}</button>
                        ))}
                    </div>
                    <LanguageSelector lngs={lngs} i18n={i18n} /> */}
                </div>
            </header>
            <div className='mt-[5em] mb-[1em]'>

                {/* <div className='flex justify-center gap-4'>
                    {Object.keys(lngs).map(x => (
                        <button key={x} onClick={() => i18n.changeLanguage(x)} disabled={i18n.resolvedLanguage === x} className='bg-black px-3 py-1 rounded-xl text-white'>{lngs[x].name}</button>
                    ))}
                </div> */}
                <LanguageSelector lngs={lngs} i18n={i18n} />
            </div>
        </div>
    )
}

export default NavbarComponent
