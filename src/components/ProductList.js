import React from 'react'
import { Link } from "react-router-dom"
import ProductDetail from './ProductDetail'

const ProductList = ({ product }) => {
    return (
        <div className='h-auto my-12 flex items-center justify-center flex-col w-[400px] hover:scale-[1.02] ease-in-out duration-200 cursor-pointer shadow-xl'>
            <Link to={`/products/${product.id}`} key={product.id} element={<ProductDetail />}>
                <div className="flex flex-col items-center">
                    <div className='w-[150px]'>
                        <img src={product.image} alt="" className='object-contain w-full h-[215px]' />
                    </div>
                    <div className='flex flex-col h-auto items-center flex-wrap my-4 py-2'>
                        <h2 className='text-[15px] font-bold'>{product.title}</h2>
                        <div className='py-2'>
                            <p className='text-green-600 font-medium'>{product.price?.toFixed(0)} $</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductList