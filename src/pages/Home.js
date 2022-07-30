import React, { useEffect, useState } from 'react'
import AllProducts from '../components/AllProducts'
import Product from "../components/Product"
import { Link } from "react-router-dom"


const Home = () => {
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
        <>
            <div className='w-[95%] mx-auto'>
            <h1 className='font-bold text-4xl mt-12'>Products</h1>
                <div className='flex flex-wrap gap-4 rounded justify-center mt-[5rem] '>
                    {products.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id} element={<Product />}>
                            <AllProducts product={product} />
                        </Link>))}
                </div>
            </div>
        </>
    )
}
export default Home