import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { remove } from '../store/CartSlice';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch()
    const item = useSelector((state) => state.cart)

    const removeItemHandler = (itemId) => {
        console.log(itemId)
        dispatch(remove(itemId))
    }

    return (
        <>
            {item.length === 0 ? <div className='w-[30%] h-auto text-center items-center flex-col justify-center mx-auto mt-28 flex'><ProductionQuantityLimitsIcon style={{ fontSize: '65px', fill: "red" }} /><p className='text-2xl pt-2'>Your Cart is empty. Add some item from <Link to="/" className='cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white px-2 rounded'>here.</Link></p></div> : <div className=' rounded-2xl shadow-2xl w-[80%] h-auto flex mx-auto my-20 '>
                {item.map((item) => (
                    <div className='flex w-full p-5' key={item.id}>
                        <img src={item.image} alt="" className='w-[250px] object-contain' />
                        <div className='flex px-10 flex-wrap flex-col justify-evenly w-[50%]'>
                            <h1 className='text-3xl font-medium'>{item.title}.</h1>
                            <div>
                                <p className='text-lg'>{item.description}</p>
                            </div>
                            <div className='mt-5 font-medium shadow-md rounded bg-red-500 w-16 border-t py-1 text-center'>
                                <p>{item.price?.toFixed(0)}$</p>
                            </div>
                        </div>
                        <div className='flex justify-end h-auto w-auto items-end '>
                            <button className='cursor-pointer' onClick={() => removeItemHandler(item.id)}>
                                <DeleteOutlineOutlinedIcon style={{ fontSize: '25px', fill: 'coral' }} />
                                Remove</button>
                        </div>
                    </div>
                ))}

            </div>}
        </>
    )
}

export default Cart