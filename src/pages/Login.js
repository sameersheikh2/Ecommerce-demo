import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log(user);

  const submitHandler = (e) => {
    e.preventDefault();
    // Validataion if needed
    navigate("/");
  };

  return (
    <div className="h-[75vh]">
      <form
        onSubmit={submitHandler}
        className="flex flex-col p-10 my-20 flex-wrap bg-white lg:w-[40%] md:w-[40%] sm:w-[50%] h-auto mx-auto shadow-4xl"
      >
        <label htmlFor="email" className="my-2 text-base text-gray-600">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          className="p-1 px-2 outline-none border-none rounded bg-gray-200/60 focus:bg-gray-300"
          placeholder="email"
        />
        <label htmlFor="password" className="my-2 text-base text-gray-600">
          Password
        </label>
        <input
          required
          type="password"
          name="password"
          className=" p-1 px-2 outline-none border-none rounded bg-gray-200/60"
          placeholder="password"
        />
        <button className="flex w-[4rem] justify-center my-4 text-white font-medium rounded-lg p-1 bg-blue-500 hover:bg-blue-600">
          Log in
        </button>
        <div>
          <p>
            New User ?{" "}
            <Link to="/signup" className="hover:underline hover:text-blue-500">
              Sign up here.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

// onChange={(e) =>{setEmail(e.target.value)}}
// onChange={(e)=>{setPass(e.target.value)}}
