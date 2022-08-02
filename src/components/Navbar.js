import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart)

    return (
        <div className='max-w-[1640px] bg-blue-600/90 mx-auto flex flex-wrap justify-between items-start p-3 shadow-xl'>
            <div className='flex flex-wrap items-center justify-between w-[100%] mx-auto'>
                <div className='flex items-center md:ml-12 sm:ml-12'>
                    <h1 className='mx-1 font-medium text-xl text-white'>
                        <Link to="/">
                            LOGO
                        </Link></h1>
                    <div className='w-[200px] sm:w-[300px] lg:w-[500px] flex items-center bg-white p-1 mx-2 shadow-2xl rounded-sm'>
                        <input type="text" placeholder='Search for producs, brands and more' className='outline-none border-none w-full m-1 pl-4 placeholder:text-gray-400 ' />
                        <SearchIcon style={{ marginRight: '8px', cursor: 'pointer', fontSize: '30px', fill: 'blue' }} />
                    </div>
                    <Link to="/login">
                        <div className='bg-white mx-5 px-12 cursor-pointer rounded-sm shadow-sm '>
                            <button className=' text-blue-500 text-xl font-medium my-[4px]'>Login</button>
                        </div>
                    </Link>
                        
                </div>
                <div>
                    <div className='flex justify-center items-center cursor-pointer'>
                      <Link to="/products">
                      <div className='mx-4 text-[19px] font-bold text-white'>All Products</div>
                      </Link>
                    <Link to="/cart">
                        <div className='flex items-center'>
                            <Badge badgeContent={items.length} color="warning">
                                <ShoppingCartIcon style={{ fontSize: '30px', fill: 'white' }} />
                            </Badge>
                            <button className=' text-[19px] px-2 font-bold text-white'>
                                Cart
                            </button>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar