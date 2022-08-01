import React from 'react'
import { Link , useNavigate} from "react-router-dom"


const Login = () => {

const navigate = useNavigate() 

 const submitHandler = (e) =>{
    e.preventDefault();
    // Validataion if needed
    navigate('/')
 }


  return (
    <div className='flex flex-col p-10 my-20 w-[40%] h-auto mx-auto shadow-2xl'>
      <form onSubmit={submitHandler} className='flex flex-col px-12'>
        <lable htmlfor="email" className="my-2 text-lg">Email</lable>
        <input required type="email" name='email' className="p-1 px-2 outline-none border-none rounded bg-gray-200/60 focus:bg-gray-300" placeholder='email' />
        <lable htmlfor="password" className="my-2 text-lg">Password</lable>
        <input required type="password" name="password" className=" p-1 px-2 outline-none border-none rounded bg-gray-200/60" placeholder='password' />
        <button className='flex w-[4rem] justify-center my-4 text-white font-medium rounded-lg p-1 bg-blue-500 hover:bg-blue-600'>Log in</button>
        <div>
          <p>New User ? <Link to="/signup" className='hover:underline hover:text-blue-500'>
            Sign up here.
          </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login