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
        dispatch(remove(itemId))
    }

    return (
        <>
            {item.length === 0 ? <div className='w-[30%] h-auto text-center items-center flex-col justify-center mx-auto mt-28 flex'><ProductionQuantityLimitsIcon style={{ fontSize: '65px', fill: "red" }} /><p className='text-2xl pt-2'>Your Cart is empty. Add some item from <Link to="/products" className='cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-white px-2 rounded'>here.</Link></p></div> : <div className=' rounded-2xl shadow-2xl w-[80%]  h-auto flex flex-col  mx-auto my-20 '>
                {item.map((item) => (
                    <div key={item.id} className="flex flex-col justify-evenly flex-wrap sm:flex-row p-5 my-3">
                        <div className="w-[250px] h-auto ">
                            <img src={item.image} alt="" className='object-contain' />
                        </div>
                        <div className="max-w-[100%] justify-between sm:max-w-[50%]  flex flex-wrap flex-col">
                            <div>
                                <h1 className='text-3xl font-medium'>{item.title}</h1>
                                <p className='text-base mt-8'>{item.description}</p>
                            </div>
                            <div>
                                <div className="flex mt-6 justify-between items-center ">
                                    <p className=' font-medium shadow-md rounded bg-red-500 w-16 border-t py-1 text-center'>{item.price?.toFixed(0)}$</p>
                                    <button className='cursor-pointer hover:shadow-xl hover:scale-[1.04] duration-75 ease' onClick={() => removeItemHandler(item.id)}>
                                        <DeleteOutlineOutlinedIcon style={{ fontSize: '25px', fill: 'coral', }} />
                                        Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>}
        </>
    )
}

export default Cart
