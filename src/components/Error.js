import React from "react";
import { Link } from "react-router-dom";
import errorPage from "../assets/error.jpg";

const Error = () => {
  return (
    <div className="max-w-[99%] m-auto my-5 relative">
      <div className="absolute flex flex-col items-center justify-center w-[100%] flex-wrap">
        <h1 className="lg:text-[75px] text-[35px] tracking-wider text-red-500 font-medium">
          Error 404
        </h1>
        <p className="text-red-400 md:text-[17px] text-[10px]">
          Page Not Found!
        </p>
        <Link to="/">
          <button className="bg-black text-white font-normal md:mt-3 px-2 rounded border-white md:text-3xl shadow-2xl text-[10px]">
            HOME
          </button>
        </Link>
      </div>
      <img src={errorPage} alt="error" className="object-contain " />
    </div>
  );
};

export default Error;
