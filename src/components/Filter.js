import React, { useState } from 'react'

const Filter = (props) => {
  const [filteredValue , setfilteredValue] = useState('')

const filterHandler = (e) =>{
  setfilteredValue(e.target.id)
  props.onFilter(filteredValue)
}

  return (
    <div>
        <ul onClick={filterHandler} className='flex ml-1 justify-evenly flex-wrap items-center mt-4 sm:w-[60%]'>
            <li className='m-4 cursor-pointer px-4 rounded-2xl border-2 border-black hover:bg-black hover:text-white' id='all' >All</li>
            <li className='m-4 cursor-pointer px-4 rounded-2xl border-2 border-black hover:bg-black hover:text-white' id={`men's clothing`} >Men's clothing</li>
            <li className='m-4 cursor-pointer px-4 rounded-2xl border-2 border-black hover:bg-black hover:text-white' id={`women's clothing`}>Women's clothing</li>
            <li className='m-4 cursor-pointer px-4 rounded-2xl border-2 border-black hover:bg-black hover:text-white' id='jewelery'>Jewelery</li>
            <li className='m-4 cursor-pointer px-4 rounded-2xl border-2 border-black hover:bg-black hover:text-white' id='electronics' >Electronics</li>
        </ul>
    </div>
  )
}

export default Filter