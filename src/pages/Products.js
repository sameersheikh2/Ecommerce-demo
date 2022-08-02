import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data)
      setProducts(data)

    }
    fetchProduct();
  }, [])


  return (
    <div className='w-[95%] mx-auto'>
      <h1 className='mt-12 ml-11 text-2xl font-medium'>All Products -</h1>
    <div className='flex flex-wrap gap-4 rounded justify-center mt-[5rem] '>
          {products.map((product)=>(<ProductList product={product} />) )}
    </div>
    </div>
  )
}

export default Products
