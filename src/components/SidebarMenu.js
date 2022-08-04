import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { navHandler } from '../store/NavSlice'

const SidebarMenu = () => {
    const dispatch = useDispatch();
    const nav = useSelector((state) => state.nav.showNav)
    const hideNav = () => {
        dispatch(navHandler())
    }

    return (
        <>
            {nav && <div onClick={hideNav} className='w-full h-screen fixed m-0 p-0 bg-black/80 top-0 left-0 z-10'></div>}
            <div className={nav ? 'bg-white w-[300px] h-screen fixed z-10 top-0 left-0 duration-300 ease-in-out' : 'bg-white w-[300px] h-screen fixed z-10 top-0 left-[-100%] duration-300 ease-in-out'}>
                <AiOutlineClose size={30} onClick={hideNav} className='fixed top-4 left-4 cursor-pointer z-10' />
                <ul className='flex flex-wrap items-center flex-col mt-11 justify-evenly p-4 font-bold text-3xl '>
                    <Link to='/' onClick={hideNav}>
                        <li className='duration-300 ease rounded my-2 tracking-wider p-2 cursor-pointer hover:bg-black hover:text-white'>HOME</li>
                    </Link>
                    <Link to='/products' onClick={hideNav}>
                        <li className='duration-300 ease rounded my-2 tracking-wider p-2 cursor-pointer hover:bg-black hover:text-white'>SHOP</li>
                    </Link>
                    <Link to='/about-us' onClick={hideNav}>
                        <li className='duration-300 ease rounded my-2 tracking-wider p-2 cursor-pointer hover:bg-black hover:text-white'>ABOUT US</li>
                    </Link>
                    <Link to='/contact' onClick={hideNav}>
                        <li className='duration-300 ease rounded my-2 tracking-wider p-2 cursor-pointer hover:bg-black hover:text-white'>CONTACT</li>
                    </Link>
                </ul>
                <div className='flex flex-col justify-end h-[32%] items-center text-2xl mt-6'>
                    <Link to="/login" onClick={hideNav}>
                        <button className='px-4 my-1 pb-1 hover:text-white font-medium hover:bg-green-500 rounded duration-200 ease text-center'>Login</button>
                    </Link>
                    <Link to='/signup' onClick={hideNav}>
                        <button className='px-4 my-1 pb-1 hover:text-white font-medium hover:bg-red-500 rounded duration-200 ease text-center'>Signup</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SidebarMenu