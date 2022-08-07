import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai'
import SidebarMenu from './SidebarMenu';
import { navHandler } from '../store/NavSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart)
    const nav = useSelector((state) => state.nav.showNav)
    const user = useSelector((state) => state.user)
    // const [nav, setNav] = useState(false)

    const showNav = () => {
        dispatch(navHandler())
    }

    return (
        <div className='max-w-[1640px] bg-gray-600 p-3 mx-auto flex flex-wrap justify-start items-center shadow-xl'>

            {/* left section */}

            <div className='flex flex-wrap items-center justify-between w-[100%] mx-auto'>
                <div className='flex justify-start md:justify-center flex-wrap items-center md:ml-12 sm:ml-12 '>
                    <AiOutlineMenu size={30} className='lg:hidden fill-white cursor-pointer' onClick={showNav} />
                    <h1 className='mx-5 text-center font-medium text-xl text-white'>
                        <Link to="/">
                            LOGO
                        </Link></h1>
                    <div className='w-[200px] flex sm:w-[340px] lg:w-[500px] items-center bg-white p-1 mx-2 shadow-2xl rounded-sm'>
                        <input type="text" placeholder='Search for producs, brands and more' className='outline-none border-none w-full m-1 pl-4 placeholder:text-gray-400 ' />
                        <SearchIcon style={{ marginRight: '8px', cursor: 'pointer', fontSize: '30px', fill: 'gray' }} />
                    </div>
                    { <Link to="/login" className='lg:inline hidden'>
                        <div className='bg-white mx-5 px-12 cursor-pointer rounded-sm shadow-sm '>
                            <button className=' text-gray-500 text-xl font-medium my-[4px] '>Login</button>
                        </div>
                    </Link>}
                </div>

                {/* right section */}

                <div className='flex justify-center items-center '>
                    <Link to="/cart">
                        <div className='flex items-center justify-start cursor-pointer'>
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
            {nav && <SidebarMenu />}
        </div>
    )
}

export default Navbar