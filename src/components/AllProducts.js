import React from 'react'

const AllProducts = ({product}) => {
  return (
    <div className=' h-full flex items-center justify-center flex-col w-[400px] hover:scale-[1.02] ease-in-out duration-200 cursor-pointer shadow-xl'>
        <div className=' w-[150px]'>
            <img src={product.image} alt="" className='object-contain w-full h-[215px]' />
        </div>
        <div className='flex flex-col my-4'>
            <h2 className='text-[15px] font-bold'>{product.title}</h2>
            <div className='py-2'>
                <p className='text-green-600 font-medium'>{product.price.toFixed(0)} $</p>
            </div>
        </div>
    </div>
  )
}

export default AllProducts